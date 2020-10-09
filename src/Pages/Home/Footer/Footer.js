import React from 'react';
import './Footer.css';

import Logo from '../../../Header/Logo/Logo'
import { Link } from 'react-router-dom';

const footerData = [
    {
        title: 'Home',
        url: '/',
        id: 6
    },
    {
        title: 'Features',
        url: '/features',
        id: 7
    },
    {
        title: 'How it works',
        url: '/faqs',
        id: 8
    },
    {
        title: 'Pricing & Plans',
        url: '/',
        id: 9
    },
    {
        title: 'Messenger',
        url: '/',
        id: 10
    },
    {
        title: 'Twitter',
        url: '/',
        id: 11
    },
    {
        title: 'Slack',
        url: '/faqs',
        id: 12
    },
    {
        title: 'Line',
        url: '/',
        id: 13
    },
    {
        title: 'Help Center',
        url: '/',
        id: 14
    },
    {
        title: 'Docs',
        url: '/',
        id: 15
    },
    {
        title: 'Console',
        url: '/',
        id: 16
    },
    {
        title: 'Terms & Conditions',
        url: '/',
        id: 17
    },
    {
        title: 'Privacy Policy',
        url: '/',
        id: 18
    }
]

const Footer = () => {
    const getProductNavigation = footerData.filter(item => item.id < 10);
    const getIntegrationsNavigation = footerData.filter(item => (item.id > 9 && item.id < 14));
    const getSupportNavigation = footerData.filter(item => (item.id > 13 && item.id < 17));
    const getLegalNavigation = footerData.filter(item => (item.id > 16 && item.id >= 17));
    return (
        <section id="footer">
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Logo cName="footer-logo" />
                            <div className="social"></div>
                            <p>&copy; 2020 Crickle. All rights reserved.</p>
                        </div>
                        <div className="col-md-2">
                            <div>
                                <h5>Product</h5>
                                <ul className="footer-links">
                                    {getProductNavigation.map(data =>
                                        <Link to={data.url} key={data.id}>
                                            <li>{data.title}</li>
                                        </Link>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div>
                                <h5>Integrations</h5>
                                <ul className="footer-links">
                                    {getIntegrationsNavigation.map(data =>
                                        <Link to={data.url} key={data.id}>
                                            <li>{data.title}</li>
                                        </Link>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div>
                                <h5>Support</h5>
                                <ul className="footer-links">
                                    {getSupportNavigation.map(data =>
                                        <Link to={data.url} key={data.id}>
                                            <li>{data.title}</li>
                                        </Link>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div>
                                <h5>Legal</h5>
                                <ul className="footer-links">
                                    {getLegalNavigation.map(data =>
                                        <Link to={data.url} key={data.id}>
                                            <li>{data.title}</li>
                                        </Link>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;