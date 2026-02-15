import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const TravelPage = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <PageHeader title="Travel Information" breadcrumb="Travel" />

            <main className="page-content">
                <div className="container">
                    <section className="travel-intro mb-5">
                        <h2>Welcome to Trivandrum</h2>
                        <p>
                            Trivandrum (Thiruvananthapuram), the capital city of Kerala, is known for its rich cultural heritage, beautiful beaches, and historical landmarks.
                            The conference venue, <strong>Hyatt Regency Trivandrum</strong>, is centrally located and easily accessible from major transport hubs.
                        </p>
                    </section>

                    <div className="travel-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>

                        <div className="travel-card airport">
                            <h3 style={{ color: 'var(--primary)', borderBottom: '2px solid var(--secondary)', paddingBottom: '10px', display: 'inline-block' }}>By Air</h3>
                            <div className="details mt-3">
                                <h4>Trivandrum International Airport (TRV)</h4>
                                <p>The airport is located approximately <strong>5 km</strong> from the Hyatt Regency Trivandrum.</p>

                                <h5>Getting to Venue:</h5>
                                <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                                    <li><strong>Prepaid Taxi:</strong> Available at the arrival terminal. Estimated fare: ₹300 - ₹500.</li>
                                    <li><strong>Ride-Hailing Apps:</strong> Uber and Ola are widely available.</li>
                                    <li><strong>Travel Time:</strong> Approximately 15-20 minutes depending on traffic.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="travel-card train">
                            <h3 style={{ color: 'var(--primary)', borderBottom: '2px solid var(--secondary)', paddingBottom: '10px', display: 'inline-block' }}>By Train</h3>
                            <div className="details mt-3">
                                <h4>Trivandrum Central Railway Station (TVC)</h4>
                                <p>The main railway station is located approximately <strong>3 km</strong> from the Hyatt Regency Trivandrum.</p>

                                <h5>Getting to Venue:</h5>
                                <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                                    <li><strong>Prepaid Auto/Taxi:</strong> Stands available outside the station.</li>
                                    <li><strong>Ride-Hailing Apps:</strong> Uber and Ola pickup points are near the entrance.</li>
                                    <li><strong>Travel Time:</strong> Approximately 10-15 minutes.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="travel-card local">
                            <h3 style={{ color: 'var(--primary)', borderBottom: '2px solid var(--secondary)', paddingBottom: '10px', display: 'inline-block' }}>Local Transport</h3>
                            <div className="details mt-3">
                                <p>Getting around Trivandrum is convenient with several options:</p>
                                <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                                    <li><strong>Auto Rickshaws:</strong> A popular and affordable way to travel short distances. Most run on meters, but it's good to ask for the "meter" or negotiate a fare.</li>
                                    <li><strong>Ride-Hailing:</strong> Uber and Ola services are reliable for city travel.</li>
                                    <li><strong>KSRTC Buses:</strong> The state-run bus network connects all parts of the city.</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="mt-5 text-center">
                        <a href="https://maps.app.goo.gl/BdjXJGPBDBMivSgf8" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Venue on Google Maps</a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TravelPage;
