import React from 'react';
import PageLayout from '../components/PageLayout';

const SpecialSessionPage = () => {
    return (
        <PageLayout title="Special Session">
            <div className="container">
                <section className="mb-5">
                    <h2>Invitation for Special Session Proposals</h2>
                    <p>Special Sessions are intended to provide focused forums on timely and impactful topics that complement the main technical tracks of iSPEC 2026. Proposals may emphasize novel theories, advanced technologies, system-level integration, real-world deployment, or industry-relevant challenges. Contributions that bridge academia and industry are particularly encouraged.</p>
                </section>

                <section className="mb-5">
                    <h2>Scope of Special Session</h2>
                    <p>Special Session topics may include, but are not limited to:</p>
                    <ul>
                        <li>Future power network architectures and grid modernization</li>
                        <li>Microgrids, distributed energy resources, and grid-edge intelligence</li>
                        <li>Energy storage systems, flexibility, and market participation</li>
                        <li>Protection, control, and automation for modern power systems</li>
                        <li>Power electronics, grid-forming inverters, and hybrid AC/DC systems</li>
                        <li>Digitalization, digital twins, and data-driven power system operation</li>
                        <li>Cyber-physical security and interoperability of power systems</li>
                        <li>Electrification, sustainability, and resilient energy infrastructure</li>
                    </ul>
                </section>

                <section className="mb-5">
                    <h2>Proposal Requirements</h2>
                    <p>A Special Session proposal should include:</p>
                    <ol>
                        <li>Proposed Special Session title</li>
                        <li>Brief description of the session (objectives, relevance, and scope)</li>
                        <li>List of key topics to be covered</li>
                        <li>Names and affiliations of the organizer(s)</li>
                        <li>List of potential contributors (or indicative paper titles, one session is suggested to contain 8 papers in total)</li>
                        <li>List of potential reviewers</li>
                    </ol>
                </section>

                <section className="mb-5">
                    <h2>Important Dates</h2>
                    <div className="dates-grid" style={{ display: 'grid', gap: '20px' }}>
                        <div className="date-category">
                            <h4>Tutorials & Special Sessions</h4>
                            <ul>
                                <li><strong>Proposal Deadline:</strong> 10 March 2026</li>
                                <li><strong>Decision Notification:</strong> 15 March 2026</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-5">
                    <h2>Proposal Submission</h2>
                    <p>Please use the template provided for filling up the proposal. All Special Sessions will follow the standard iSPEC peer-review process. Accepted papers will be published in the conference proceedings.</p>
                    <p>Special Session proposals should be submitted to special session chair via email.</p>
                    <div className="alert alert-info">
                        <strong>Contact:</strong> Special Session Chair (Details to be announced)
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default SpecialSessionPage;
