import React from 'react';
import '../../App.css';
import feature2 from '../../assests/feature 2.png';
import featureleft from '../../assests/feature left img.png';
import getStarted from '../../assests/get started.png';
import leftUpperIcon from '../../assests/left upper icon.png';
import leftLowerIcon from '../../assests/left lower icon.png';
import rightUpperIcon from '../../assests/rigth upper icon.png';
import rightLowerIcon from '../../assests/rigth upper icon.png';

const Feature = () => {
    return (
        <div className="feature-section">
            {/* Feature Left Image - Top Left Corner */}
            <img src={featureleft} alt="Feature Left" className="feature-left-image" />

            {/* Header Section */}
            <div className="feature-header">
                <h2>Features Your Students Will Love</h2>
                <p>Tired of endless textbooks and dry tutorials? We have a lot of features for you.</p>
            </div>

            <div className="feature-main-div">
                {/* Feature 1 */}
                <div className="feature-sub-div">
                    <h3>01. AI Text-to-SQL</h3>
                    <p>Learn by asking questions in plain English</p>
                </div>

                {/* Feature 2 */}
                <div className="feature-sub-div">
                    <h3>02. Domain-specific databases</h3>
                    <p>Marketing, product, healthcare, sales, web, SaaS, and more.</p>
                </div>

                {/* Feature 3 */}
                <div className="feature-sub-div">
                    <h3>03. Real-World Datasets</h3>
                    <p>Practice with business-style tables and metrics</p>
                </div>

                {/* Feature 4 */}
                <div className="feature-sub-div">
                    <h3>04. Feedback on the Spot</h3>
                    <p>AI explains errors and suggests improvements</p>
                </div>

                {/* Feature 5 */}
                <div className="feature-sub-div">
                    <h3>05. Progress Tracking</h3>
                    <p>View performance by domain, topic, or skill level</p>
                </div>

                {/* Feature 6 */}
                <div className="feature-sub-div">
                    <h3>06. Dashboards for Instructors</h3>
                    <p>Monitor student engagement & performance</p>
                </div>
            </div>

            {/* New Section Below Feature */}
            <div className="perfect-for-section">
                {/* First Sub-div */}
                <div className="perfect-for-sub-div first-sub-div">
                    {/* Top section inside the first div */}
                    <div className="top-section">
                        <div className="text-with-icon first-icons-text-div data-science-text">
                            <span className="top-text">Data Science &  Analytics Bootcamps</span>
                            <img src={leftUpperIcon} alt="Data Science Icon" className="left-icon data-science-icon" />
                        </div>
                    </div>

                    <div className="bottom-section">
                        <div className="text-with-icon first-icons-text-div online-training-text">
                            <span className="top-text">Online Training Companies</span>
                            <img src={leftLowerIcon} alt="Online Training Icon" className="left-icon" />
                        </div>
                    </div>
                </div>

                {/* Middle Section with Perfect for heading and feature2 image */}
                <div className="perfect-for-heading">
                    <img src={feature2} alt="Perfect For" className="feature-image" />
                </div>

                {/* Second Sub-div */}
                <div className="perfect-for-sub-div second-sub-div">
                    <div className="top-section">
                        <div className="text-with-icon seconds-icons-text-div">
                            <img src={rightUpperIcon} alt="Data Science Icon" className="left-icon" />
                            <span className="top-text">University Data Science/<br />Analytics Programs</span>

                        </div>
                    </div>

                    <div className="bottom-section">
                        <div className="text-with-icon v">

                            <img src={rightLowerIcon} alt="Online Training Icon" className="left-icon" />
                            <span className="top-text">Corporate Training Programs</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Get Started Button */}
            <div className="feature-button-container">
                <img src={getStarted} alt="Get Started" className="get-started-button" />
            </div>
        </div>
    );
};

export default Feature;