import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import footerImg from '../assets/footertvm1.png';

const Footer = () => {
    return (
        <footer className="footer-dark">
            <div className="container">
                {/* Organized By Section */}
                <div className="footer-organized">
                    <h3>Organized By</h3>
                    <div className="organizer-logos">
                        <div className="org-logo-card">
                            <span>iSPEC 2026</span>
                        </div>
                        <div className="org-logo-card">
                            <span>IEEE PES Kerala</span>
                        </div>
                        <div className="org-logo-card">
                            <span>IEEE PES</span>
                        </div>
                        <div className="org-logo-card">
                            <span>IEEE</span>
                        </div>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="footer-social">
                    <a href="#" aria-label="Instagram"><FaInstagram /></a>
                    <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                    <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
                    <a href="mailto:info@ispec2026.org" aria-label="Email"><FaEnvelope /></a>
                </div>

                {/* Contact Information */}
                <div className="footer-contacts">
                    <div className="contact-person">
                        <h4>Dr. Boby Philip</h4>
                        <p>Chair, IEEE PES Kerala Chapter</p>
                        <p>+91 94957 41482</p>
                        <p>boby.philip@ieee.org</p>
                    </div>
                    <div className="contact-person">
                        <h4>Aravind R</h4>
                        <p>SR, IEEE PES Kerala Chapter</p>
                        <p>+91 6238177643</p>
                        <p>aravind17@ieee.org</p>
                    </div>
                    <div className="contact-person">
                        <h4>Anvitha Vinod</h4>
                        <p>Chair, IEEE SB CET</p>
                        <p>+91 77361 28024</p>
                        <p>anvithavinod@ieee.org</p>
                    </div>
                </div>
                {/* Footer Image */}
                <div className="footer-image">
                    <img src={footerImg} alt="Trivandrum" />
                </div>
                {/* Copyright */}
                <div className="footer-bottom">
                    <p>Copyright © 2026 IEEE PES Kerala Chapter. All rights reserved.</p>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
