import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const VenuePage = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <PageHeader title="Conference Venue" breadcrumb="Venue" />

            <main className="page-content">
                <div className="container">
                    <section className="venue-section">
                        <div className="text-center mb-5">
                            <h2>Hyatt Regency Trivandrum</h2>
                            <p style={{ fontSize: '1.2rem', color: '#555' }}>
                                Cv Raman Pillai Rd, Thycaud, Thiruvananthapuram, Kerala 695014
                            </p>
                        </div>

                        <div className="venue-map" style={{
                            width: '100%',
                            height: '500px',
                            borderRadius: '15px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            border: '5px solid white'
                        }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.867972756616!2d76.95377507575195!3d8.511307996503468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbc77df60e81%3A0xe2128913928e185e!2sHyatt%20Regency%20Trivandrum!5e0!3m2!1sen!2sin!4v1707986000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                        <div className="mt-5 text-center">
                            <a href="https://maps.app.goo.gl/BdjXJGPBDBMivSgf8" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginRight: '20px' }}>Open in Google Maps</a>
                            <a href="/travel" className="btn" style={{ background: 'var(--secondary)', color: 'white' }}>Travel Information</a>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default VenuePage;
