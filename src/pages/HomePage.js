import React from 'react';
// Import components
import Banner from '../Components/banner/Banner';
import MobBanner from '../Components/banner/MobBanner';

const HomePage = () => {
    return (
        <div className="homepage">
            <Banner />
            <MobBanner />
        </div>
    );
};

export default HomePage;
