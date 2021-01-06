import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';


import { Hamburger, CloseHamburger } from './Hamburger';
import Logo from './Logo/Logo';
import Button from '../components/Button/Button'

import './Nav.css';
import { NavigationContext } from '../Context/NavigationContext';

const pageRoutes = [
    {
        title: 'Try for Free',
        url: '/chat',
        cName: 'try buttn',
        id: 4
    },
    {
        title: 'Register',
        url: '/register',
        cName: 'register buttn',
        id: 5
    }
]

const Nav = () => {
    const [navigation] = useContext(NavigationContext);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <Fragment>
            <section id='header'>
                <nav>
                    <Logo cName='static-logo' />
                    <div className="navigation">
                        <Logo cName='logo' />
                        <ul className="navItems">
                            {navigation.map((item) =>
                                <li key={item.id}>
                                    <Link to={item.url}>{item.title}</Link>
                                </li>
                            )}
                        </ul>
                        <AdminContainer />
                    </div>
                    <div className={showMobileMenu ? "hamburger-navigation active" : "hamburger-navigation"}>
                        <Logo cName='logo-mobile' />
                        <CloseHamburger click={() => setShowMobileMenu(false)} />
                        <ul className="navItems">
                            {navigation.map(mobileitem =>
                                <li key={mobileitem.id}>
                                    <Link to={mobileitem.url}>{mobileitem.title}</Link>
                                </li>
                            )}
                        </ul>
                        <AdminContainer />
                    </div>
                    <Hamburger click={() => setShowMobileMenu(true)} />
                </nav>
            </section>
        </Fragment>
    )
}

const AdminContainer = () => {
    return (
        <Fragment>
            <div className="admincontainer">
                {pageRoutes.map(route =>
                    <Link to={route.url} key={route.id}>
                        <Button cName={route.cName} title={route.title} />
                    </Link>
                )}
            </div>
        </Fragment>
    )
}


export default Nav;