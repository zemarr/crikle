import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';


const Button = (props) => {
    return (
        <button className={props.cName}>{props.title}</button>
    );
}

export const BackArrow = (props) => {
    return (
        <Link to={props.url}>
            <div className="go-back-icon"></div>
        </Link>
    )
}

export const ForwardArrow = () => {
    return(
        <div className="go-forward-icon"></div>
    )
}


export default Button;