import React from 'react';
import '../../App.css';
import leftDesign from '../../assests/leftDesign.png';
import rightDesign from '../../assests/rightDesign.png';
import laptopPicture from '../../assests/laptoppicture.png';
import pcWithPerson from '../../assests/PcWithPerson.png';

const Help = () => {
    return (
        <div className="help-section">
            {/* Background decorative images */}
            <img src={leftDesign} alt="Left Design" className="help-left-design" />
            <img src={rightDesign} alt="Right Design" className="help-right-design" />

            <div className="help-content">
                {/* Header Section */}
                <div className="help-header">
                    <h2>How we can <span className="help-highlight">HELP YOU!</span></h2>
                    <p>With QueryFlo, you're not just learning, you're preparing to ace those interviews and excel in your analytics career. Our professional AI-Powered code generation can help you understand complex SQL in simple English. Tailored for both beginners and seasoned professionals, our interactive web application offers a unique hands-on approach to mastering SQL interview questions.</p>
                </div>

                {/* Main Content Sections */}
                <div className="help-main-content">
                    {/* Left Section - Access Premium Courses */}
                    <div className="help-section-left">
                        <div className="help-text-content">
                            <h3>Access Premium Courses</h3>
                            <p>Unlock a world of knowledge with Access Premium Courses. Dive into expertly curated content that simplifies complex concepts, provides real-world applications, and accelerates your learning journey. Elevate your learning experience and master SQL effortlessly.</p>
                        </div>
                        <div className="help-image-content">
                            <img src={pcWithPerson} alt="Person studying at computer desk" />
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="help-divider"></div>

                    {/* Right Section - Practice SQL */}
                    <div className="help-section-right">
                        <div className="help-image-content">
                            <img src={laptopPicture} alt="Laptop displaying SQL code editor" />
                        </div>
                        <div className="help-text-content">
                            <h3>Practice SQL</h3>
                            <p>Sharpen your SQL skills through dynamic Practice Sessions. Dive into real-world scenarios, refine your queries, and gain confidence in handling diverse database challenges. Elevate your SQL proficiency with interactive practice!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;