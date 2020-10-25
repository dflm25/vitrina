/**
 * Auth services
 */

import Http from './Http';
import { host } from '../utils'
import * as action from '../redux/actions';
import { setAuthData, setToken } from '../utils';

export const login = (credentials) => {
  return dispatch => (
    Http.post(`${host}login`, credentials)
    .then((res) => {
      const { data: { token, user } } = res;
      setAuthData(user);
      setToken(token);
      dispatch(action.setSpinner(false));
    })
    .catch((error) => {
      console.log('Respuesta error', error);
      dispatch(action.setSpinner(false));
    })
  );
}
