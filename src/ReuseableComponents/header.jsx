import React from 'react';
import '../App.css';  // Using main App.css for styling
import queryLogo from '../assests/Querylogo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={queryLogo} alt="QueryFlo Logo" />
            </div>
            <nav className="navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/partnership">Partnership</a></li>
                    <li><a href="/comprehensive">Comprehensive Guide</a></li>
                    <li><a href="/create-account">Create Account</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;