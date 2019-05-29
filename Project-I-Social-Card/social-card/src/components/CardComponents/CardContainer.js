import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import './Card.css';

function CardContainer() {
    return (
        <div className="cardContainer">
            <CardBanner image="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" alt="React" />
            <CardContent title="Get Started With React" text="React makes it painless to create interactive UIs. Design simple views for each state in your application." link="reactjs.org" />
        </div>
    );
}

export default CardContainer;