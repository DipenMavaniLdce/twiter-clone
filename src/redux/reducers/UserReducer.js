import {SET_USER, SET_AUTHENTICATED,SET_UNAUTHENTICATED,LOADING_USER,LIKE_SCREAM, UNLIKE_SCREAM} from '../type'

const initialState = {
    authenticated : false,
    loading :false,
    credentials : {},
    likes : [],
    notifications : []
}
function UserReducer(state = initialState, action){
    switch(action.type){
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated : true
            }
        case SET_UNAUTHENTICATED:
            return initialState
        
        case SET_USER:
            return {
                loading : false,
                authenticated : true,
                ...action.payload
            }
        case LOADING_USER:
            return {
                ...state,
                loading : true
            }
        case LIKE_SCREAM:
            return {
                ...state,
                likes : [
                    ...state.likes,
                    {
                        userHandle : state.credentials.handle,
                        Screamid : action.payload.Screamid
                    }
                ]
            }
        case UNLIKE_SCREAM:
            return {
                ...state,
                likes : state.likes.filter(
                    like => like.Screamid !== action.payload.Screamid
                )
            }
        default:
            return state
            
    }
}

export default UserReducer