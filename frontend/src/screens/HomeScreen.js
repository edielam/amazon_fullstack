import {Link} from "react-router-dom"
import React, { useEffect, useState } from "react";
import axios from "axios";

function HomeScreen(props) {

    /*creating hooks for fetching data from api*/
    const [myProduct, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("api/products");
            setProduct(data);
        }
        fetchData();
        return () => {
            //
        };
    }, [])


    return <ul className="products">
    {
        myProduct.map(product => 
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


