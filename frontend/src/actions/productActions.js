import axios from "axios";
import { PRODUCT_DET_FAIL, PRODUCT_DET_REQUEST, PRODUCT_DET_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"

const listProducts = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});
        const {data} = await axios.get("/api/products");
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
        
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload:error.message})
    }   
}

const detProduct = (productId) => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_DET_REQUEST, payload: productId});
        const {deta} = await axios.get("/api/products/" + productId);
        dispatch({type: PRODUCT_DET_SUCCESS, payload: deta});
    } catch (error) {
        dispatch({type: PRODUCT_DET_FAIL, payload:error.message})
    }
}

export { listProducts, detProduct }