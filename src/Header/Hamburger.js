import React from 'react';

import './Hamburger.css';

export const Hamburger = (props) => {
    return (
        <div className='hamburger-container' onClick={props.click}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export const CloseHamburger = (props) => {
    return (
        <div className='close-hamburger' onClick={props.click}>
            <div className='up'></div>
            <div className='down'></div>
        </div>
    )
}
