/**
 * Home reducer
 */
import {SET_HOME_CATEGORIAS} from '../constants';

const initialState = [];

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOME_CATEGORIAS:
      return state, action.payload;
    default:
      return state;
  }
};

export default categoryReducer;