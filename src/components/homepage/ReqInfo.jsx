import React from 'react';
import '../../App.css';

const ReqInfo = () => {
    return (
        <div className="req-info-section">
            <div className="req-info-container">
                <div className="req-info-header">
                    <p className="req-info-subtitle">UPSKILL FOR A BETTER FUTURE</p>
                </div>
                
                <div className="req-info-content">
                    <h2 className="req-info-title">Request More Information</h2>
                    <p className="req-info-description">
                        We're Excited to Hear Your Queries and Guide You Through the World of Data Excellence.
                    </p>
                    
                    <div className="req-info-button-container">
                        <button className="req-info-contact-btn">
                            Contact Us
                        </button>
                    </div>
                </div>
                
                <div className="req-info-footer">
                    <p className="req-info-copyright">© 2025, LLC</p>
                </div>
            </div>
        </div>
    );
};

export default ReqInfo;