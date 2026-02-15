import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const PageLayout = ({ children, title }) => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <div className="page-header-simple">
                <div className="container">
                    <h1>{title}</h1>
                </div>
            </div>
            <main className="page-content-wrapper">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default PageLayout;
