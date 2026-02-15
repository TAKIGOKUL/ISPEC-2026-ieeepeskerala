import React, { useEffect, useRef } from 'react';

const Highlights = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                }
            });
        }, { threshold: 0.1 });

        const cards = gridRef.current.querySelectorAll('.highlight-card');
        cards.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    const highlights = [
        { icon: 'bolt', title: 'Sustainable Power', desc: 'Exploring the future of smart grids and decentralized energy systems.' },
        { icon: 'leaf', title: 'Green Energy', desc: 'Latest breakthroughs in solar, wind, and storage technologies.' },
        { icon: 'users', title: 'Global Network', desc: 'Connect with 1000+ experts from industry and academia worldwide.' }
    ];

    return (
        <section id="highlights" className="section bg-light">
            <div className="container" ref={gridRef}>
                <div className="highlights-grid">
                    {highlights.map((h, i) => (
                        <div key={i} className="highlight-card reveal-hidden">
                            <div className="icon-box"><i className={`fas fa-${h.icon}`}></i></div>
                            <h3>{h.title}</h3>
                            <p>{h.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
