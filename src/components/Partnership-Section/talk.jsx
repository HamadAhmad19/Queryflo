import React from 'react';
import '../../App.css';
import handshake from '../../assests/handshak.png';

const Talk = () => {
    return (
        <div className="talk-section">
            <div className="talk-content">
                {/* Left Side - Text and Buttons */}
                <div className="talk-text-container">
                    <h2 className="talk-title">Let's Talk</h2>

                    <div className="talk-description">
                        <p>We offer flexible licensing options starting with as few as 10 seats, all the way up to campus-wide rollouts.</p>
                        <p>Interested in bringing QueryFlo to your school or program?</p>
                    </div>

                    <div className="talk-buttons-container">
                        <button className="schedule-demo-button">Schedule a Demo</button>
                        <button className="contact-partnership-button">Contact Us for a Partnership Quote</button>
                    </div>
                </div>

                {/* Right Side - Handshake Image */}
                <div className="talk-image-container">
                    <img src={handshake} alt="Handshake" className="handshake-image" />
                </div>
            </div>
        </div>
    );
};

export default Talk;