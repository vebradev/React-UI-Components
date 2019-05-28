import React from 'react';
import "./Footer.css";

function FooterIcons({ comments, retweets, likes}) {
    return (
        <div className="socialIcons">
            <button className="comments">{comments}</button>
            <button className="retweets">{retweets}</button>
            <button className="likes">{likes}</button>
        </div>
    );
}

export default FooterIcons;