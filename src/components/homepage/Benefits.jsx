import React from 'react';
import '../../App.css';

// Import images with error handling
let design1, design2, stopWatchlogo, aceSqllogo, codingEnvironmentlogo;

try {
    design1 = require('../../assests/design 1.png');
    design2 = require('../../assests/design 2.png');
    stopWatchlogo = require('../../assests/stopWatchlogo.png');
    aceSqllogo = require('../../assests/aceSqllogo.png');
    codingEnvironmentlogo = require('../../assests/codingEnvironmentlogo.png');
} catch (error) {
    console.error('Error loading images:', error);
}

const Benefits = () => {
    return (
        <div className="benefits-section">
            {/* Design Image positioned in top-right corner */}
            {design1 && <img src={design1} alt="Design 1" className="design-image-top-right" />}

            <div className="benefits-content">
                <div className="benefits-header">
                    <h2>Benefits of Using Query Flo!</h2>
                    <p>Ignite your learning with expert-crafted SQL mock interviews across various analytics domains. Ditch the frustration and embrace engaging practice, targeted guidance, and confidence-boosting insights. Ace your interviews, using either our interactive coding environment or text to SQL code AI feature in one place.</p>
                </div>
                <div className="benefits-cards">
                    <div className="benefit-card">
                        {stopWatchlogo && <img src={stopWatchlogo} alt="Stop Watch" />}
                        <h3>Stop wasting hours googling</h3>
                        <p>Practice with our expertly crafted SQL questions that mirror real-world interview challenges online data from various domains like marketing, product, healthcare, retail, finance in much more. Receive tailored feedback based on your performance.</p>
                    </div>
                    <div className="benefit-card">
                        {aceSqllogo && <img src={aceSqllogo} alt="Ace SQL" />}
                        <h3>Ace your SQL interview</h3>
                        <p>Gain confidence with our SQL questions, curated by industry experts to ensure you're prepared for any scenario. Walk into interviews with the skills and confidence to showcase your SQL expertise and leave a lasting impression.</p>
                    </div>
                    <div className="benefit-card">
                        {codingEnvironmentlogo && <img src={codingEnvironmentlogo} alt="Coding Environment" />}
                        <h3>Interactive Coding Environment</h3>
                        <p>Write and execute SQL queries within a user-friendly interface to practice hands-on and reinforce your skills. Set the difficulty level and tailor practice sessions to align with your specific goals and experience. Monitor & visualize your progress with analytics.</p>
                    </div>
                </div>
                {design2 && <div className="design-image-center"><img src={design2} alt="Design 2" /></div>}
            </div>
        </div>
    );
};

export default Benefits;