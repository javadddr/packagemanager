import React, { useRef, useState, useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Home from './component/Home';
import logo1 from "./component/del.png"
import logo3 from "./component/tran.gif"
import logo4 from "./component/deli.gif"
import logo5 from "./component/ste.gif"
import logo10 from "./component/dash.png"
import logo13 from "./component/logo13.png"
import logocal from "./component/cal.png"
import Pricing1 from './Pricing1';
import Footer from './Footer';
import {Button,Card,CardBody} from "@nextui-org/react";
import "./index.css"
import Nav from './Nav';
import Home4 from './component/Home4';
import { motion, AnimatePresence } from "framer-motion";
import Home3 from './component/Home3';
// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

function HomeOne() {
  const parallax = useRef();
  const [currentLogo, setCurrentLogo] = useState(0);
  const RotatingLogos = ({ logos, currentLogo }) => (
    <AnimatePresence>
      <motion.img
        key={logos[currentLogo]}
        src={logos[currentLogo]}
        style={{ width: "15%", marginLeft: "5%" }}
        alt="Rotating Logo"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
      
        transition={{ duration: 1 }}
      />
    </AnimatePresence>
  );
  
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentLogo((prev) => (prev + 1) % logos.length); // Rotate through logos
  }, 4000); // Change every 2 seconds

  return () => clearInterval(interval); // Cleanup on unmount
}, []);
  const logos = [ logo3, logo4, logo5];
  return (

    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      overflow: 'hidden', 
      background: '#253237'
    }}>
      <div className='w=[95%] mr-[14px]'>
      <Nav  />
      </div>
   
     
      <Parallax ref={parallax} pages={7}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer
          offset={0.03}
          speed={0.2}
          style={{
            display: 'flex',
            justifyContent: 'center',
            zIndex: 2,
          }}
        >
          <Home /> {/* Render your Home component */}
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />
         <ParallaxLayer
          offset={2}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer offset={0.3}  speed={-0.09} style={{ pointerEvents: 'none' }}>
          <img src={logo1} style={{ width: '35%', marginLeft: '70%' }} alt="Custom Logo" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.72} speed={0.1} style={{ pointerEvents: "none", zIndex: 2, marginLeft: '23%' }}>
       
          <RotatingLogos logos={logos} currentLogo={currentLogo} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

       


        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        
        </ParallaxLayer>

        <ParallaxLayer
  offset={1}
  speed={0.1}
  onClick={() => parallax.current.scrollTo(2)}
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <div className='font-roboto text-5xl mb-1 text-white'>Advanced Analytical Dashboard</div>
            <Card color="primary" className="dark w-[65%] mb-3" >
              <CardBody className="flex justify-center items-center text-center text-lg  ">
              Gain in-depth insights with a comprehensive analytical dashboard. Monitor key metrics, track trends, and visualize performance in real time. Optimize decision-making with predictive analytics and customized reports tailored to your needs.
              </CardBody>
            </Card>
  <img
    src={logo13}
    style={{
      width: '80%',
      borderRadius: '10px', // Rounded corners
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
    }}
    alt="Custom Logo"
  />
</ParallaxLayer>


     
<ParallaxLayer
  offset={4}
  speed={0.1}
  onClick={() => parallax.current.scrollTo(2)}
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <div className='font-roboto text-5xl mb-1 text-white'>Advanced Analytical Dashboard</div>
            <Card color="primary" className="dark w-[65%] mb-3" >
              <CardBody className="flex justify-center items-center text-center text-lg  ">
              Gain in-depth insights with a comprehensive analytical dashboard. Monitor key metrics, track trends, and visualize performance in real time. Optimize decision-making with predictive analytics and customized reports tailored to your needs.
              </CardBody>
            </Card>
  <img
    src={logo10}
    style={{
      width: '80%',
      borderRadius: '10px', // Rounded corners
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
    }}
    alt="Custom Logo"
  />
</ParallaxLayer>
        <ParallaxLayer
  offset={2}
  speed={-0}
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Optional, to center Home3
  }}
  onClick={() => parallax.current.scrollTo(0)}
>
  <Home3 /> {/* Render your Home3 component here */}
</ParallaxLayer>

<ParallaxLayer
  offset={3}
  speed={0.3}
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Optional, to center Home3
  }}
  onClick={() => parallax.current.scrollTo(0)}
>
  <Home4 /> {/* Render your Home3 component here */}
  
</ParallaxLayer>
<ParallaxLayer
          offset={5.2} // Assuming you want this layer to be at the end, adjust the offset accordingly
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Pricing1 /> {/* Add the Pricing component here within a new ParallaxLayer */}
        </ParallaxLayer>
        <ParallaxLayer
        offset={6.9} // Ensure this is after all content but before the end of the page
        speed={0.0}
        factor={0.1} // Make this layer shorter if you don't want it to take up the full height of a page
        style={{
          display: 'flex',
          alignItems: 'flex-end', // Aligns the footer to the bottom of this layer
          justifyContent: 'center',
          position: 'absolute', // Position it absolutely within the parallax container
          width: '100%',
          bottom: 0 // Stick it to the bottom
        }}
      >
        <Footer />
      </ParallaxLayer>
      </Parallax>

      </div>
 
 
  );
}

export default HomeOne;