import React from 'react';
import { Link } from 'react-router-dom';
// Import css
import "./CtaButton.scss";

const CtaButton = ({cta}) => {
    return (
        <div className="cta-btn-wrap">
            <Link to="/cart" className="cta-btn">{cta}</Link>
        </div>
    );
};

export default CtaButton;
