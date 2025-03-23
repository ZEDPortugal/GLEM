import React from 'react';
import { useInView } from 'react-intersection-observer';

const WeddingPackage = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <section
            id="wedding-packages"
            ref={ref}
            className="wedding-packages-section flex flex-col items-center justify-center bg-gradient-to-tr from-black to-gray-900 transition-colors duration-500"
        >
            <div className="container px-5 mx-auto py-10 font-newsCycle" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                <h2
                    className='text-3xl font-bold my-6 text-gray-100 transition-colors duration-500'
                >
                    Wedding Packages
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10">
                    <div className={`p-4 rounded-lg shadow-lg bg-white transition-transform duration-500 hover:scale-105 hover:shadow-2xl ${inView ? 'animate-fade-in delay-4' : 'opacity-0'}`}>
                        <h3 className="text-lg font-bold mb-2 text-black transition-colors duration-500">Premium Package</h3>
                        <div className="border-t-2 my-2 border-black transition-colors duration-500"></div>
                        <ul className="text-sm text-black transition-colors duration-500 list-disc pl-5">
                            <li>Basic venue styling</li>
                            <li>50 pax catering service</li>
                            <li>Sound system setup</li>
                            <li>Event coordination</li>
                        </ul>
                    </div>
                    <div className={`p-4 rounded-lg shadow-lg bg-white transition-transform duration-500 hover:scale-105 hover:shadow-2xl ${inView ? 'animate-fade-in delay-5' : 'opacity-0'}`}>
                        <h3 className="text-lg font-bold mb-2 text-black transition-colors duration-500">Elite Package</h3>
                        <div className="border-t-2 my-2 border-black transition-colors duration-500"></div>
                        <ul className="text-sm text-black transition-colors duration-500 list-disc pl-5">
                            <li>Elegant venue styling with floral arrangements</li>
                            <li>100 pax catering service</li>
                            <li>Sound and lighting setup</li>
                            <li>Professional event host</li>
                            <li>Full event coordination</li>
                        </ul>
                    </div>
                    <div className={`p-4 rounded-lg shadow-lg bg-white transition-transform duration-500 hover:scale-105 hover:shadow-2xl ${inView ? 'animate-fade-in delay-6' : 'opacity-0'}`}>
                        <h3 className="text-lg font-bold mb-2 text-black transition-colors duration-500">Pro Package</h3>
                        <div className="border-t-2 my-2 border-black transition-colors duration-500"></div>
                        <ul className="text-sm text-black transition-colors duration-500 list-disc pl-5">
                            <li>Luxury venue styling & premium floral design</li>
                            <li>150 pax catering with full-course meals</li>
                            <li>Live band or DJ performance</li>
                            <li>Bridal car service</li>
                            <li>Complete event planning & on-the-day coordination</li>
                        </ul>
                    </div>
                </div>

                {/* Header for Debut and Party Packages */}
                <h2
                    className='text-3xl font-bold my-6 text-gray-100 transition-colors duration-500'
                >
                    Debut & Party Packages
                </h2>

                {/* Debut Packages */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10">
                    <div className={`p-4 rounded-lg shadow-lg bg-white transition-transform duration-500 hover:scale-105 hover:shadow-2xl ${inView ? 'animate-fade-in delay-7' : 'opacity-0'}`}>
                        <h3 className="text-lg font-bold mb-2 text-black transition-colors duration-500">Simple Elegance</h3>
                        <div className="border-t-2 my-2 border-black transition-colors duration-500"></div>
                        <ul className="text-sm text-black transition-colors duration-500 list-disc pl-5">
                            <li>Minimalist venue setup</li>
                            <li>50 pax catering</li>
                            <li>18 roses & candles coordination</li>
                            <li>Event host</li>
                        </ul>
                    </div>
                    <div className={`p-4 rounded-lg shadow-lg bg-white transition-transform duration-500 hover:scale-105 hover:shadow-2xl ${inView ? 'animate-fade-in delay-8' : 'opacity-0'}`}>
                        <h3 className="text-lg font-bold mb-2 text-black transition-colors duration-500">Royal Experience</h3>
                        <div className="border-t-2 my-2 border-black transition-colors duration-500"></div>
                        <ul className="text-sm text-black transition-colors duration-500 list-disc pl-5">
                            <li>Themed venue styling</li>
                            <li>100 pax catering</li>
                            <li>LED wall & photo booth</li>
                            <li>Grand entrance with dry ice effect</li>
                        </ul>
                    </div>
                    <div className={`p-4 rounded-lg shadow-lg bg-white transition-transform duration-500 hover:scale-105 hover:shadow-2xl ${inView ? 'animate-fade-in delay-9' : 'opacity-0'}`}>
                        <h3 className="text-lg font-bold mb-2 text-black transition-colors duration-500">Luxury Ball</h3>
                        <div className="border-t-2 my-2 border-black transition-colors duration-500"></div>
                        <ul className="text-sm text-black transition-colors duration-500 list-disc pl-5">
                            <li>Full thematic design & stage setup</li>
                            <li>150 pax catering with a fine dining setup</li>
                            <li>Professional choreographer for 18 dances</li>
                            <li>Fireworks & confetti blast</li>
                        </ul>
                    </div>
                </div>

                {/* Party Packages */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10">
                    <div className={`p-4 rounded-lg shadow-lg bg-white transition-transform duration-500 hover:scale-105 hover:shadow-2xl ${inView ? 'animate-fade-in delay-10' : 'opacity-0'}`}>
                        <h3 className="text-lg font-bold mb-2 text-black transition-colors duration-500">Basic Party</h3>
                        <div className="border-t-2 my-2 border-black transition-colors duration-500"></div>
                        <ul className="text-sm text-black transition-colors duration-500 list-disc pl-5">
                            <li>Simple venue décor</li>
                            <li>50 pax food catering</li>
                            <li>Background music</li>
                        </ul>
                    </div>
                    <div className={`p-4 rounded-lg shadow-lg bg-white transition-transform duration-500 hover:scale-105 hover:shadow-2xl ${inView ? 'animate-fade-in delay-11' : 'opacity-0'}`}>
                        <h3 className="text-lg font-bold mb-2 text-black transition-colors duration-500">Classic Celebration</h3>
                        <div className="border-t-2 my-2 border-black transition-colors duration-500"></div>
                        <ul className="text-sm text-black transition-colors duration-500 list-disc pl-5">
                            <li>Themed decorations</li>
                            <li>100 pax catering</li>
                            <li>Live entertainment (singer/magician)</li>
                        </ul>
                    </div>
                    <div className={`p-4 rounded-lg shadow-lg bg-white transition-transform duration-500 hover:scale-105 hover:shadow-2xl ${inView ? 'animate-fade-in delay-12' : 'opacity-0'}`}>
                        <h3 className="text-lg font-bold mb-2 text-black transition-colors duration-500">Grand Bash</h3>
                        <div className="border-t-2 my-2 border-black transition-colors duration-500"></div>
                        <ul className="text-sm text-black transition-colors duration-500 list-disc pl-5">
                            <li>Customized stage & décor</li>
                            <li>150 pax catering with dessert bar</li>
                            <li>Sound & lighting setup</li>
                            <li>Event photography & videography</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeddingPackage;
