/**
 * Home reducer
 */
import {SET_HOME_PRODUCTOS, SET_LOADING_HOME_PRODUCTOS} from '../constants';

const initialState = {
  loading: false,
  data: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_HOME_PRODUCTOS:
      return Object.assign({}, state, {
        loading: action.status,
      });
    case SET_HOME_PRODUCTOS:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload,
      });
    default:
      return state;
  }
};

export default homeReducer;