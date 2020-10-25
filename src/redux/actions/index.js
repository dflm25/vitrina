/**
 * Actions application
 */
import { 
    TOGGLE_MENU, 
    SET_HOME_PRODUCTOS, 
    SET_LOADING_HOME_PRODUCTOS, 
    SET_TOAST_ERROR,
    SET_SPINNER,
    SET_HOME_CATEGORIAS
} from '../constants'

// setSpinner overlay
export const setSpinner = state => {
    return { 
        type: SET_SPINNER,
        state
    }
}

// Toggle menu
export const toggleMenu = () => {
    return { 
        type: TOGGLE_MENU 
    }
}
// Se products home
export const setHomeProductos = (content) => {
    return { 
        type: SET_HOME_PRODUCTOS,
        payload: content
    }
}

// Set categories home
export const setHomeCategorias = (content) => {
    return { 
        type: SET_HOME_CATEGORIAS,
        payload: content
    }
}

export const setLoadingProductosHome = (status) => {
    return { 
        type: SET_LOADING_HOME_PRODUCTOS,
        status
    }
}

export const setToastError = (payload) => {
    return { 
        type: SET_TOAST_ERROR,
        payload
    }
}

