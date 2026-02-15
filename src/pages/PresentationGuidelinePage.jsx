import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const PresentationGuidelinePage = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <PageHeader title="Presentation Guideline" breadcrumb="Presentation Guideline" />

            <main className="page-content">
                <div className="container">
                    <section className="guideline-section">
                        <h2>Pre-Conference</h2>
                        <ul className="guideline-list" style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#444', marginBottom: '40px' }}>
                            <li style={{ marginBottom: '10px' }}>The presenter needs to be declared in EDAS.</li>
                            <li style={{ marginBottom: '10px' }}>
                                <strong>Poster Presentation:</strong> Posters should be <strong>A1 size (vertical)</strong>.
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                                <strong>Oral Presentation:</strong> The duration of the presentation is <strong>10 minutes</strong>. The presentation slides should be prepared in <strong>PowerPoint format</strong>.
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                                The presentation slides can be uploaded to EDAS before <strong>31 October 2026</strong>.
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                                Please use the <a href="#" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>iSPEC 2026 PowerPoint Template</a> for your presentation slides.
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                                The filename of the presentation slides should follow this format: <code>PAPER NUMBER_PRESENTER NAME</code> (e.g., <code>1570123456 NUR ASHIDA SALIM</code>).
                            </li>
                        </ul>

                        <h2>During Conference (Day of Presentation)</h2>
                        <ul className="guideline-list" style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#444' }}>
                            <li style={{ marginBottom: '10px' }}>
                                <strong>Oral Session:</strong> The session chair will use the presentation slides uploaded to EDAS for the presentation. The duration for each presentation is <strong>10 minutes</strong> (7 minutes for presentation and 3 minutes for Q&A).
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                                <strong>Poster Session:</strong> The author must be present at the poster during the scheduled poster session.
                            </li>
                        </ul>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PresentationGuidelinePage;
