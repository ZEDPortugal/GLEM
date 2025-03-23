import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaSoundcloud, FaYoutube } from 'react-icons/fa';

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const Home = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Bringing your vision to life, one event at a time.", "Crafting unforgettable moments, effortlessly.", "Your trusted partner for seamless and successful events."];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 100;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta - 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen bg-gradient-to-r from-white to-gray-300 transition-colors text-black font-helvetica"
    >
 


      <div className=" flex items-center p-[2%] text-gray-400 h-full">
        {/* Hidden on mobile */}
        <div className="animate-fade-right animate-once animate-duration-300 hidden md:block items-center hover:text-black">
          <a
            href="#home"
            className="cursor-pointer"
          >
            <FaFacebook
              size={40}
              className="animate-fade animate-once animate-duration-[2000ms] mt-5 rounded-full hover:text-[#1877f2] hover:border-4 hover:border-[#1877f2] ease-in-out duration-200"
            />
          </a>
          <a
            href="#home"
            className="cursor-pointer"
          >
            <AiOutlineLinkedin
              size={40}
              className="animate-fade animate-once animate-duration-[1500ms] mt-5 rounded-full hover:text-[#0077b5] hover:border-4 hover:border-[#0077b5] ease-in-out duration-200"
            />
          </a>
          <a
            href="#home"
            className="cursor-pointer"
          >
            <FaYoutube
              size={40}
              className="animate-fade animate-once animate-duration-[1000ms] mt-5 rounded-full hover:text-[#ff0000] hover:border-4 hover:border-[#ff0000] ease-in-out duration-200"
            />
          </a>
          <a
            href="#home"
            className="cursor-pointer"
          >
            <FaInstagram
              size={40}
              className="animate-fade animate-once animate-duration-[500ms] mt-5 rounded-full hover:text-[#ffdf9e] hover:border-4 hover:border-[#ffdf9e] ease-in-out duration-200"
            />
          </a>
        </div>

        <div className=" p-[4%]">
          {/* Hidden on desktop */}
        {/* Main Header */}
        <h1 className="animate-fade animate-once flex text-[40px] lg:text-[60px] md:text-[60px] font-bold font-michroma
       text-black">
          GLEM Event INC.
        </h1>

        {/* Rotating Text */}
        <h3 className="flex text-[10px] mt-2 mb-20 md:mb-8 lg:text-[20px] md:text-[40px] font-helvetica text-gray-700">
          {text}|
        </h3>

        <a
          href="#wedding-packages"
          className="font-helvetica bg-black text-white hover:bg-transparent border-2 hover:text-black rounded-2xl border-black ease-in-out duration-600 px-10 py-3 mr-2 text-center"
        >
          Packages
        </a>

        <a
          href="#about"
          className="font-helvetica bg-transparent text-black hover:bg-black border-2 hover:text-white rounded-2xl hover:rounded-4xl border-black ease-in-out duration-600 px-6 py-3 text-center"
        >
          About Us
        </a>

       
          {/* Hidden on desktop */}
          <div className="md:hidden flex items-center text-black mt-20 ">
          <a
            href="#home"
            className="cursor-pointer"
          >
            <FaFacebook
              size={40}
              className="animate-fade animate-once animate-duration-[2000ms] mt-5 mr-3 rounded-full hover:text-[#1877f2] hover:border-4 hover:border-[#1877f2] ease-in-out duration-200"
            />
          </a>
          <a
            href="#home"
            className="cursor-pointer"
          >
            <AiOutlineLinkedin
              size={40}
              className="animate-fade animate-once animate-duration-[1500ms] mt-5 mr-3 rounded-full hover:text-[#0077b5] hover:border-4 hover:border-[#0077b5] ease-in-out duration-200"
            />
          </a>
          <a
            href="#home"
            className="cursor-pointer"
          >
            <FaYoutube
              size={40}
              className="animate-fade animate-once animate-duration-[1000ms] mt-5 mr-3 rounded-full hover:text-[#ff0000] hover:border-4 hover:border-[#ff0000] ease-in-out duration-200"
            />
          </a>
          <a
            href="#home"
            className="cursor-pointer"
          >
            <FaInstagram
              size={40}
              className="animate-fade animate-once animate-duration-[500ms] mt-5 rounded-full hover:text-[#ffdf9e] hover:border-4 hover:border-[#ffdf9e] ease-in-out duration-200"
            />
          </a>
          </div>


                
        
        </div>

      </div>
      
    </section>
  );
};

export default Home;