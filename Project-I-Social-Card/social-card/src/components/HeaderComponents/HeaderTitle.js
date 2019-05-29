import React from 'react';
import './Header.css';

function HeaderTitle({ text, handle }) {
    return (
        <div className="headerTitle">
            <div className="title">{text}</div>
            <div className="handle">{handle}</div>
            <div className="date">2006</div>
        </div>
    );
}

export default HeaderTitle;