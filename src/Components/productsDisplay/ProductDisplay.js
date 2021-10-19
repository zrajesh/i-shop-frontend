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
            fetchUrl = "https://ishop-backend.herokuapp.com/api/products"
            break;
        case "MEN":
            fetchUrl="https://ishop-backend.herokuapp.com/api/products/616d515169c469203e5c49e7"
            break;
        case "WOMEN":
            fetchUrl="https://ishop-backend.herokuapp.com/api/products/616d515c69c469203e5c49e9"
            break;
            case "ACCESSORIES":
                fetchUrl="https://ishop-backend.herokuapp.com/api/products/616d517069c469203e5c49eb"
                break;
        case "JEWELLERY":
            fetchUrl = "https://ishop-backend.herokuapp.com/api/products/616d519869c469203e5c49ed"
            break;

        default:
            fetchUrl = "https://ishop-backend.herokuapp.com/api/products"
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
                    <Card key={product._id} displayHotBox={displayHotBox} product={product} />
                ))
            }
            </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
