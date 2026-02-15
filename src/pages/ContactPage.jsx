import React from 'react';
import PageLayout from '../components/PageLayout';

const ContactPage = () => {
    return (
        <PageLayout title="Contact Us">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
                    <div className="contact-info">
                        <h2>IEEE PES Kerala Chapter</h2>
                        <p>For inquiries regarding iSPEC 2026, please contact the organizing team through the following channels:</p>
                        <div style={{ marginTop: '30px' }}>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <i className="fas fa-envelope" style={{ color: 'var(--primary)' }}></i>
                                <span><strong>Email:</strong> info@ispec2026.org</span>
                            </p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary)' }}></i>
                                <span><strong>Location:</strong> Trivandrum, Kerala, India</span>
                            </p>
                        </div>
                    </div>
                    <div className="contact-form-placeholder" style={{ background: '#f8f9fa', padding: '30px', borderRadius: '15px' }}>
                        <h3>Send a Message</h3>
                        <p>Our contact form is currently under development. Please reach out via email in the meantime.</p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default ContactPage;
