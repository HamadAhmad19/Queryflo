import React from 'react';
import '../../App.css';  // for specific styling if required
import groupImage from '../../assests/Grouppicture.png';
import googleLogo from '../../assests/Google.png';
import appleLogo from '../../assests/Apple.png';
import awsLogo from '../../assests/Aws.png';
import metaLogo from '../../assests/Meta.png';
import msLogo from '../../assests/MS.png';
import lyftLogo from '../../assests/lyft.png';

const LandingPage = () => {
    return (
        <div className="content-container">
            {/* First Section with Text and Image */}
            <div className="intro-section">
                <div className="text-content">
                    <h1>Ace SQL<br />Interview<br /><span className="query-flo-text">with QueryFlo</span></h1>
                    <p> Crunch your technical interviews with expert-curated SQL questions
                        covering every analytics domain. Get instant feedback & recommendation
                        on your code, track your progress and walk into any interview with
                        confidence. Use our AI feature to generate SQL code tailored to any data
                        analytics domain.</p>
                    <button className="cta-button">Get Started for Free!</button>
                </div>
                <div className="image-content">
                    <img src={groupImage} alt="Illustration" />
                </div>
            </div>

            {/* Second Section with Logos and Text */}
            <div className="footer-section">
                <p>Trusted by talents with $240K+ compensation offers</p>
                <div className="logos">
                    <img src={lyftLogo} alt="Lyft" />
                    <img src={googleLogo} alt="Google" />
                    <img src={awsLogo} alt="AWS" />
                    <img src={metaLogo} alt="Meta" />
                    <img src={appleLogo} alt="Apple" />
                    <img src={msLogo} alt="Microsoft" />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;