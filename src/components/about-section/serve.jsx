import React from 'react';
import '../../App.css';
import backgroundImage from '../../assests/serve background.png';
import programmer1 from '../../assests/serve programmer 1.png';
import programmer2 from '../../assests/serve programmer 2.png';
import serveProfile from '../../assests/serve profile.png';
import serveCode from '../../assests/serve code.png';


const Serve = () => {
    return (
        <div className="serve-section">
            <div className="serve-background-container">
                <img
                    src={backgroundImage}
                    alt="Serve Background"
                    className="serve-background-image"
                />
                <div className="serve-text-overlay">
                    <h1 className="serve-main-title">
                        Who We <span className="serve-highlight">Serve</span>
                    </h1>
                    <p className="serve-subtitle">Empowering Learners to Query Like Pros</p>
                </div>
                <div className="serve-content-overlay">
                    <div className="serve-item">
                        <img src={programmer1} alt="Students learning SQL" className="serve-item-image" />
                        <h3>Students learning SQL for the first time</h3>
                    </div>
                    <div className="serve-item">
                        <img src={programmer2} alt="Analysts preparing for interviews" className="serve-item-image" />
                        <h3>Analysts preparing for interviews</h3>
                    </div>
                    <div className="serve-item">
                        <img src={serveProfile} alt="Bootcamps & universities" className="serve-item-image" />
                        <h3>Bootcamps & universities training future data pros</h3>
                    </div>
                    <div className="serve-item">
                        <img src={serveCode} alt="Career switchers" className="serve-item-image" />
                        <h3>Career switchers entering the world of data</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Serve;