import React from 'react';
// Import components
import Banner from '../Components/banner/Banner';
import MobBanner from '../Components/banner/MobBanner';
import HomeProducts from '../Components/HomeProducts/HomeProducts';
import MidBanner from '../Components/midBanner/MidBanner';
import ServiceFeature from '../Components/serviceFeature/ServiceFeature';

const HomePage = () => {
    return (
        <div className="homepage">
            <Banner />
            <MobBanner />
            <HomeProducts />
            <MidBanner />
            <ServiceFeature />
        </div>
    );
};

export default HomePage;
