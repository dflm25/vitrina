/**
 * Actions application
 */
import { TOGGLE_MENU, SET_HOME_PRODUCTOS, SET_LOADING_HOME_PRODUCTOS } from '../constants'


// Toggle menu
export const toggleMenu = () => {
    return { 
        type: TOGGLE_MENU 
    }
}

export const setHomeProductos = (content) => {
    return { 
        type: SET_HOME_PRODUCTOS,
        payload: content
    }
}

export const setLoadingProductosHome = (status) => {
    return { 
        type: SET_LOADING_HOME_PRODUCTOS,
        status
    }
}