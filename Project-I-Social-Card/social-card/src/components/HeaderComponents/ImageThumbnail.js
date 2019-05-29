import React from 'react';
import './Header.css';

function ImageThumbnail({ image, alt }) {
    return <img className="lambda" src={image} alt={alt} />
};

export default ImageThumbnail;