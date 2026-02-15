import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const SponsorshipPage = () => {
    const sponsorshipTiers = [
        {
            name: 'Diamond',
            price: 'Contact for Pricing',
            benefits: [
                'Logo on website and all marketing materials',
                'Keynote address opportunity',
                'Complimentary exhibition booth',
                '5 Complimentary registrations',
                'Full page advertisement in program booklet'
            ],
            color: '#b9f2ff', // Diamond-ish
            borderColor: '#00c3ff'
        },
        {
            name: 'Platinum',
            price: 'Contact for Pricing',
            benefits: [
                'Logo on website and marketing materials',
                'Complimentary exhibition booth',
                '3 Complimentary registrations',
                'Half page advertisement in program booklet'
            ],
            color: '#e5e4e2', // Platinum
            borderColor: '#a0b6c5'
        },
        {
            name: 'Gold',
            price: 'Contact for Pricing',
            benefits: [
                'Logo on website',
                'Complimentary exhibition booth',
                '2 Complimentary registrations'
            ],
            color: '#ffd700', // Gold
            borderColor: '#ffc107'
        },
        {
            name: 'Silver',
            price: 'Contact for Pricing',
            benefits: [
                'Logo on website',
                '1 Complimentary registration'
            ],
            color: '#c0c0c0', // Silver
            borderColor: '#9e9e9e'
        },
        {
            name: 'Bronze',
            price: 'Contact for Pricing',
            benefits: [
                'Logo on website'
            ],
            color: '#cd7f32', // Bronze
            borderColor: '#a0522d'
        }
    ];

    return (
        <div className="page-wrapper">
            <Navbar />
            <PageHeader title="Sponsorship" breadcrumb="Sponsorship" />

            <main className="page-content">
                <div className="container">
                    <section className="sponsorship-section">
                        <div className="section-header text-center mb-5">
                            <h2>Sponsorship Packages</h2>
                            <p>Partner with iSPEC 2026 to showcase your brand to global leaders in sustainable power and energy.</p>
                        </div>

                        <div className="sponsorship-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginBottom: '60px' }}>
                            {sponsorshipTiers.map((tier, index) => (
                                <div key={index} className="sponsor-card" style={{
                                    flex: '1 1 300px',
                                    maxWidth: '350px',
                                    background: '#fff',
                                    padding: '30px',
                                    borderRadius: '15px',
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                    borderTop: `5px solid ${tier.borderColor}`,
                                    textAlign: 'center'
                                }}>
                                    <h3 style={{ color: 'var(--primary)', marginBottom: '10px' }}>{tier.name}</h3>
                                    <div className="price" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#666', marginBottom: '20px' }}>{tier.price}</div>
                                    <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
                                        {tier.benefits.map((benefit, i) => (
                                            <li key={i} style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
                                                <span style={{ position: 'absolute', left: 0, color: 'var(--secondary)' }}>✓</span> {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <h2>Exhibition Opportunities</h2>
                        <div className="exhibition-content" style={{ background: '#f8f9fa', padding: '30px', borderRadius: '15px' }}>
                            <p>Showcase your products and services at iSPEC 2026. Exhibition spaces are available.</p>
                            <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                                <li><strong>Standard Pass:</strong> Includes 3-day exhibition space (6ft x 2ft table), 2 chairs, lunch for 1 pax, and 1 Gala Dinner pass.</li>
                                <li><strong>Additional Exhibitor Pass:</strong> Includes lunch and Gala Dinner for 1 additional pax.</li>
                            </ul>
                            <div className="mt-4 text-center">
                                <a href="#" className="btn btn-primary">Download Sponsorship Reply Form (PDF)</a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SponsorshipPage;
