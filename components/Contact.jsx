import React from 'react';

const Contact = () => {
    return (
        <section
            id="contact"
            className="contact-section grid grid-cols-1 gap-4 px-5 py-10 bg-gradient-to-bl bg-amber-50 transition-colors duration-500"
        >
            <div className="flex flex-col justify-center bg-white p-6 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-4 text-black">Get in Touch</h2>
                <p className="text-sm text-black">
                    Feel free to reach out to us for inquiries, bookings, or any questions. We look forward to helping you create unforgettable events!
                </p>
            </div>

            {/* Left Side: Contact Information */}
            <div className="flex flex-col justify-center bg-white p-6 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-4 text-black">Contact Us</h2>
                <p className="text-sm text-black mb-2">
                    <strong>Address:</strong> 3rd floor -114 Gov. Pascual Ave, Tinajeros, Malabon, 1470 Metro Manila
                </p>
                <p className="text-sm text-black mb-2">
                    <strong>Contact Number:</strong> 09649126596 | 09156520813 | 82340240

                </p>
                <p className="text-sm text-black">
                    <strong>Email:</strong> WeareGlem1@gmail.com
                </p>
            </div>

            {/* Right Side: Placeholder for Additional Content */}
            <p className="text-sm text-black text-center">
                © {new Date().getFullYear()} Glem Event Inc. All rights reserved.
            </p>
        </section>

    );
};

export default Contact;
