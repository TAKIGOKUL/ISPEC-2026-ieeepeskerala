import React from 'react';
import PageLayout from '../components/PageLayout';

const PaperSubmissionPage = () => {
    return (
        <PageLayout title="Manuscript Submission">
            <div className="container">
                <section className="mb-5">
                    <h2>Paper Preparation Guidelines</h2>
                    <p>All papers must follow the IEEE PES conference paper preparation guidelines. Authors are strongly advised to review the official instructions carefully before preparing their manuscripts.</p>
                    <a href="https://ieee-pes.org/publications/authors-kit/preparation-and-submission-of-conference-technical-papers/" className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">Author Guidelines</a>
                </section>

                <section className="mb-5">
                    <h2>IEEE Conference Templates</h2>
                    <p>Manuscripts must be prepared using the official IEEE conference templates, available in both Microsoft Word and LaTeX formats.</p>
                    <ol>
                        <li>Standard IEEE two-column format is mandatory</li>
                        <li>The manuscript must not exceed SIX (6) pages, including all text, figures, tables, references, and appendices.</li>
                    </ol>
                    <a href="https://www.ieee.org/conferences/publishing/templates" className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">IEEE Conference Templates</a>
                </section>

                <section className="mb-5">
                    <h2>Submission Portal</h2>
                    <p>Authors are required to submit their manuscripts through the official conference submission system Microsoft CMT. Please ensure that your paper complies with all IEEE PES guidelines before submission.</p>
                    <div className="mt-3">
                        <a href="https://cmt3.research.microsoft.com/APPEEC2026/Submission/Index" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Microsoft CMT – iSPEC 2026 Submission</a>
                    </div>
                </section>

                <section className="mb-5">
                    <h2>Camera-Ready Paper</h2>
                    <p>Detailed instructions for preparing and submitting the camera-ready version of accepted papers will be provided after the review process.</p>
                </section>

                <section className="mb-5">
                    <h2>Presentation Requirement</h2>
                    <p>The IEEE Sustainable Power and Energy Conference (iSPEC) 2026 will be held fully in person. For each accepted paper, at least one author must attend the conference and present the work according to the conference schedule.</p>
                </section>

                <section className="mb-5">
                    <h2>Publication</h2>
                    <p>All accepted and presented papers will be published in the conference e-proceedings and submitted to the IEEE Xplore Digital Library, and will be indexed by Scopus and Google Scholar.</p>
                </section>
            </div>
        </PageLayout>
    );
};

export default PaperSubmissionPage;
