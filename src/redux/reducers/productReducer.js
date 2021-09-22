import { productActionTypes } from "../actionTypes/productActionTypes"

const INIT_STATE = {
    products: [],
    selectedProduct: []
}

export const productReducer = (state=INIT_STATE, {type, payload}) => {
    switch(type) {
        case productActionTypes.GET_PRODUCTS:
            return {
                ...state,
                products: payload
            }

        default:
            return state;
    }
}

export const selectedProductReducer = (state=INIT_STATE, {type, payload}) => {
    switch(type) {
        case productActionTypes.SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: payload
            }
        
        case productActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        
        default:
            return state;
    }
}
