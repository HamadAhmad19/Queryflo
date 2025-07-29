import React, { useState } from 'react';
import '../App.css';  
import queryLogo from '../assests/Querylogo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = window.location.pathname; // Get current path

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-logo">
                <img src={queryLogo} alt="QueryFlo Logo" />
            </div>
            
            {/* Hamburger Menu Button */}
            <button className="hamburger-menu" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Desktop Navigation */}
            <nav className="navbar desktop-nav">
                <ul>
                    <li><a href="/" className={currentPath === "/" ? "active" : ""}>Home</a></li>
                    <li><a href="/about" className={currentPath === "/about" ? "active" : ""}>About</a></li>
                    <li><a href="/pricing" className={currentPath === "/pricing" ? "active" : ""}>Pricing</a></li>
                    <li><a href="/partnership" className={currentPath === "/partnership" ? "active" : ""}>Partnership</a></li>
                    <li><a href="/comprehensive" className={currentPath === "/comprehensive" ? "active" : ""}>Comprehensive Guide</a></li>
                    <li>
                        <button className="btn-create-account">
                            <a href="/create-account" className={currentPath === "/create-account" ? "active" : ""}>Create Account</a>
                        </button>
                    </li>
                    <li>
                        <button className="btn-login">
                            <a href="/login" className={currentPath === "/login" ? "active" : ""}>Login</a>
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Mobile Navigation */}
            <nav className={`navbar mobile-nav ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><a href="/" onClick={toggleMenu} className={currentPath === "/" ? "active" : ""}>Home</a></li>
                    <li><a href="/about" onClick={toggleMenu} className={currentPath === "/about" ? "active" : ""}>About</a></li>
                    <li><a href="/pricing" onClick={toggleMenu} className={currentPath === "/pricing" ? "active" : ""}>Pricing</a></li>
                    <li><a href="/partnership" onClick={toggleMenu} className={currentPath === "/partnership" ? "active" : ""}>Partnership</a></li>
                    <li><a href="/comprehensive" onClick={toggleMenu} className={currentPath === "/comprehensive" ? "active" : ""}>Comprehensive Guide</a></li>
                    <li>
                        <button className="btn-create-account">
                            <a href="/create-account" className={currentPath === "/create-account" ? "active" : ""} onClick={toggleMenu}>Create Account</a>
                        </button>
                    </li>
                    <li>
                        <button className="btn-login">
                            <a href="/login" className={currentPath === "/login" ? "active" : ""} onClick={toggleMenu}>Login</a>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
