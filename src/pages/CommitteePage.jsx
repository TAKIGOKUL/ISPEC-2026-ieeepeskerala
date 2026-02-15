import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import speakerImg from '../assets/speaker.png';

const CommitteeMember = ({ name, affiliation, role, image }) => (
    <div className="committee-member" style={{
        textAlign: 'center',
        marginBottom: '30px',
        padding: '20px',
        borderLeft: '4px solid #00629b', // Using primary color hex or var if possible
        borderBottom: '4px solid #00629b',
        borderRadius: '0 0 0 20px',
        backgroundColor: '#fff',
        transition: 'transform 0.3s ease',
        height: '100%'
    }}>
        <div style={{
            width: '150px',
            height: '150px',
            borderRadius: '15px',
            background: '#eee',
            margin: '0 auto 15px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#aaa',
            fontSize: '3rem'
        }}>
            <img src={image || speakerImg} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <h4 style={{ fontSize: '1.2rem', marginBottom: '5px', color: '#333' }}>{name}</h4>
        <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>{affiliation}</p>
        {role && <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 'bold', marginTop: '5px' }}>{role}</p>}
    </div>
);

const CommitteeSection = ({ title, members }) => (
    <div className="committee-section" style={{ marginBottom: '60px' }}>
        <h2 style={{
            borderBottom: '2px solid #eee',
            paddingBottom: '10px',
            marginBottom: '30px',
            color: 'var(--primary)',
            fontSize: '1.8rem'
        }}>{title}</h2>
        <div className="committee-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '40px'
        }}>
            {members.map((member, index) => (
                <CommitteeMember key={index} {...member} />
            ))}
        </div>
    </div>
);

const CommitteePage = () => {
    // Placeholder data based on structure request
    const sections = [
        { title: 'General Chairs', members: [{ name: 'TBA', affiliation: 'University/Organization' }, { name: 'TBA', affiliation: 'University/Organization' }] },
        { title: 'Program Chairs', members: [{ name: 'TBA', affiliation: 'University/Organization' }, { name: 'TBA', affiliation: 'University/Organization' }] },
        { title: 'Special Session Chairs', members: [{ name: 'TBA', affiliation: 'University/Organization' }] },
        { title: 'Demo and Exhibition Chairs', members: [{ name: 'TBA', affiliation: 'University/Organization' }] },
        { title: 'Publication Chairs', members: [{ name: 'TBA', affiliation: 'University/Organization' }] },
        { title: 'Competition Chairs', members: [{ name: 'TBA', affiliation: 'University/Organization' }] },
        { title: 'Workshops / Tutorials Chairs', members: [{ name: 'TBA', affiliation: 'University/Organization' }] },
        { title: 'Publicity Chairs', members: [{ name: 'TBA', affiliation: 'University/Organization' }] },
        { title: 'Website Chairs', members: [{ name: 'TBA', affiliation: 'University/Organization' }] },
        { title: 'Finance and Local Chairs', members: [{ name: 'TBA', affiliation: 'University/Organization' }] },
        { title: 'Awards Chairs', members: [{ name: 'TBA', affiliation: 'University/Organization' }] },
        { title: 'Sponsorship Chairs', members: [{ name: 'TBA', affiliation: 'University/Organization' }] },
        { title: 'Doctoral Consortium Chairs', members: [{ name: 'TBA', affiliation: 'University/Organization' }] },
        { title: 'Broadening Participation Chairs', members: [{ name: 'TBA', affiliation: 'University/Organization' }] },
    ];

    return (
        <div className="page-wrapper">
            <Navbar />
            <PageHeader title="Organizers" breadcrumb="Committee" />

            <main className="page-content">
                <div className="container">
                    {sections.map((section, index) => (
                        <CommitteeSection key={index} title={section.title} members={section.members} />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CommitteePage;
