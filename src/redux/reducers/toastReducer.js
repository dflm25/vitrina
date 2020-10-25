/**
 * 
 */
import { SET_TOAST_ERROR } from '../constants';

export default toastReducer = (state = null, action) => {
    switch(action.type) {
        case SET_TOAST_ERROR:
            return action.payload
        default:
            return state
    }
}