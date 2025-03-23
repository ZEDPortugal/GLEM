import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, // Ensure the animation retriggers
        threshold: 0.1, // Activate when 10% of the section is visible
    });

    return (
        <section
            id="about"
            ref={ref}
            className="about-section flex flex-col items-center justify-center bg-gradient-to-bl from-white to-amber-50 transition-colors  duration-500"
        >
           

            <div className="container px-5 py-10 font-newsCycle" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                {/* About Us Section */}
                <h2 className="text-3xl font-bold mb-6 text-black transition-colors duration-500">About Us</h2>
                <div className="mb-10 p-6 rounded-lg shadow-lg bg-white transition-colors duration-500 ">
                        
                        <p className="text-sm text-black transition-colors duration-500">
                        At Glem Event Company Inc., we are passionate about crafting exceptional events that leave lasting impressions. With expertise in event planning, coordination, and execution, we bring visions to life—whether it's a dream wedding, an elegant debut, a corporate gathering, or a milestone celebration.
                        </p>
                    </div>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center ">
 
                    <div className="mb-10 mr-4 p-6 rounded-lg shadow-lg bg-white transition-colors duration-500">
                        <h3 className="text-xl font-bold mb-2 text-black transition-colors duration-500">Vision</h3>
                        <div className="border-t-2 my-2 border-black transition-colors duration-500"></div>
                        <p className="text-sm text-black transition-colors duration-500">
                            To be the leading event planning company, renowned for creating unique and unforgettable experiences that exceed our client expectations.
                        </p>
                    </div>
                    <div className="mb-10 ml-4 p-6 rounded-lg shadow-lg bg-white transition-colors duration-500">
                        <h3 className="text-xl font-bold mb-2 text-black transition-colors duration-500">Mission</h3>
                        <div className="border-t-2 my-2 border-black transition-colors duration-500"></div>
                        <p className="text-sm text-black transition-colors duration-500">
                            To create unforgettable experiences by delivering innovative, smooth, and personalized event solutions that inspire connections and live long lasting impressions
                        </p>
                    </div>
                    
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-5">
                <h3 className="flex flex-col items-center text-xl mb-4 text-black transition-colors duration-500">Meet the Team</h3>
                <div className='grid grid-cols-1 md:grid-cols-7 justify-items-center'>
                <div className="flex flex-col items-center"> 
                    <img
                        className="border-black hover:border-amber-300 border-2 hover:border-4 ease-in-out hover:rounded-full duration-300 rounded-full"
                        src="/image/Licebeth.jpg"
                        alt="Profile"
                        style={{ objectFit: 'cover', width: '150px', height: '150px' }}
                    />
                    <h1 className="text-black text-center mt-2">Ms. Licebeth Labaro</h1>
                    <h2 className="text-gray-600 text-center">Owner</h2>
                </div>

                <div className="flex flex-col items-center"> 
                    <img
                        className="border-black hover:border-amber-300 border-2 hover:border-4 ease-in-out hover:rounded-full duration-300 rounded-full"
                        src="/image/Hanuel.jpeg"
                        alt="Profile"
                        style={{ objectFit: 'cover', width: '150px', height: '150px' }}
                    />
                    <h1 className="text-black text-center mt-2">Mr. Hanuel Dave Gandeza</h1>
                    <h2 className="text-gray-600 text-center">Event Coordinator</h2>
                </div>

                <div className="flex flex-col items-center"> 
                    <img
                        className="border-black hover:border-amber-300 border-2 hover:border-4 ease-in-out hover:rounded-full duration-300 rounded-full"
                        src="/image/Vianna.jpeg"
                        alt="Profile"
                        style={{ objectFit: 'cover', width: '150px', height: '150px' }}
                    />
                    <h1 className="text-black text-center mt-2">Ms. Vianna Jane Gabriel</h1>
                    <h2 className="text-gray-600 text-center">Finance Coordinator</h2>
                </div>

                <div className="flex flex-col items-center"> 
                    <img
                        className="border-black hover:border-amber-300 border-2 hover:border-4 ease-in-out hover:rounded-full duration-300 rounded-full"
                        src="/image/JD.jpeg"
                        alt="Profile"
                        style={{ objectFit: 'cover', width: '150px', height: '150px' }}
                    />
                    <h1 className="text-black text-center mt-2">Mr. John Deniel Evangelista</h1>
                    <h2 className="text-gray-600 text-center">Marketing Head</h2>
                </div>

                <div className="flex flex-col items-center"> 
                    <img
                        className="border-black hover:border-amber-300 border-2 hover:border-4 ease-in-out hover:rounded-full duration-300 rounded-full"
                        src="/image/Mark.jpeg"
                        alt="Profile"
                        style={{ objectFit: 'cover', width: '150px', height: '150px' }}
                    />
                    <h1 className="text-black text-center mt-2">Mr. Mark Geronimo</h1>
                    <h2 className="text-gray-600 text-center">Planning Coordinator</h2>
                </div>

                <div className="flex flex-col items-center"> 
                    <img
                        className="border-black hover:border-amber-300 border-2 hover:border-4 ease-in-out hover:rounded-full duration-300 rounded-full"
                        src="/image/Mitch.jpg"
                        alt="Profile"
                        style={{ objectFit: 'cover', width: '150px', height: '150px' }}
                    />
                    <h1 className="text-black text-center mt-2">Ms. Mitch Egamino</h1>
                    <h2 className="text-gray-600 text-center">Logistics Head</h2>
                </div>

                <div className="flex flex-col items-center"> 
                    <img
                        className="border-black hover:border-amber-300 border-2 hover:border-4 ease-in-out hover:rounded-full duration-300 rounded-full"
                        src="/image/Dhenzel.jpeg"
                        alt="Profile"
                        style={{ objectFit: 'cover', width: '150px', height: '150px' }}
                    />
                    <h1 className="text-black text-center mt-2">Mr. Dhenzel Justine Mabuti</h1>
                    <h2 className="text-gray-600 text-center">Logistics Head</h2>
                </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 justify-items-center mt-10">
                    <div className="mb-5 p-6 rounded-lg shadow-lg bg-white transition-colors duration-500">
                        <h3 className="text-xl font-bold mb-2 text-black transition-colors duration-500">Company Background</h3>
                        <div className="border-t-2 my-2 border-black transition-colors duration-500"></div>
                        <p className="text-sm text-black transition-colors duration-500">
                        Dedicated to turning ideas into reality through flawless execution and creative outcomes, Glem Events Inc. is a top-tier event planning company. Established with a passion for excellence, we specialize in crafting unforgettable experiences that exceed expectations. from intimate to large scale events, wedding, and social gatherings, the glems team is committed to provide personalized attention every detail, ensuring that each event is flawless executed and reflects the unique style envision of our clients. Glem Events Inc. is the perfect partner for your next exceptional event because we take great pride in our originality, resourcefulness, and unwavering dedication to client satisfaction.
                        </p>
                  
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
                    <div className="mb-5 p-6 rounded-lg shadow-lg bg-white transition-colors duration-500 ">
                    <div className="flex flex-col items-center"> 
                    <img
                        className="border-gray-900 border-2 ease-in-out  duration-300 rounded-2xl"
                        src="/image/img1.jpg"
                        alt="Profile"
                        style={{ objectFit: 'cover',  objectPosition: 'center 20%', width: '530px', height: '300px' }}
                    />

                </div>
                    </div>

                    <div className="mb-5 p-6 rounded-lg shadow-lg bg-white transition-colors duration-500">
                    <div className="flex flex-col items-center"> 
                    <img
                        className="border-gray-900 border-2  ease-in-out  duration-300 rounded-2xl"
                        src="/image/img2.jpg"
                        alt="Profile"
                        style={{ objectFit: 'cover', objectPosition: 'center 25%', width: '530px', height: '300px' }}
                    />
                </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 justify-items-center ">
                    <div className="p-6 rounded-lg shadow-lg bg-white transition-colors duration-500">

                        <p className="text-sm text-black transition-colors duration-500">
                        We proudly present two recent examples of our most elegant event productions, each meticulously curated to reflect the unique vision and discerning tastes of our esteemed clientele. These events transcend mere gatherings; they are immersive experiences, carefully crafted narratives brought to life through a symphony of exquisite details.  From the initial consultation, where we delve into the nuances of our clients' desires, to the final, flawless execution, our unwavering commitment to sophisticated design, impeccable planning, and unparalleled attention to detail is evident in every aspect.  These showcases offer a glimpse into our ability to transform ordinary spaces into extraordinary settings, where every element, from the bespoke floral arrangements and custom-designed décor to the carefully curated entertainment and culinary artistry, harmonizes to create an unforgettable experience for all in attendance.  We invite you to explore these examples and discover how GLEM Events INC. can elevate your next event to a realm of unparalleled elegance and sophistication
                        </p>
                  
                    </div>
                </div>

            </div>
         
        </section>
    );
};

export default About;