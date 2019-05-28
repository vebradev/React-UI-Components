import React from 'react';
import './Card.css';

function CardBanner({ image, alt }) {
    return <img className="cardBanner" src={image} alt={alt} />
}

export default CardBanner;