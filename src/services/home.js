/**
 * Home page actions
 */

import * as action from '../redux/actions';
import Http from './Http';
import { host } from '../utils';

export function fetchProducts(credentials) {
    return new Promise ((resolve, reject) => {
        // dispatch(action.setSpinner(true));
        Http.get(`${host}get-productos-home`, {
            params: credentials
        })
        .then((res) => {
            const { data } = res;
            resolve(data);
            // dispatch(action.setSpinner(false));
        })
        .catch((error) => {
            reject('Error', error);
        })
    })    
}

export function fetchCategorias() {
    return new Promise ((resolve, reject)=> {
        Http.get(`${host}get-categorias-home`)
        .then((res) => {
            const { data } = res;
            resolve(data);
        })
        .catch((error) => {
            reject(error);
        })
    });    
}