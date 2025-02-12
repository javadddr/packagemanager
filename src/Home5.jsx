"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./component/ui/lamp";
import logo55 from "./logo55.png"
export default function Home5() {
  return (
    <div>   
    (<LampContainer>
      
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-20 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl flex justify-center z-10">
    
        <img
    src={logo55}
    style={{
      width: '70%',
      zIndex:"3",
      borderRadius: '10px', // Rounded corners
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
    }}
    alt="Custom Logo"
  />
      </motion.h1>
    </LampContainer>)
    </div>
  );
}
