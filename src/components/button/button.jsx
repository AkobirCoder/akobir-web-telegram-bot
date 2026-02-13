import React from 'react';
import './button.css';

const Button = ({type, title}) => {
    return (
        <button className={`btn ${
            type === 'add' && 'add' ||
            type === 'remove' && 'remove' ||
            type === 'checkout' && 'checkout'
        }`}>
            {title}
        </button>
    );
}

export default Button;