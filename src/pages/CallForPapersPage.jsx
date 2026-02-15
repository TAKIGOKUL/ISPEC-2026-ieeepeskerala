import React from 'react';
import PageLayout from '../components/PageLayout';

const CallForPapersPage = () => {
    return (
        <PageLayout title="Call for Papers">
            <div className="container">
                <section className="mb-5">
                    <h2>Conference Overview</h2>
                    <p>The IEEE Sustainable Power and Energy Conference (iSPEC) 2026 will be held in Trivandrum, Kerala under the theme <strong>“Empowering a Sustainable Future Through Green Technology and Systems Innovation.”</strong></p>
                    <p>The conference brings together researchers, industry professionals, utilities, policymakers, and educators to exchange ideas and showcase advances in power and energy systems, with a focus on sustainability, digitalization, resilience, and system-level innovation.</p>
                    <p>The technical program will include keynote speeches, panel sessions, tutorials, and peer-reviewed paper and poster presentations, highlighting both research breakthroughs and practical applications. With six technical tracks delivered over three days, iSPEC 2026 provides a dynamic platform for knowledge sharing, collaboration, and professional development.</p>
                </section>

                <section className="mb-5">
                    <h2>Conference Tracks</h2>
                    <div className="track-list">
                        <div className="track-item mb-4">
                            <h3>Smart Grid Concepts and Applications</h3>
                        </div>
                        <div className="track-item mb-4">
                            <h3>Renewable Energy and Energy Storage Systems</h3>
                        </div>
                        <div className="track-item mb-4">
                            <h3>Emerging Sustainable Power Technologies</h3>
                        </div>
                        <div className="track-item mb-4">
                            <h3>Transportation Electrification</h3>
                        </div>
                        <div className="track-item mb-4">
                            <h3>Power Electronics in Power Systems</h3>
                        </div>
                        <div className="track-item mb-4">
                            <h3>AI and Machine Learning for Power Systems</h3>
                        </div>
                        <div className="track-item mb-4">
                            <h3>Cyber Security and IoT for Power Systems</h3>
                        </div>
                        <div className="track-item mb-4">
                            <h3>Power System Resilience and Climate Change Mitigation</h3>
                        </div>
                        <div className="track-item mb-4">
                            <h3>Energy Policy, Economics and Market</h3>
                        </div>
                        <div className="track-item mb-4">
                            <h3>High Voltage Engineering and Technology</h3>
                        </div>
                    </div>
                </section>

                <section className="mb-5">
                    <h2>Important Dates</h2>
                    <div className="dates-grid" style={{ display: 'grid', gap: '20px' }}>
                        <div className="date-category">
                            <h4>Paper Submission</h4>
                            <ul>
                                <li><strong>Submission Open:</strong> 15 February 2026</li>
                                <li><strong>Full Paper Deadline:</strong> 15 April 2026</li>
                                <li><strong>Acceptance Notification:</strong> 15 June 2026</li>
                            </ul>
                        </div>
                        <div className="date-category">
                            <h4>Tutorials & Special Sessions</h4>
                            <ul>
                                <li><strong>Proposal Deadline:</strong> 10 March 2026</li>
                                <li><strong>Decision Notification:</strong> 15 March 2026</li>
                            </ul>
                        </div>
                        <div className="date-category">
                            <h4>Registration</h4>
                            <ul>
                                <li><strong>Early Registration Deadline:</strong> 15 July 2026</li>
                                <li><strong>Camera-ready Paper Due:</strong> 15 July 2026</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default CallForPapersPage;
