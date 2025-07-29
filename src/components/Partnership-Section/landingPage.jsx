import React from 'react';
import '../../App.css';
import partnerMain from '../../assests/partner main.png';

const LandingPage = () => {
    return (
        <div className="partnership-landing-section">
            <div className="partnership-landing-content">
                <div className="partnership-text-container">
                    <h1 className="partnership-main-title">
                        QueryFlo<br />
                        for Institutions
                    </h1>
                    <h2 className="partnership-subtitle">
                        Empower Your Students with Real-World SQL Skills
                    </h2>
                    <p className="partnership-description">
                        QueryFlo is the AI-powered SQL practice platform designed for modern
                        data education. Whether you're a university, bootcamp, or training provider,
                        our platform gives your students access to real-world datasets, domain-specific practice questions, and AI support — all in one place.
                    </p>
                    <div className="partnership-button-container">
                        <button className="start-partnership-button">
                            Start Your Partnership
                        </button>
                    </div>
                </div>
                <div className="partnership-image-container">
                    <img
                        src={partnerMain}
                        alt="Educational platform with analytics and student collaboration tools"
                        className="partner-main-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;