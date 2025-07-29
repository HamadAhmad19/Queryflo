import React from 'react';
import '../../App.css';
import missionPeople from '../../assests/mission people.png';
import leftDesign from '../../assests/leftDesign.png';
import rightDesign from '../../assests/rightDesign.png';

const OurMission = () => {
    return (
        <div className="our-mission-section">
            {/* Left Side Decorative Image - Full Page Coverage */}
            <img 
                src={leftDesign} 
                alt="Left Design" 
                className="mission-left-design"
            />
            
            {/* Right Side Decorative Image - Full Page Coverage */}
            <img 
                src={rightDesign} 
                alt="Right Design" 
                className="mission-right-design"
            />
            
            <div className="our-mission-main">
                <div className="our-mission-sub-div-1">
                    <div className="mission-content-layout">
                        <div className="mission-image-container">
                            <img
                                src={missionPeople}
                                alt="Mission People"
                                className="mission-people-image"
                            />
                        </div>
                        <div className="mission-text-container">
                            <h2 className="mission-title">
                                Our <span className="mission-highlight">MISSION!</span>
                            </h2>
                            <p className="mission-description">
                                To empower learners to master SQL through AI, role-relevant
                                practice, and datasets that mirror the work analysts do every
                                day.
                            </p>
                            <div className="mission-button-container">
                                <button className="get-started-button">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="our-mission-sub-div-2">
                    <div className="different-content">
                        <h2 className="different-title">
                            What Makes Us <span className="different-highlight">DIFFERENT ?</span>
                        </h2>
                        <div className="features-grid">
                            <div className="features-column">
                                <div className="feature-item">
                                    <div className="feature-icon">♦</div>
                                    <div className="feature-content">
                                        <h3 className="feature-title">Built by Industry Expert</h3>
                                        <p className="feature-description">from Google, top tech companies, and leading data teams</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">♦</div>
                                    <div className="feature-content">
                                        <h3 className="feature-title">AI Text-to-SQL</h3>
                                        <p className="feature-description">Learn to turn business problems into real queries</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">♦</div>
                                    <div className="feature-content">
                                        <h3 className="feature-title">Built on Business Context</h3>
                                        <p className="feature-description">not just SQL tricks</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">♦</div>
                                    <div className="feature-content">
                                        <h3 className="feature-title">Designed for Career Readiness</h3>
                                        <p className="feature-description">analyst-focused learning, not just technical drills</p>
                                    </div>
                                </div>
                            </div>
                            <div className="features-column">
                                <div className="feature-item">
                                    <div className="feature-icon">♦</div>
                                    <div className="feature-content">
                                        <h3 className="feature-title">Domain-Specific Practice Questions</h3>
                                        <p className="feature-description">across Product, Marketing, Finance, and more</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">♦</div>
                                    <div className="feature-content">
                                        <h3 className="feature-title">Instant Feedback</h3>
                                        <p className="feature-description">Practice smarter with AI-assisted hints and explanations</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">♦</div>
                                    <div className="feature-content">
                                        <h3 className="feature-title">AI-Powered Learning Tools</h3>
                                        <p className="feature-description">text-to-SQL, error feedback, and smart hints</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;