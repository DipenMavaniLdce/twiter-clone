import {SET_ERRORS,LOADING_UI, CLEAR_ERRORS, STOP_LOADING_UI} from '../type'

const initialState = {
    loading : false,
    errors : {}
}

function uiReducer(state = initialState, action){
    switch(action.type){
        case SET_ERRORS:
            return {
                ...state,
                loading : false,
                errors : action.payload
            }
        case LOADING_UI:
            return {
                ...state,
                loading : true,
            }
        
        case STOP_LOADING_UI:
            return {
                ...state,
                loading: false
            }
        case CLEAR_ERRORS:
            return initialState
        default:
            return state
            
    }
}
export default uiReducer