import React from 'react';
import PageLayout from '../components/PageLayout';
import speakerImg from '../assets/speaker.png';

const CommitteeMember = ({ name, affiliation, role, image }) => (
    <div className="committee-member" style={{
        textAlign: 'center',
        marginBottom: '30px',
        padding: '20px',
        borderLeft: '4px solid #00629b',
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

        {/* Only show role if it's specific (like Co-Chair vs just Chair if needed, but here structure implies role) */}
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
    const sections = [
        {
            title: 'Advisory Chair',
            members: [
                { name: 'Prof. Dipti Srinivasan', affiliation: 'National University of Singapore' }
            ]
        },
        {
            title: 'General Co-Chairs',
            members: [
                { name: 'Asst. Prof. Dhivya Sampath Kumar', affiliation: 'Singapore Institute of Technology' },
                { name: 'Assoc. Prof. Jimmy Peng', affiliation: 'National University of Singapore' }
            ]
        },
        {
            title: 'Finance Chair',
            members: [
                { name: 'Assoc. Prof. Sivaneasan Balakrishnan', affiliation: 'Singapore Institute of Technology' }
            ]
        },
        {
            title: 'Technical Programme Chairs',
            members: [
                { name: 'Assoc. Prof. Anurag Sharma', affiliation: 'Singapore Institute of Technology' },
                { name: 'Assoc. Prof. Xu Yan', affiliation: 'Nanyang Technological University, Singapore' },
                { name: 'Assoc. Prof. Daisuke Mashima', affiliation: 'Singapore University of Technology and Design' }
            ]
        },
        {
            title: 'Special Sessions Chair',
            members: [
                { name: 'Assoc. Prof. Elsa Feng', affiliation: 'Singapore Institute of Technology' }
            ]
        },
        {
            title: 'Registrations Chair',
            members: [
                { name: 'Asst. Prof. Muhammad Ramadan', affiliation: 'Singapore Institute of Technology' }
            ]
        }
    ];

    return (
        <PageLayout title="Conference Committee">
            <div className="container">
                {sections.map((section, index) => (
                    <CommitteeSection key={index} title={section.title} members={section.members} />
                ))}
            </div>
        </PageLayout>
    );
};

export default CommitteePage;
