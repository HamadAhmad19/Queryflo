import React from 'react';
import '../../App.css';
import visionPicture from '../../assests/vision picture.png';
import joinUsButton from '../../assests/join us.png';

const Vision = () => {
    return (
        <div className="vision-section">
            <div className="vision-content">
                <div className="vision-image-container">
                    <img
                        src={visionPicture}
                        alt="Team collaborating with business analytics and growth charts"
                        className="vision-picture-image"
                    />
                </div>
                <div className="vision-text-container">
                    <h2 className="vision-title">Our Vision</h2>
                    <p className="vision-description">
                        To become the leading AI-powered learning platform for
                        domain-specific SQL mastery — equipping the next generation
                        of data professionals with real-world business analytics skills
                        through contextual practice, intelligent feedback, and job-focused learning paths.
                    </p>
                    <div className="vision-button-container">
                        <img
                            src={joinUsButton}
                            alt="Join Us"
                            className="join-us-button"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;