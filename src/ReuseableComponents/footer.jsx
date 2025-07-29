import React from 'react';
import '../App.css';  // Using main App.css for styling
import queryLogo from '../assests/Querylogo.png';
import fbIcon from '../assests/fb.png';
import instaIcon from '../assests/insta.png';
import twitterIcon from '../assests/twitter.png';

const Footer = () => {
    return (
        <footer className="footer-horizontal">
            {/* Logo Section */}
            <div className="footer-logo">
                <img src={queryLogo} alt="QueryFlo Logo" />
            </div>

            {/* Links Section */}
            <div className="footer-links">
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/refund-policy">Refund Policy</a>
                <a href="/terms-conditions">Terms & Conditions</a>
                <a href="/data-privacy">Data Privacy</a>
                <a href="/contact-us">Contact Us</a>
            </div>

            {/* Social Icons Section */}
            <div className="footer-social">
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                    <img src={instaIcon} alt="Discord" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instaIcon} alt="Instagram" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={fbIcon} alt="Facebook" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="Twitter" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;