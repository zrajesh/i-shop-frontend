import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Import components
import Card from '../Card/Card';
import { getAllProducts } from '../../redux/actions/productAction';
// Import list
import { Loading } from '../Loading';
// Import css
import "./ProductDisplay.scss";

const ProductDisplay = ({page}) => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();
    const displayHotBox = false;
    // Selecting url based on from where Product Display is called
    let fetchUrl;
    switch(page) {
        case "SHOP":
            fetchUrl = "https://fakestoreapi.com/products"
            break;
        case "MEN":
            fetchUrl="https://fakestoreapi.com/products/category/men's clothing"
            break;
        case "WOMEN":
            fetchUrl="https://fakestoreapi.com/products/category/women's clothing"
            break;
            case "ACCESSORIES":
                fetchUrl="https://fakestoreapi.com/products/category/electronics"
                break;
        case "JEWELLERY":
            fetchUrl = "https://fakestoreapi.com/products/category/jewelery"
            break;

        default:
            fetchUrl = "https://fakestoreapi.com/products"
    }
    const fetchProducts =   async () => {
        const response = await axios
            .get(fetchUrl)
            .catch(err => console.log("ERROR: ", err))
        dispatch(getAllProducts(response.data))
    }

    useEffect(() => {
        fetchProducts();
        // Disabling the dependency pass warning
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="product-display">
            <div>
            {
                products.length === 0 ?
                <div><h1 style={{textAlign: 'center'}}>
                {Loading.message}
                </h1></div>
                : null
            }
            <div className="display-card">
            {
                products.map(product => (
                    <Card key={product.id} displayHotBox={displayHotBox} product={product} />
                ))
            }
            </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
