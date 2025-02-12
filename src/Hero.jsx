import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@nextui-org/react";
import Nav from './Nav';
import Glob from './Glob';
import bv from "./bv.png"
import Hero4 from './Home4'
import Footer from './Footer';
import Home5 from './Home5';
import Home6 from './Home6';
import Home7 from './Home7';
import Home10 from './Home10';
import  Hero3  from './Hero3';
import ColourfulText from "./ColourfulText"; 
import { FaUsps } from "react-icons/fa";
import { FaUps } from "react-icons/fa";
import { FaDhl } from "react-icons/fa";
import { FaFedex } from "react-icons/fa";
import RegisterM from "./component/RegisterM";
import Hero2 from './Hero2';
const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const rotatingStrings = [
    'Track Live',
    'Manage Inventory',
    'Manage Returns',
    'Manage Customers',
    'Manage Vendors',
    'Manage Products'
  ];
  const title = "Sign up";
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingStrings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const icons = [
    { Component: FaUsps, name: "USPS", size: 70 },  // Adjust size for each icon
    { Component: FaUps, name: "UPS", size: 60 },
    { Component: FaDhl, name: "DHL", size: 105 },
    { Component: FaFedex, name: "FedEx", size: 95 },
    { Component: FaUsps, name: "USPS", size: 70 },  // Adjust size for each icon
    { Component: FaUps, name: "UPS", size: 60 },
    { Component: FaDhl, name: "DHL", size: 105 },
    { Component: FaFedex, name: "FedEx", size: 95 },
    { Component: FaUsps, name: "USPS", size: 70 },  // Adjust size for each icon
    { Component: FaUps, name: "UPS", size: 60 },
    { Component: FaDhl, name: "DHL", size: 105 },
    { Component: FaFedex, name: "FedEx", size: 95 },
    { Component: FaUsps, name: "USPS", size: 70 },  // Adjust size for each icon
    { Component: FaUps, name: "UPS", size: 60 },
    { Component: FaDhl, name: "DHL", size: 105 },
    { Component: FaFedex, name: "FedEx", size: 95 },
    { Component: FaUsps, name: "USPS", size: 70 },  // Adjust size for each icon
    { Component: FaUps, name: "UPS", size: 60 },
    { Component: FaDhl, name: "DHL", size: 105 },
    { Component: FaFedex, name: "FedEx", size: 95 },
  ];
  return (
    <div>
      <Nav/>
    
    <div className="relative min-h-screen bg-black">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
      <motion.div 
        className="absolute right-0 top-0 w-96 h-96 bg-purple-600/20 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ filter: 'blur(120px)' }}
      />
      <motion.div 
        className="absolute left-0 bottom-0 w-96 h-96 bg-blue-600/20 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ filter: 'blur(120px)' }}
      />
      
      <div className="container mx-auto px-4 py-32 pb-0 relative">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Main heading with rotating text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-2xl md:text-4xl font-bold font-pt-sans text-white">
              Track and monitor all of your packages from{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
                +2100 carriers
              </span>
              {' '}worldwide in one place and{' '}<br></br>
              <motion.span
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="inline-block bg-gradient-to-r from-purple-400 pb-2 via-pink-400 to-blue-400 text-transparent bg-clip-text"
              >
                {rotatingStrings[currentText]}
              </motion.span>
            </h1>
          </motion.div>

          <Glob/>

          {/* CTA buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
             <RegisterM 
       wid="w-[200px]"
          title={title}  
          borderi={true} 
          colori={"primary"} 
          variant={"flat"}
        />
      
      <a href="https://calendly.com/globalpackagetracker/demo" className="text-sm font-semibold leading-6 text-gray-900"  onClick={() => { trackAction(' Learn more-Hero')}}>
              
              <Button
              color="warning"
              variant="flat"
              className="shadow-2xl font-bold border border-yellow-600"
              >
              Book a Demo / Meeting 
              </Button>
              </a>
          </motion.div>
   
        </div>
    
        <div className='flex justify-center'>
  <div className="overflow-hidden w-[60%] py-8 -mt-10">
    <motion.div
      className="flex items-center gap-12 whitespace-nowrap"
      animate={{ x: ["0", "-100vw"] }} // Looping the x position
      transition={{
        repeat: Infinity, 
        duration: 30,
        ease: "linear", // Make the animation smooth
      }}
    >
      {icons.map(({ Component, name, size }, index) => (
        <motion.div key={index}>
          <Component aria-label={name} size={size} className="text-white" />
        </motion.div>
      ))}
    </motion.div>
  </div>
</div>


      </div>
    <div className='flex justify-center'>
      <div className=" flex flex-col m-6 p-[2%] max-w-[1200px] justify-center mt-0 pt-0 items-center justify-center relative overflow-hidden  ">
   
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white relative z-2 font-pt-sans mb-5">
      Keep Track of Your   <ColourfulText text="Packages" /> <br /> Every Step of the Way!
      </h1>
      <img src={bv} alt="justi" style={{borderRadius:"15px"}}/>
    </div>
    </div>
    <Hero2/>
    
    <Hero3/>
    <Hero4/>
  
    <Home5/>

    <Home7/>
    {/* <Home10/> */}
    <Home6/>

    
    </div>
   <div>    <Footer/></div>

    </div>
  );
};

export default Hero;