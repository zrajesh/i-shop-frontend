import React from 'react';
import { Link } from 'react-router-dom';

// Import css
import "./CartHover.scss";

const CartHover = () => {
    return (
        <div className="cart-hover-wrap">
            <Link to="/cart">
                <i className="cart-hover fas fa-shopping-cart"></i>
            </Link>
        </div>
    );
};

export default CartHover;
