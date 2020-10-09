import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import './Features.css';

import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';

const Features = () => {
    return (
        <Fragment>
            <section id="features">
                <div className="features-background">
                    <div className="index-1 container">
                        <h2>Reach engagement for your new experience</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <Card title='Great cross Platform'
                                    text='Whether you are on-the-go or at home, engage through
                                    wearables, phones, cars,
                                    speakers and other smart devices.'
                                    destination='/'
                                    buttonName='Learn more' />
                            </div>
                            <div className="col-md-4">
                                <Card title='Build multiple platforms'
                                    text='Build actions, skills, bots, and apps for the Google
                                    Assistant, Alexa, Cortana and other platforms your colleagues are on.'
                                    destination='/'
                                    buttonName='Learn more' />
                            </div>
                            <div className="col-md-4">
                                <Card title='Reach across the Globe'
                                    text='Broaden your reach globally with 20+ supported languages
                                including Indonesia,
                                French,
                                    Japanese and Portugese'
                                    destination='/'
                                    buttonName='Learn more' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="features-background2">
                    <div className="index-2 container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mobile-chatui"></div>
                            </div>
                            <div className="col-md-6">
                                <Fragment>
                                    <div className="realtime-feature">
                                        <h3>Crickle Realtime Features</h3>
                                        <p>Access to Crickle's superpowers powered by Zemflow for more integration. You can set
                                        up auto responses for when you are not currently available to reply messages. Messages sent
                                        on Crickle are super fat. We ensure your messages are delivered quickly</p>
                                        <button className="try-free buttn">Try for free</button>
                                    </div>
                                </Fragment>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="features-background3">
                    <div className="index-3 container">
                        <div className="row">
                            <div className="col-md-6">
                                <Fragment>
                                    <div className="media-rich">
                                        <h3>Media-rich messaging</h3>
                                        <p>Crickle messaging is not limited to texts alone. Have fun and make memories while
                                        sharing multimedia like images, videos, emojis, memes and stickers.</p>
                                    </div>
                                </Fragment>
                            </div>
                            <div className="col-md-6">
                                <div className="mobile-chatui-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="usage">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className='col-md-8'>
                                <div className='usage-container'>
                                    <h2>Start using Crickle!</h2>
                                    <span>30-days Premium trial. No debit/credit card required</span>
                                    <Link to='/register'>
                                        <Button cName="try-free buttn" title='Try for free' />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </section>
            </section>
        </Fragment>
    )
}

export default Features;