// Avatar component takes the following props:
// - cName: alias for className (expecting a string)


import React, { Fragment } from 'react';
import './Avatar.css'

const Avatar = (props) => {
    return <Fragment>
        <div id="avatar">
            <div className={props.cName} style={{backgroundImage: `${require('../../img/headshot1.jpg')}`}} ></div>
        </div>
    </Fragment>
}

export default Avatar;