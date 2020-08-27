import  {LOADING_DATA,
    LOADING_UI,
    CLEAR_ERRORS,
    COMMENT_SCREAM,
    UNCOMMENT_SCREAM,
    LIKE_SCREAM,
    UNLIKE_SCREAM,
    SET_SCREAMS,
    DELETE_SCREAM,
    POST_SCREAM,
    SET_ERRORS,
    SET_SCREAM,
    STOP_LOADING_UI
} from '../type'
import axios from 'axios'


export const deleteScream = (Screamid) => (dispatch) => {
    
    axios.delete(`https://us-central1-mysocialapp-92266.cloudfunctions.net/api/scream/${Screamid}`,Screamid)
        .then(res => {
        
            dispatch({
                type : DELETE_SCREAM,
                payload : Screamid
            })
        })
        .catch(err => {
            console.log(err)
        })
}

export const getScreams = () => (dispatch) => {
    dispatch({
        type : LOADING_DATA
    })
    axios.get('https://us-central1-mysocialapp-92266.cloudfunctions.net/api/screams')
     .then(res => {
         dispatch({
            type : SET_SCREAMS,
            payload : res.data,
         })
     })
     .catch(err => {
        dispatch({
            type : SET_SCREAMS,
            payload : []
         })
     }) 
}

export const likeScream = (screamId) => (dispatch) => {
    axios.get(`https://us-central1-mysocialapp-92266.cloudfunctions.net/api/scream/${screamId}/like`)
        .then(res => {
            dispatch({
                type : LIKE_SCREAM,
                payload : res.data
            })
        })
        .catch(err => console.log(err))
}

export const unlikeScream = (screamId) => (dispatch) => {
    
    axios.get(`https://us-central1-mysocialapp-92266.cloudfunctions.net/api/scream/${screamId}/unlike`)
        .then(res => {
            dispatch({
                type : UNLIKE_SCREAM,
                payload : res.data
            })
        })
        .catch(err => console.log(err))
}

export const postScream = (screamData) => (dispatch) => {
    dispatch({type : LOADING_UI})
    axios.post(`https://us-central1-mysocialapp-92266.cloudfunctions.net/api/postScreams`,screamData)
        .then(res => {
            dispatch({
                type : POST_SCREAM,
                payload : res.data
            })
            dispatch(clearErrors());
        })
        .catch(err => {
           dispatch({
               type : SET_ERRORS,
               payload : err.response.data
           })
        })

}

export const getScream = (Screamid) => (dispatch) => {
    dispatch({type : LOADING_UI})
    axios.get(`https://us-central1-mysocialapp-92266.cloudfunctions.net/api/scream/${Screamid}`)
        .then(res => {
            dispatch({
                type : SET_SCREAM,
                payload : res.data

            })
            dispatch({ type: STOP_LOADING_UI });
        })
        .catch((err) => console.log(err));
}

export const commentOnScream = (Screamid,commentData) => (dispatch) => {
    axios.post(`https://us-central1-mysocialapp-92266.cloudfunctions.net/api/scream/${Screamid}/comment`,commentData)
        .then(res => {
            dispatch({
                type : COMMENT_SCREAM,
                payload : res.data
            })
            dispatch(clearErrors())
        })
        .catch(err => {
            dispatch({
                type : SET_ERRORS,
                payload : err.response.data
            })
        })
}

export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };


  export const getUserData = (handle) => (dispatch) => {
    dispatch({type : LOADING_DATA})
    axios.get(`https://us-central1-mysocialapp-92266.cloudfunctions.net/api/user/${handle}`)
        .then(res => {
            dispatch({
                type : SET_SCREAMS,
                payload : res.data.screams
            })
            
        })
        .catch(err => {
           dispatch({
            type : SET_SCREAMS,
            payload : null
           })
        })

}