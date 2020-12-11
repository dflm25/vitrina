/**
 * Home page actions
 */

import Http from './Http';
import { host } from '../utils';

export function fetchTallasByColor(credentials) {
    // dispatch(action.setSpinner(true));
    return new Promise ((resolve, reject) => {
        Http.get(`${host}get-productos-home`, {
            params: credentials
        })
        .then((res) => {
            const { data } = res;
            resolve(data); // dispatch(action.setSpinner(false));
        })
        .catch((error) => {
            reject(error); // dispatch(action.setSpinner(false));
        })
    });    
}