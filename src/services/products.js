/**
 * Home page actions
 */

import Http from './Http';
import { host } from '../utils';

export function fetchTallasByColor(credentials) {
  return async (dispatch) => {
      dispatch(action.setSpinner(true));
      Http.get(`${host}get-productos-home`, {
          params: credentials
      })
      .then((res) => {
          const { data } = res;
          dispatch(action.setHomeProductos(data));    
          dispatch(action.setSpinner(false));
      })
      .catch((error) => {
          console.log('errores', error);
          dispatch(action.setSpinner(false));
      })
  };    
}