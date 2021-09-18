import React from 'react';
// Import components
import BannerImage from './BannerImage';
// Import list
import { headerTopImage } from '../../pages/BannerList';
// Import scss
import "./Banner.scss";

const Banner = () => {
    const imageUrl = headerTopImage.imageUrl;
    return (
        <div className="banner">
            <BannerImage
             imageUrl={imageUrl} 
             bannerClass="banner-top-image" 
            />
        </div>
    );
};

export default Banner;
