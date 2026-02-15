import React from 'react';

const Stats = () => {
    const stats = [
        { number: '500+', label: 'Attendees' },
        { number: '30+', label: 'Countries' },
        { number: '200+', label: 'Papers' },
        { number: '50+', label: 'Speakers' }
    ];

    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <span className="stat-number">{stat.number}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
