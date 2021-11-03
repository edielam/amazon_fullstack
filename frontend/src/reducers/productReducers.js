import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

function productListReducer(state = { mYproducts: []}, action) {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading: true};
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, mYproducts: action.payload};
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export {productListReducer}