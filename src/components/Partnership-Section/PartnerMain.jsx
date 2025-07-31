import React from 'react';
import '../../App.css';

import Header from '../../ReuseableComponents/header';
import Footer from '../../ReuseableComponents/footer';
import LandingPage from './landingPage';
import WhyUs from './whyus';
// import Feature from './features';
import Talk from './talk';


// Main partner Component
const PartnerMain = () => {
    return (
        <div>
            <Header />
            <LandingPage />
            <WhyUs />
            {/* <Feature /> */}
            <Talk />
            <Footer />
        </div>
    );
};

export default PartnerMain;