import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import registrationFeesImg from '../assets/Registeration.png';

const RegistrationPage = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <PageHeader title="Registration" breadcrumb="Registration" />

            <main className="page-content">
                <div className="container">
                    <section className="registration-section">
                        <h2>Conference Fees</h2>
                        <div className="fees-image-container" style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <img
                                src={registrationFeesImg}
                                alt="iSPEC 2026 Registration Fees"
                                style={{ maxWidth: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                            />
                        </div>

                        <h2>Registration Instructions</h2>
                        <div className="instructions-content">
                            <ol style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#444' }}>
                                <li style={{ marginBottom: '15px' }}>
                                    <strong>Make Payment:</strong> Please make the payment via Bank Transfer to the account detailed below. Ensure you keep the proof of payment.
                                </li>
                                <li style={{ marginBottom: '15px' }}>
                                    <strong>Fill Registration Form:</strong> After payment, please complete the online registration form.
                                    <br />
                                    <a href="#" className="btn btn-primary" style={{ marginTop: '10px', display: 'inline-block' }}>Register Now</a>
                                </li>
                                <li style={{ marginBottom: '15px' }}>
                                    <strong>Proof of Payment:</strong> Email the proof of payment to the Finance Chair at <a href="mailto:ispec2026@gmail.com">ispec2026@gmail.com</a>.
                                </li>
                            </ol>
                        </div>

                        <h2>Payment Details</h2>
                        <div className="bank-details" style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px', borderLeft: '5px solid var(--primary)' }}>
                            <p><strong>Bank Name:</strong> State Bank of India (TBA)</p>
                            <p><strong>Account Name:</strong> IEEE PES Kerala Chapter (TBA)</p>
                            <p><strong>Account Number:</strong> XXXXXXXXXX</p>
                            <p><strong>SWIFT Code:</strong> XXXXXXXX</p>
                            <p><em>*Detailed bank information will be updated shortly.</em></p>
                        </div>

                        <h2 style={{ marginTop: '40px' }}>Cancellation Policy</h2>
                        <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#444' }}>
                            <li style={{ marginBottom: '10px' }}>Cancellations received before <strong>October 25, 2026</strong> will be refunded, subject to a 50% administrative fee.</li>
                            <li style={{ marginBottom: '10px' }}>No refunds will be made for cancellations received after the deadline.</li>
                            <li style={{ marginBottom: '10px' }}>Registration may be transferred to another person at no extra charge if approved by the committee.</li>
                        </ul>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default RegistrationPage;
