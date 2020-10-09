import React, { Fragment } from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero">
            <div className="herobackground">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="landing-asset welcome">
                                <Fragment>
                                    <h1>Build AI-Powered to Talk with a customer</h1>
                                    <p className="welcome-subtext">Need a customer to help your business engagement? We can
                                    help!<br />Let's get
                                    started, it is very easy to set up.</p>
                                </Fragment>
                                <Fragment>
                                    <div className="landing-email">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="landing-email-input input-group mb-3">
                                                    <input type="text" className="form-control"
                                                        placeholder="Enter your Email address"
                                                        aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-outline-secondary" type="button">Get
                                                        started</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                                <Fragment>
                                    <div className="guarantee">
                                        <p><i className="fa fa-check-circle"></i> 30 days free trial full service</p>
                                        <p><i className="fa fa-check-circle"></i> No debit or credit card required</p>
                                    </div>
                                </Fragment>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="landing-asset"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;