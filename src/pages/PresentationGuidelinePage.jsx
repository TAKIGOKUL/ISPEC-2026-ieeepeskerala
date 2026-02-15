import React from 'react';
import PageLayout from '../components/PageLayout';

const PresentationGuidelinePage = () => {
    return (
        <PageLayout title="Presentation and Poster Instructions">
            <div className="container">
                <section className="mb-5">
                    <h2>Registration and Presentation</h2>
                    <p>At least one author of every accepted paper must register for the conference and present the paper. Each accepted paper requires a separate author registration.</p>
                </section>

                <section className="mb-5">
                    <h2>Format and Length</h2>
                    <p>Contributions should be a regular paper (4-6 pages) formatted in double-column IEEE conference style. Authors should use the official IEEE conference templates available for both MS Word and LaTeX.</p>
                    <p>Submissions that do not conform to the required style may be rejected without review. All manuscripts must be submitted electronically in PDF format and must be clearly readable.</p>
                </section>

                <section className="mb-5">
                    <h2>Submission Portal</h2>
                    <p>All papers must be submitted via Microsoft CMT. For detailed formatting guidelines, please refer to the <a href="https://www.ieee.org/conferences/publishing/templates" target="_blank" rel="noopener noreferrer">Conference Template</a>.</p>
                    <div className="mt-3">
                        <a href="https://cmt3.research.microsoft.com/RECCAP2026" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Go to Submission Portal</a>
                    </div>
                </section>

                <section className="mb-5">
                    <h2>Publication</h2>
                    <p>Accepted and presented papers will be submitted to IEEE Xplore for possible publication, ensuring global visibility and recognition.</p>
                </section>

                <section className="mb-5">
                    <h2>Plagiarism Policy</h2>
                    <p>Each submission will undergo a mandatory plagiarism check in accordance with IEEE standards. Any paper found violating ethical or plagiarism policies will be immediately rejected, and the authors’ affiliated institutions will be notified.</p>
                </section>
            </div>
        </PageLayout>
    );
};

export default PresentationGuidelinePage;
