import React from 'react';
import '../../App.css';
import backgroundImage from '../../assests/Starting Background.png';
import getStartedButton from '../../assests/get started.png';

const GetStarted = () => {
    return (
        <div className="get-started-section">
            <img
                src={backgroundImage}
                alt="Get Started"
                className="get-started-background-image"
            />
            <img
                src={getStartedButton}
                alt="Get Started Button"
                className="get-started-button-overlay"
            />
        </div>
    );
};

export default GetStarted;