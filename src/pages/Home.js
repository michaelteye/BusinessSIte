import React from 'react';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            {/* <Services />
            <Portfolio />
            <Clients /> */}
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

