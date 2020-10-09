import React from 'react';

import './Button.css';


const Button = (props) => {
    return (
        <button className={props.cName}>{props.title}</button>
    );
}

export default Button;