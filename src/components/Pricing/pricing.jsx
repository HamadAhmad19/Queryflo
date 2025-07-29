import React from 'react';
import '../../App.css';
import Header from '../../ReuseableComponents/header';
import Footer from '../../ReuseableComponents/footer';
import upgradeButton from '../../assests/udgrade now button.png';
import pricingLeft from '../../assests/pricing left.png';
import pricingRight from '../../assests/pricing right.png';

const Pricing = () => {
    return (
        <div>
            <Header />

            {/* New wrapper div that contains everything */}
            <div className="pricing-wrapper">
                {/* Left image */}
                <img src={pricingLeft} alt="Pricing Left" className="pricing-left-image" />

                {/* Content container */}
                <div className="pricing-content">
                    <div className="pricing-header-section">
                        <h1 className="pricing-main-title">
                            Transparent<br />
                            <span className="pricing-highlight">Pricing Plans</span>
                        </h1>
                        <p className="pricing-subtitle">Explore Our Flexible Plans for SQL QuizBot</p>
                    </div>

                    <div className="pricing-main">
                        <div className="pricing-card free-plan">
                            <div className="plan-header">
                                <h2 className="plan-title">Free</h2>
                                <p className="plan-subtitle">10 SQL Questions</p>
                            </div>

                            <div className="plan-price">
                                <span className="currency">$</span>
                                <span className="price">0</span>
                            </div>

                            <div className="plan-access">
                                <h3 className="access-title">Domains Access</h3>
                                <p className="access-subtitle">3 sample (Marketing, Product, Finance)</p>
                            </div>

                            <hr className="plan-divider" />

                            <div className="plan-features">
                                <div className="feature-item">
                                    <span className="feature-text">Free SQL Course</span>
                                    <span className="feature-check">✓</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-text">Free SQL training</span>
                                    <span className="feature-check">✓</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-text">Certification Badge</span>
                                    <span className="feature-check">✓</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-text">Community Access</span>
                                    <span className="feature-check">✓</span>
                                </div>
                            </div>

                            <div className="plan-footer">
                                <button className="plan-button free-button">Free to use</button>
                            </div>
                        </div>
                        <div className="pricing-card pro-plan">
                            <div className="plan-header">
                                <h2 className="plan-title">Pro <span className="plan-period">(monthly)</span></h2>
                                <p className="plan-subtitle">Unlimited SQL Questions</p>
                            </div>

                            <div className="plan-price">
                                <span className="currency">$</span>
                                <span className="price">19</span>
                                <span className="price-period">/ month</span>
                            </div>

                            <div className="plan-access">
                                <h3 className="access-title">Domains Access</h3>
                                <p className="access-subtitle">All (Marketing, Product, Finance, Healthcare, HR, Retail, etc.)</p>
                            </div>

                            <hr className="plan-divider" />

                            <div className="plan-features">
                                <div className="feature-item">
                                    <span className="feature-text">AI Text-to-SQL</span>
                                    <span className="feature-check">✓</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-text">AI Error Help</span>
                                    <span className="feature-check">✓</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-text">Free SQL Course</span>
                                    <span className="feature-check">✓</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-text">Progress Tracking</span>
                                    <span className="feature-check">✓</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-text">Certification Badge</span>
                                    <span className="feature-check">✓</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-text">Community Access</span>
                                    <span className="feature-check">✓</span>
                                </div>
                            </div>

                            <div className="plan-extra">
                                <div className="extra-goodies">
                                    <p className="extra-title">Extra Goodies</p>
                                    <p className="extra-subtitle">"Mentor Feedback Add-on"</p>
                                </div>
                            </div>

                            <div className="plan-footer">
                                <img src={upgradeButton} alt="Upgrade now" className="upgrade-button" />
                            </div>
                        </div>
                        <div className="pricing-card pro-plan">
                            <div className="plan-header">
                                <h2 className="plan-title">Pro <span className="plan-period">(Annually)</span></h2>
                                <p className="plan-subtitle">Unlimited SQL Questions</p>
                            </div>

                            <div className="plan-price">
                                <span className="currency">$</span>
                                <span className="price">149</span>
                                <span className="price-period">/ month</span>
                            </div>

                            <div className="plan-access">
                                <h3 className="access-title">Domains Access</h3>
                                <p className="access-subtitle">All (Marketing, Product, Finance, Healthcare, HR, Retail, etc.)</p>
                            </div>

                            <hr className="plan-divider" />

                            <div className="plan-features">
                                <div className="feature-item">
                                    <span className="feature-text">AI Text-to-SQL</span>
                                    <span className="feature-check">✓</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-text">AI Error Help</span>
                                    <span className="feature-check">✓</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-text">Free SQL Course</span>
                                    <span className="feature-check">✓</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-text">Progress Tracking</span>
                                    <span className="feature-check">✓</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-text">Certification Badge</span>
                                    <span className="feature-check">✓</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-text">Community Access</span>
                                    <span className="feature-check">✓</span>
                                </div>
                            </div>

                            <div className="plan-extra">
                                <div className="extra-goodies">
                                    <p className="extra-title">Extra Goodies</p>
                                    <p className="extra-subtitle">"Mentor Feedback Add-on"</p>
                                </div>
                            </div>

                            <div className="plan-footer">
                                <img src={upgradeButton} alt="Upgrade now" className="upgrade-button" />
                            </div>
                        </div>
                        <div className="pricing-card pro-plan">
                            <div className="plan-header">
                                <h2 className="plan-title">Institutional</h2>
                                <p className="plan-subtitle">Unlimited SQL Questions</p>
                            </div>

                            <div className="plan-price">
                                <p className="starting-from">Starting from</p>
                                <span className="currency">$</span>
                                <span className="price">499</span>
                                <span className="price-period">/ semester</span>
                            </div>

                            <div className="plan-access">
                                <h3 className="access-title">Domains Access</h3>
                                <p className="access-subtitle">All + Custom domains</p>
                            </div>

                            <hr className="plan-divider" />

                            <div className="plan-features">
                                <div className="feature-item">
                                    <span className="feature-text">AI Text-to-SQL</span>
                                    <span className="feature-check">✓</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-text">AI Error Help</span>
                                    <span className="feature-check">✓</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-text">Free SQL Course</span>
                                    <span className="feature-check">✓</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-text">Progress Tracking</span>
                                    <span className="feature-check">✓</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-text">Certification Badge</span>
                                    <span className="feature-check">✓</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-text">Community Access</span>
                                    <span className="feature-check">✓</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-text">Dashboard</span>
                                    <span className="feature-check">✓</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-text">Bulk Student Onboarding</span>
                                    <span className="feature-check">✓</span>
                                </div>
                            </div>

                            <div className="plan-extra">
                                <div className="extra-goodies">
                                    <p className="extra-title">Extra Goodies</p>
                                    <p className="extra-subtitle">"Mentor Feedback Add-on"</p>
                                </div>
                            </div>

                            <div className="plan-footer">
                                <img src={upgradeButton} alt="Upgrade now" className="upgrade-button" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right image */}
                <img src={pricingRight} alt="Pricing Right" className="pricing-right-image" />
            </div>

            <Footer />
        </div>
    );
};

export default Pricing;