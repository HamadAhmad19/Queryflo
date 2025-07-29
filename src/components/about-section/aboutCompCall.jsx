import React from 'react';
import '../../App.css';

import Header from '../../ReuseableComponents/header';
import Footer from '../../ReuseableComponents/footer';
import AboutUs from './aboutus';
import OurStory from './ourStory';
import OurMission from './ourMission';
import Vision from './vision';
import Serve from './serve'

// Main About Component
const aboutCompCall = () => {
    return (
        <div>
            <Header />
            <AboutUs />
            <OurStory />
            <OurMission />
            <Serve />
            <Vision />
            <Footer />
        </div>
    );
};

export default aboutCompCall;