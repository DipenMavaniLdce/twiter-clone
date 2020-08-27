import  {LOADING_DATA,COMMENT_SCREAM,UNCOMMENT_SCREAM,LIKE_SCREAM,UNLIKE_SCREAM,SET_SCREAMS,DELETE_SCREAM,POST_SCREAM,SET_SCREAM} from '../type'

const initialState = {
    loading : false,
    screams : [],
    scream : {}
}

function dataReducer(state=initialState,action){
    switch(action.type){
        case LOADING_DATA:
            return {
                ...state,
                loading : true
            }
        case LIKE_SCREAM:
        case UNLIKE_SCREAM:
            let index = state.screams.findIndex(scream => scream.Screamid === action.payload.Screamid)
            state.screams[index] = action.payload
            if(state.scream.Screamid === action.payload.Screamid){
                state.scream = action.payload
            }
            return {
                ...state,       
            }
        case SET_SCREAMS:
            return {
                ...state,
                screams : action.payload,
                loading : false,
                
            }
        case DELETE_SCREAM:
              return {
                ...state,
                screams : state.screams.filter(
                    scream => scream.Screamid !== action.payload
                )
              }
        case POST_SCREAM:
            return{
                ...state,
                screams : [
                    action.payload,
                    ...state.screams,

                ]
            }
        case SET_SCREAM : 
            return{
                ...state,
                scream : action.payload
            }
        case COMMENT_SCREAM:
            return {
                ...state,
                scream: {
                  ...state.scream,
                  comments: [action.payload, ...state.scream.comments]
                }
            }    
        default:
             return state

    }
}

export default dataReducer