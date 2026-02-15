import React from 'react';

const VenueMap = () => {
    return (
        <section className="venue-map-section" id="venue">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3945.922152648439!2d76.9537603758836!3d8.506941591534434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bba68853c847%3A0xe7bc32204f32c39b!2sHyatt%20Regency%20Trivandrum!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hyatt Regency Trivandrum Location"
            ></iframe>
        </section>
    );
};

export default VenueMap;
