import React from 'react';

const Sponsors = () => {
    return (
        <section className="section bg-light sponsors-section">
            <div className="container">
                <div className="section-header">
                    <h2>Special Thanks</h2>
                    <p>We gratefully acknowledge the support of our sponsors.</p>
                </div>

                <div className="sponsors-grid">
                    {/* Patron / Platinum Sponsors */}
                    <div className="sponsor-tier tier-patron">
                        <h3>Patrons</h3>
                        <div className="logo-grid">
                            <div className="sponsor-logo placeholder">Patron Logo</div>
                            <div className="sponsor-logo placeholder">Patron Logo</div>
                        </div>
                    </div>

                    {/* Gold Sponsors */}
                    <div className="sponsor-tier tier-gold">
                        <h3>Gold Sponsors</h3>
                        <div className="logo-grid">
                            <div className="sponsor-logo placeholder">Gold Logo</div>
                            <div className="sponsor-logo placeholder">Gold Logo</div>
                            <div className="sponsor-logo placeholder">Gold Logo</div>
                        </div>
                    </div>

                    {/* Silver/Technical Sponsors */}
                    <div className="sponsor-tier tier-silver">
                        <h3>Technical Co-Sponsors</h3>
                        <div className="logo-grid">
                            <div className="sponsor-logo placeholder">IEEE PES</div>
                            <div className="sponsor-logo placeholder">IEEE Kerala Section</div>
                            <div className="sponsor-logo placeholder">IAS</div>
                            <div className="sponsor-logo placeholder">PELS</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
