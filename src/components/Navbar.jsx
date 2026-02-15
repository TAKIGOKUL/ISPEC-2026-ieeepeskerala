import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, id) => {
        if (isHome) {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header>
            <div className="top-bar">
                <div className="container-fluid">
                    <div className="ieee-links">
                        <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer">IEEE.org</a>
                        <a href="https://ieeexplore.ieee.org" target="_blank" rel="noopener noreferrer">IEEE Xplore Digital Library</a>
                        <a href="https://standards.ieee.org" target="_blank" rel="noopener noreferrer">IEEE Standards</a>
                        <a href="https://spectrum.ieee.org" target="_blank" rel="noopener noreferrer">IEEE Spectrum</a>
                    </div>
                </div>
            </div>
            <nav id="main-nav" className={scrolled ? 'scrolled' : ''}>
                <div className="container-fluid nav-container">
                    <div className="logo">
                        <Link to="/" className="ispec">iSPEC <span className="year">2026</span></Link>
                    </div>
                    <ul className="nav-links">
                        <li><Link to="/" onClick={(e) => scrollToSection(e, 'home')}>HOME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li className="dropdown">
                            <Link to="/call-for-papers">FOR AUTHORS <i className="fas fa-chevron-down"></i></Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/call-for-papers">Call for Papers</Link></li>
                                <li><Link to="/presentation-guideline">Presentation Guideline</Link></li>
                                <li><Link to="/student-support">Student Support Fund</Link></li>
                                <li><a href="#">Important Dates</a></li>
                                <li><a href="#">Paper Submission</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#program">PROGRAM <i className="fas fa-chevron-down"></i></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Final Program</a></li>
                                <li><a href="#">Keynote Speakers</a></li>
                                <li><a href="#">Plenary Speakers</a></li>
                                <li><a href="#">Special Session Forum</a></li>
                                <li><a href="#">Tutorial</a></li>
                                <li><a href="#">Technical Visit</a></li>
                            </ul>
                        </li>
                        <li><Link to="/registration">REGISTRATION</Link></li>
                        <li><Link to="/sponsorship">SPONSORSHIP</Link></li>
                        <li><Link to="/committee">COMMITTEE</Link></li>
                        <li className="dropdown">
                            <Link to="/venue">VENUE <i className="fas fa-chevron-down"></i></Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/venue">Hyatt Regency Trivandrum</Link></li>
                                <li><Link to="/travel">Travel to Trivandrum</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                    <div className="mobile-menu-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
