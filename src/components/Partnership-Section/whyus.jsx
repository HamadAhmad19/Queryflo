import React from 'react';
import '../../App.css';
import leftDesign from '../../assests/leftDesign.png';
import rightDesign from '../../assests/rightDesign.png';

const WhyUs = () => {
    return (
        <div className="whyus-section">
            {/* Left Side Decorative Image - Separated from divs */}
            <img 
                src={leftDesign} 
                alt="Left Design" 
                className="whyus-left-design"
            />
            
            {/* Right Side Decorative Image - Separated from divs */}
            <img 
                src={rightDesign} 
                alt="Right Design" 
                className="whyus-right-design"
            />
            
            {/* Center Content - Two Divs in Row (separated from images) */}
            <div className="whyus-content-container">
                <h1 className="whyus-main-heading">Why Partner WITH QUERYFLO?</h1>
                <div className="whyus-divs-row">
                    <div className="whyus-div-1">
                    <h2>Pain points</h2>
                    <div className="pain-points-list">
                        <div className="pain-point-item">
                            <span className="pain-point-icon">✗</span>
                            <p>No domain-specific or career-focused SQL practice paths</p>
                        </div>
                        <div className="pain-point-item">
                            <span className="pain-point-icon">✗</span>
                            <p>No career-aligned or SQL database tailored to analytics career paths</p>
                        </div>
                        <div className="pain-point-item">
                            <span className="pain-point-icon">✗</span>
                            <p>Learners struggle to apply SQL to real-world business problems</p>
                        </div>
                        <div className="pain-point-item">
                            <span className="pain-point-icon">✗</span>
                            <p>Hard to find practical SQL practice after bootcamps or training</p>
                        </div>
                        <div className="pain-point-item">
                            <span className="pain-point-icon">✗</span>
                            <p>Expensive or inflexible licensing options</p>
                        </div>
                    </div>
                </div>
                <div className="whyus-div-2">
                    <h2>How We Help</h2>
                    <div className="help-points-list">
                        <div className="help-point-item">
                            <span className="help-point-icon">✓</span>
                            <p>Business-context questions across domains like Product, Marketing, Finance, Healthcare</p>
                        </div>
                        <div className="help-point-item">
                            <span className="help-point-icon">✓</span>
                            <p>Practice SQL on domain-specific databases tailored to your career path.</p>
                        </div>
                        <div className="help-point-item">
                            <span className="help-point-icon">✓</span>
                            <p>Self-paced, auto-graded, and AI-supported learning system</p>
                        </div>
                        <div className="help-point-item">
                            <span className="help-point-icon">✓</span>
                            <p>AI Text-to-SQL & instant feedback reduce instructor load</p>
                        </div>
                        <div className="help-point-item">
                            <span className="help-point-icon">✓</span>
                            <p>Affordable institutional licensing with custom seat plans</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;