import React, { useEffect, useState } from "react";
import {Button,Card,CardBody} from "@nextui-org/react";
import RegisterM from "./RegisterM";
import Typed from 'typed.js';

export default function Home() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openSignUpModal = () => setIsSignUpModalOpen(true);
  const closeSignUpModal = () => setIsSignUpModalOpen(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
const title="Sign Up Now"
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const options = {
      strings: [' Track Live', 'Manage Invetory','Manage Returns', 'Manage Customers','Manage Vendors','Manage Products'],
      typeSpeed: 180,
      backSpeed: 180,
      loop: true,
    };

    const typed = new Typed('#typed', options);

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);
  return (
  
   
       <div className={`relative   isolate px-6 pt-32 lg:px-8 ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div
          aria-hidden="true"
          className="absolute dark inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden  sm:-top-80 "
        >
         
        </div>
        <div className="mx-auto max-w-4xl py-16 sm:py-20 lg:py-10">
         
          <div className="text-center">
          <h1 className="mx-auto mt-2  text-pretty text-center text-4xl font-medium tracking-tight text-white sm:text-5xl font-roboto mb-6">
        Track and monitor all of your <span className="text-yellow-600">packages</span> from +2000 carriers worldwide in one place and  <br></br> <span id="typed" className="text-blue-400 font-bold font-montserrat"></span>.
      </h1>

      <Card color="primary" className="dark" >
            <CardBody className="flex justify-center items-center text-center text-lg ">
            Track your packages live from shipping to delivery, manage products, and streamline sending and receiving across multiple hubs for your customers or vendors. Monitor when vendors or customers send returns, and easily plan for returned items. Notify vendors and customers during shipments, track inventory levels across hubs, and identify the fastest shipping methods to enhance efficiency.
            </CardBody>
            </Card>
            <div className="mt-10 flex items-center justify-center gap-x-6">

         
            <RegisterM isOpen={isSignUpModalOpen} onClose={closeSignUpModal} title={title} borderi={true} colori={"primary"} variant={"flat"}/>
            
            <a href="https://calendly.com/globalpackagetracker/demo" className="text-sm font-semibold leading-6 text-gray-900"  onClick={() => { trackAction(' Learn more-Hero')}}>
              
            <Button
            color="warning"
            variant="flat"
            className="shadow-2xl font-bold border border-yellow-600"
            >
            Book a Demo / Meeting 
            </Button>
            </a>

            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden  sm:top-[calc(100%-30rem)]"
        >
       
        </div>
   
        
      </div>
  
  )
}
