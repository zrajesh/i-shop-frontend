import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// Import actions
import { getAllProducts } from '../../redux/actions/productAction';
// Import components
import HomeProdNav from './HomeProdNav';
import Card from '../Card/Card';
// Import css
import "./HomeProducts.scss";

const HomeProducts = () => {
    const products = useSelector(state => state.products.products);

    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch(err => console.log("ERROR: ", err))
        dispatch(getAllProducts(response.data))
    }

    useEffect(() => {
        fetchProducts();
    })
    return (
        <div className="home-products">
            <HomeProdNav />
            <div className="home-card-wrap">
            {
                products.filter(product => product.id <= 10).map(product => (
                    <Card key={product.id} product={product} />
                ))
            }
            </div>
        </div>
    );
};

export default HomeProducts;
