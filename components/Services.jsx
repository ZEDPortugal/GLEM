import React from 'react';

const Services = () => {
    return (
        <section
            id="services"
            className="services-section flex flex-col items-center justify-center  bg-gray-100 transition-colors duration-1000"
        >
            <div className="container px-5 py-10 font-newsCycle" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                <h2 className="text-2xl font-bold mb-6 text-black transition-colors duration-500">Our Services</h2>
                <p className="p-6 rounded-lg shadow-lg bg-white transition-colors duration-500 text-sm text-black mb-8 ">
                    At Glem Event Company Inc., we provide a full range of event planning services to ensure every detail of your special occasion is flawlessly executed. Whether you need full event coordination or specific services, we’ve got you covered!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Event Planning & Coordination */}
                    <div className="p-6 rounded-lg shadow-lg bg-white transition-colors duration-500">
                        <h3 className="text-xl font-bold mb-4 text-black transition-colors duration-500">Event Planning & Coordination</h3>
                        <div className="border-t-2 my-2 border-black transition-colors duration-500"></div>
                        <ul className="list-disc list-inside text-sm text-black">
                            <li>Full Event Planning – From conceptualization to execution, we handle every detail, including vendor coordination, timeline management, and on-the-day supervision.</li>
                            <li>Partial Event Planning – Need assistance with certain aspects of your event? We step in where you need us the most.</li>
                            <li>On-the-Day Coordination – Enjoy your event stress-free while our professional team ensures everything runs smoothly.</li>
                        </ul>
                    </div>

                    {/* Venue & Styling */}
                    <div className="p-6 rounded-lg shadow-lg bg-white transition-colors duration-500">
                        <h3 className="text-xl font-bold mb-4 text-black transition-colors duration-500">Venue & Styling</h3>
                        <div className="border-t-2 my-2 border-black transition-colors duration-500"></div>
                        <ul className="list-disc list-inside text-sm text-black">
                            <li>Venue Selection Assistance – We help you find the perfect venue based on your theme and budget.</li>
                            <li>Event Styling & Décor – From elegant to extravagant, we bring your vision to life with custom setups, floral arrangements, and themed designs.</li>
                            <li>Lighting & Special Effects – Enhance the ambiance with expert lighting, LED walls, fog machines, and more.</li>
                        </ul>
                    </div>

                    {/* Catering & Bar Services */}
                    <div className="p-6 rounded-lg shadow-lg bg-white transition-colors duration-500">
                        <h3 className="text-xl font-bold mb-4 text-black transition-colors duration-500">Catering & Bar Services</h3>
                        
                        <div className="border-t-2 my-2 border-black transition-colors duration-500"></div>
                        <ul className="list-disc list-inside text-sm text-black">
                            <li>Full-Service Catering – Choose from a variety of cuisines and menu styles, including buffet, plated, and cocktail receptions.</li>
                            <li>Beverage & Bar Services – Customized drink stations, mocktail bars, and full-service cocktail bars.</li>
                        </ul>
                    </div>

                    {/* Entertainment & Program Management */}
                    <div className="p-6 rounded-lg shadow-lg bg-white transition-colors duration-500">
                        <h3 className="text-xl font-bold mb-4 text-black transition-colors duration-500">Entertainment & Program Management</h3>
                        
                        <div className="border-t-2 my-2 border-black transition-colors duration-500"></div><ul className="list-disc list-inside text-sm text-black">
                            <li>Professional Hosts & Emcees – Keep your event lively with experienced hosts.</li>
                            <li>Live Bands & DJs – From acoustic performances to full party beats, we’ve got entertainment options for every occasion.</li>
                            <li>Performers & Acts – Dancers, magicians, and other specialty acts to wow your guests.</li>
                        </ul>
                    </div>

                    {/* Photography & Videography */}
                    <div className="p-6 rounded-lg shadow-lg bg-white transition-colors duration-500">
                        <h3 className="text-xl font-bold mb-4 text-black transition-colors duration-500">Photography & Videography</h3>
                        <div className="border-t-2 my-2 border-black transition-colors duration-500"></div><ul className="list-disc list-inside text-sm text-black">
                            <li>Event Photography – Capture every special moment with high-quality photography.</li>
                            <li>Cinematic Videography – Professionally edited videos to relive your event forever.</li>
                            <li>Photo Booths – Fun and interactive keepsakes for your guests.</li>
                        </ul>
                    </div>

                    {/* Special Add-ons & Custom Requests */}
                    <div className="p-6 rounded-lg shadow-lg bg-white transition-colors duration-500">
                        <h3 className="text-xl font-bold mb-4 text-black transition-colors duration-500">Special Add-ons & Custom Requests</h3>
                        <div className="border-t-2 my-2 border-black transition-colors duration-500"></div><ul className="list-disc list-inside text-sm text-black">
                            <li>Fireworks & Confetti Blast – Make a grand entrance or exit with spectacular effects.</li>
                            <li>Personalized Giveaways – Custom souvenirs to thank your guests.</li>
                            <li>Bridal Car & VIP Transport – Elegant car rentals for a grand arrival.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
