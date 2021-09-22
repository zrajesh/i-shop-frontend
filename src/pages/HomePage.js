import React from 'react';
// Import components
import Banner from '../Components/banner/Banner';
import MobBanner from '../Components/banner/MobBanner';
import HomeProducts from '../Components/HomeProducts/HomeProducts';

const HomePage = () => {
    return (
        <div className="homepage">
            <Banner />
            <MobBanner />
            <HomeProducts />
        </div>
    );
};

export default HomePage;
