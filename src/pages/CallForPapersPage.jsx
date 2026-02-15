import React from 'react';
import PageLayout from '../components/PageLayout';

const CallForPapersPage = () => {
    return (
        <PageLayout title="Call for Papers">
            <div className="container">
                <p>iSPEC 2026 invites original, high-quality papers in all areas of sustainable power and energy. Topics of interest include, but are not limited to:</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '30px' }}>
                    <div className="topic-list">
                        <h3>Technical Topics</h3>
                        <ul>
                            <li>Smart Grid Technologies and Applications</li>
                            <li>Renewable Energy Systems (Solar, Wind, etc.)</li>
                            <li>Energy Storage and Battery Management</li>
                            <li>Power Electronics and Drive Systems</li>
                            <li>Electric Vehicles and Charging Infrastructure</li>
                            <li>Power System Planning and Operation</li>
                            <li>Microgrids and Distributed Generation</li>
                            <li>Cyber-Physical Systems in Energy</li>
                        </ul>
                    </div>
                    <div className="submission-info">
                        <h3>Submission Guidelines</h3>
                        <p>All papers must be submitted through the official conference submission system. Detailed guidelines and templates will be provided soon.</p>
                        <p>Papers will undergo a rigorous peer-review process by the technical program committee.</p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default CallForPapersPage;
