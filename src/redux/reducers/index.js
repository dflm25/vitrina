/**
 * Main file with Reducers
 */

import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import homeReducer from './homeReducer';

export default combineReducers({
    menuReducer: menuReducer,
    homeReducer: homeReducer
})