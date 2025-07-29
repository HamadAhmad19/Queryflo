import React from 'react';
import '../../App.css';
import backgroundImage from '../../assests/serve background.png';
import serveProgrammer1 from '../../assests/serve programmer 1.png';
import serveProgrammer2 from '../../assests/serve programmer 2.png';
import serveProfile from '../../assests/serve profile.png';
import serveCode from '../../assests/serve code.png';

const Serve = () => {
    return (
        <div className="serve-section">
            <img
                src={backgroundImage}
                alt="Serve Background"
                style={{
                    width: '100%',
                    height: '50%',
                    objectFit: 'contain',
                    objectPosition: 'center'
                }}
            />

            {/* Header text above the divs */}
            <div className="serve-header-container">
                <h1 className="serve-main-title">
                    Who We <span className="serve-highlight">Serve</span>
                </h1>
                <p className="serve-subtitle">Empowering Learners to Query Like Pros</p>
            </div>

            {/* Main div with four sub-divs in a row */}
            <div className="serve-main-container">
                <div className="serve-sub-div serve-sub-div-1">
                    <img src={serveProgrammer1} alt="Serve Programmer 1" className="serve-div-image" />
                    <p>Students learning SQL for the first time</p>
                </div>
                <div className="serve-sub-div serve-sub-div-2">
                    <img src={serveProgrammer2} alt="Serve Programmer 2" className="serve-div-image" />
                    <p>Analysts preparing for interviews</p>
                </div>
                <div className="serve-sub-div serve-sub-div-3">
                    <img src={serveProfile} alt="Serve Profile" className="serve-div-image" />
                    <p>Bootcamps & universities training future data pros</p>
                </div>
                <div className="serve-sub-div serve-sub-div-4">
                    <img src={serveCode} alt="Serve Code" className="serve-div-image" />
                    <p>Career switchers entering the world of data</p>
                </div>
            </div>
        </div>
    );
};

export default Serve;