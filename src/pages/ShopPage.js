import React from 'react';
// Import components
import PagePath from '../Components/pagePath/PagePath';
import ShopProducts from '../Components/shopProducts/ShopProducts';

const ShopPage = () => {
    return (
        <div className="shop-page">
            <PagePath />
            <ShopProducts />
        </div>
    );
};

export default ShopPage;
