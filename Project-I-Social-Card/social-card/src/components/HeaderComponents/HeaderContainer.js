import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import './Header.css';

function HeaderContainer() {
    return (
        <div className="headerContainer">
            <ImageThumbnail image="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" alt="Team Borja" />
            
            <div className="headerTextContainer">
                <HeaderTitle name="Lambda School" handle="@LambdaSchool" />
                <HeaderContent content="Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!" />
            </div>
        </div>
    );
}

export default HeaderContainer;