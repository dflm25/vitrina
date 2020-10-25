/**
 * Home page actions
 */

import * as action from '../redux/actions';
import Http from './Http';
import { host } from '../utils';

export function fetchProducts(credentials) {
    return async (dispatch) => {
        dispatch(action.setSpinner(true));
        Http.get(`${host}get-productos-home`, credentials)
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

export function fetchCategorias() {
    return async (dispatch) => {
        dispatch(action.setSpinner(true));
        Http.get(`${host}get-categorias-home`)
        .then((res) => {
            const { data } = res;
            dispatch(action.setHomeCategorias(data));    
        })
        .catch((error) => {
            console.log('error loading category', error);
        })
    };    
}