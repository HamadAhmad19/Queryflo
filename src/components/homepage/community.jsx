import React from 'react';
import '../../App.css';
import arrow from '../../assests/arrow.png';
import joinUs from '../../assests/join us.png';
import first from '../../assests/first.png';
import second from '../../assests/second.png';
import third from '../../assests/third.png';
import forth from '../../assests/forth.png';
import handshak from '../../assests/handshak.png';
import startPartnership from '../../assests/start partnership.png';

const Community = () => {
    return (
        <div className="community-section">
            {/* First Section - Arrow + Join Community */}
            <div className="community-join-section">
                <div className="community-arrow">
                    <img src={arrow} alt="Arrow" />
                </div>
                <div className="community-join-content">
                    <h2>Join Our<br />COMMUNITY!</h2>
                    <p>A Hub of Interactive Learning! Join our dynamic platform where SQL enthusiasts converge</p>
                    <img src={joinUs} alt="Join Us" className="join-us-button" />
                </div>
            </div>

            {/* Second Section - 4 Testimonial Cards */}
            <div className="community-testimonials">
                <div className="testimonial-card">
                    <img src={first} alt="First Testimonial" />
                </div>
                <div className="testimonial-card">
                    <img src={second} alt="Second Testimonial" />
                </div>
                <div className="testimonial-card">
                    <img src={third} alt="Third Testimonial" />
                </div>
                <div className="testimonial-card">
                    <img src={forth} alt="Fourth Testimonial" />
                </div>
            </div>

            {/* Third Section - Partnership + Handshake */}
            <div className="community-partnership-section">
                <div className="partnership-content">
                    <h2>Partner With Us!<br />Empower Your Students<br />with SQL Skills</h2>
                    <p>Are you, an institution, organization, or business looking to offer your students the opportunity to learn SQL for interview preparation? Partner with us to get QueryFlo for education access to premium content, real-world examples, and hands-on practice.</p>
                    <img src={startPartnership} alt="Start Partnership" className="start-partnership-button" />
                </div>
                <div className="partnership-handshake">
                    <img src={handshak} alt="Handshake" />
                </div>
            </div>
        </div>
    );
};

export default Community;