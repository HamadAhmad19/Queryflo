import React from 'react';
import '../../App.css';
import startLearningButton from '../../assests/start learning Sql.png';
import learningSqlBackground from '../../assests/learning sql background.png';

const AboutUs = () => {
    return (
        <div className="about-section">
            <div className="about-background-container">
                <img
                    src={learningSqlBackground}
                    alt="Learning SQL Background"
                    className="about-background-image"
                />
            </div>
            <div className="about-content">
                <h1 className="about-main-title">About Us</h1>
                <h2 className="about-welcome-title">Welcome to QueryFlo</h2>
                <p className="about-description">
                    QueryFlo is an AI-powered SQL learning platform built by analysts — for analysts.<br />
                    We believe that learning SQL should go beyond memorizing syntax. That's why we created QueryFlo — a practice-first, domain-specific<br />
                    platform where aspiring analysts and data professionals can build real-world SQL skills with the help of AI.
                </p>
                <div className="about-button-container">
                    <img
                        src={startLearningButton}
                        alt="Start Learning SQL"
                        className="start-learning-button"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;