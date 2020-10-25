/**
 * Main file with Reducers
 */

import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import homeReducer from './homeReducer';
import toastReducer from './toastReducer';
import spinnerReducer from './spinnerReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
    categoryReducer: categoryReducer,
    menuReducer: menuReducer,
    homeReducer: homeReducer,
    toastReducer: toastReducer,
    spinnerReducer: spinnerReducer
})