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

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link></li>
                        <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link></li>
                        <li className="dropdown">
                            <span className="dropdown-toggle" onClick={(e) => e.target.nextElementSibling.classList.toggle('show')}>FOR AUTHORS <i className="fas fa-chevron-down"></i></span>
                            <ul className="dropdown-menu">
                                <li><Link to="/call-for-papers" onClick={() => setIsMenuOpen(false)}>Call for Papers</Link></li>
                                <li><Link to="/presentation-guideline" onClick={() => setIsMenuOpen(false)}>Presentation Guideline</Link></li>
                                <li><Link to="/student-support" onClick={() => setIsMenuOpen(false)}>Student Support Fund</Link></li>
                                <li><a href="#" onClick={() => setIsMenuOpen(false)}>Important Dates</a></li>
                                <li><a href="#" onClick={() => setIsMenuOpen(false)}>Paper Submission</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <span className="dropdown-toggle" onClick={(e) => e.target.nextElementSibling.classList.toggle('show')}>PROGRAM <i className="fas fa-chevron-down"></i></span>
                            <ul className="dropdown-menu">
                                <li><a href="#" onClick={() => setIsMenuOpen(false)}>Final Program</a></li>
                                <li><a href="#" onClick={() => setIsMenuOpen(false)}>Keynote Speakers</a></li>
                                <li><a href="#" onClick={() => setIsMenuOpen(false)}>Plenary Speakers</a></li>
                                <li><a href="#" onClick={() => setIsMenuOpen(false)}>Special Session Forum</a></li>
                                <li><a href="#" onClick={() => setIsMenuOpen(false)}>Tutorial</a></li>
                                <li><a href="#" onClick={() => setIsMenuOpen(false)}>Technical Visit</a></li>
                            </ul>
                        </li>
                        <li><Link to="/registration" onClick={() => setIsMenuOpen(false)}>REGISTRATION</Link></li>
                        <li><Link to="/sponsorship" onClick={() => setIsMenuOpen(false)}>SPONSORSHIP</Link></li>
                        <li><Link to="/committee" onClick={() => setIsMenuOpen(false)}>COMMITTEE</Link></li>
                        <li className="dropdown">
                            <span className="dropdown-toggle" onClick={(e) => e.target.nextElementSibling.classList.toggle('show')}>VENUE <i className="fas fa-chevron-down"></i></span>
                            <ul className="dropdown-menu">
                                <li><Link to="/venue" onClick={() => setIsMenuOpen(false)}>Hyatt Regency Trivandrum</Link></li>
                                <li><Link to="/travel" onClick={() => setIsMenuOpen(false)}>Travel to Trivandrum</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT</Link></li>
                    </ul>
                    <div className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
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
