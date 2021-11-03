import {Link} from "react-router-dom"
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

function HomeScreen(props) {

    /*creating hooks for fetching data from api*/
    const productList = useSelector(state => state.productList);
    const {mYproducts, loading, error} = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        return () => {
            //
        };
    }, [])


    return loading? <div>Loading...</div> :
    error? <div>{error}</div> :

        <ul className="products">
        {
            mYproducts.map(product => 
                <li key={product._id}>
                    <div className="product">
                        <Link to={'/product/' + product._id}>
                            <img className="product-image" src={product.image} alt="product"/>
                        </Link>
                        <div className="product-name">
                            <Link to={'/product/' + product._id}>{product.name}</Link>
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">GHS {product.price}</div>
                        <div className="product-rating">{product.rating} Stars {product.numReviews}</div>
                    </div>
                </li>)
        }
        </ul>
}
export default HomeScreen;


