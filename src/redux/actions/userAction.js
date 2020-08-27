import {SET_ERRORS,SET_USER,LOADING_UI,CLEAR_ERRORS, SET_UNAUTHENTICATED,LOADING_USER,LOADING_DATA} from '../type'
import axios from 'axios'

export const loginUser = (userData,history) => (dispatch) => {
    dispatch({type : LOADING_UI})

    axios.post('https://us-central1-mysocialapp-92266.cloudfunctions.net/api/login',userData)
        .then(res => {
            
            localStorage.setItem('FBIdToken',`Bearer ${res.data.token}`)
            axios.defaults.headers.common['Authorization']= `Bearer ${res.data.token}`
            dispatch(getUserData())
            dispatch({
                type : CLEAR_ERRORS
            })
            history.push('/')
           
        })
        .catch(error => {
            dispatch({
                type : SET_ERRORS,
                payload : error.response.data
            })
             
        })
}


export const getUserData = () => (dispatch) => {
    dispatch({
        type : LOADING_USER
    })
    axios.get('https://us-central1-mysocialapp-92266.cloudfunctions.net/api/user')
        .then(res => {
            
            dispatch({
                type : SET_USER,
                payload : res.data
            })
        })
        .catch(err => console.log(err))
}


export const signUp = (userData,history) => (dispatch) => {
    dispatch({type : LOADING_UI})
    axios.post('https://us-central1-mysocialapp-92266.cloudfunctions.net/api/signup',userData)
        .then(res => {
            localStorage.setItem('FBIdToken',`Bearer ${res.data.token}`)
            axios.defaults.headers.common['Authorization']= `Bearer ${res.data.token}`
            dispatch(getUserData())
            dispatch({
                type : CLEAR_ERRORS
            })
            history.push('/')
           
        })
        .catch(error => {
            dispatch({
                type : SET_ERRORS,
                payload : error.response.data
            })
             
        })
}

export const logOut = () => (dispatch)=> {
    
    localStorage.removeItem('FBIdToken')
    delete axios.defaults.headers.common['Authorization']
    dispatch({
        type : SET_UNAUTHENTICATED
    })
}

export const uploadImage = (formData) => (dispatch) => {
    dispatch({
        type : LOADING_USER
    })
    axios.post('https://us-central1-mysocialapp-92266.cloudfunctions.net/api/user/uploadimage',formData)
        .then(res => {
            
            dispatch(getUserData())
        })
        .catch(err => console.log(err))
     
}  

export const updateUserDetails = (userDetail) => (dispatch) => {
    dispatch({
        type : LOADING_USER
    })
    axios.post('https://us-central1-mysocialapp-92266.cloudfunctions.net/api/user',userDetail)
        .then(res => {  
            dispatch(getUserData())
        })
        .catch(err => console.log(err))
}

