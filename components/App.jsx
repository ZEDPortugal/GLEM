import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import WeddingPackage from './WeddingPackage';
import Services from './Services';
import Contact from './Contact';

const App = () => {
  return (
    <div className="font-helvetica">
      <Navbar />
      <Home />
      <WeddingPackage />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default App;