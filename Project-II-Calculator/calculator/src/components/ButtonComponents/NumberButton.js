import React from 'react';
import './Button.css';

function NumberButton({ value, style, setValue }) {
    return (
        <div onClick={() => setValue(value)} className={style}>{value}</div>
    );
}

export default NumberButton;