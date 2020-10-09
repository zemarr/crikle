import React from 'react';
import {Link} from 'react-router-dom';

const Card = (props) => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">
                        {props.title}
                    </h3>
                    <p className="card-text">
                        {props.text}
                    </p>
                    <Link to={props.destination} className="learn-more buttn">
                        {props.buttonName} <i className="fa fa-angle-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card;