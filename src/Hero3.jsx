import React from "react";
import logo13 from "./component/logo13.png"
import logo10 from "./component/dash.png"
import { BackgroundLines } from "./component/ui/background-lines";
export default function Hero3() {
  return (
    (<BackgroundLines className="relative bg-black flex items-center justify-start w-full flex-col px-4">
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b text-white dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Advanced Analytical  <br /> Dashboard
      </h2>
      <img
    src={logo10}
    style={{
      width: '70%',
      borderRadius: '10px', // Rounded corners
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
    }}
    alt="Custom Logo"
  />
    </BackgroundLines>)
  );
}
