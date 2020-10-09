import React from 'react';
import './Home.css';

import Nav from '../../Header/Nav';
import Hero from './Hero/Hero';
import Clients from './Clients/Clients';
import Features from './Features/Features';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div id='Home'>
            <Nav />
            <Hero />
            <Clients />
            <Features />
            <Footer />
        </div>
    )
}

export default Home;