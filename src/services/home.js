/**
 * Home page actions
 */
import * as action from '../redux/actions';
import { host } from '../utils'

export function fetchProducts(credentials) {
    return async (dispatch) => {
        dispatch(action.setLoadingProductosHome(true));
        const response = await fetch(`${host}get-productos-home`, credentials);
        const productos = await response.json();
        dispatch(action.setHomeProductos(productos));
    };    
}
  
