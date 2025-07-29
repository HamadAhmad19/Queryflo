import React from 'react';
import '../../App.css';  // Using main App.css for styling
import LandingPage from './landingPage';
import Benefits from './Benefits';
import Help from './help';
import Feature from './feature';
import PracticeSQL from './practiceSql';
import Community from './community';
import GetStarted from './getStarted';
import ReqInfo from './ReqInfo';
import Header from '../../ReuseableComponents/header';
import Footer from '../../ReuseableComponents/footer';

// Main Home Component
const HomeCompCall = () => {
    return (
        <div>
            <Header />
            <LandingPage />
            <Benefits />
            <Help />
            <Feature />
            <PracticeSQL />
            <Community />
            <GetStarted />
            <ReqInfo />
            <Footer />
        </div>
    );
};

export default HomeCompCall;