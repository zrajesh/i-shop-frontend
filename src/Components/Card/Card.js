import React from 'react';
// Import css
import "./Card.scss";

const Card = ({product}) => {
    const {image, title, price, rating:{rate}} = product;
    const truncateString = (str, words) => {
        return str.split(" ").splice(0,words).join(" ");
    }
    return (
        <div className="card">
            <div 
             className="card-image"
             style={{backgroundImage: 
                `url(${image})`, 
                backgroundRepeat: "no-repeat",
                WebkitBackgroundSize: "cover"
            }}
            >
            </div>
            <div className="card-text">
            <p className="card-head">{truncateString(title, 4)}</p>
            <p className="rating">{rate}</p>
            <p className="price">${price}<span className="price-line">$999</span></p>
            </div>
        </div>
    );
};

export default Card;
