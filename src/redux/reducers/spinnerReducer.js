/**
 * 
 */
import { SET_SPINNER } from '../constants';

export default spinnerReducer = (state = false, action) => {
    switch(action.type) {
        case SET_SPINNER:
            return action.state
        default:
            return state
    }
}