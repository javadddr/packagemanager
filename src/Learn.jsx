import React from 'react';
import Nav from "./Nav";
import Footer from './Footer';  // Importing Footer component
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
function Learn() {
  return (
    <div>
    <Nav/>
        <div className="flex flex-col justify-center items-center pt-20 space-x-4">
        <Card className="py-4 mt-5 mb-5 w-[350px] md:w-[800px] border border-gray-300 rounded-lg shadow-lx">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">All in One</p>
        <small className="text-default-500">Advanced package tracking software</small>
        <h4 className="font-bold text-large">Stay ahead with DynamoPackage</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
      <iframe 
        className=" aspect-video " 
        src="https://www.youtube.com/embed/DZtos_TwQ34" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
      </CardBody>
    </Card>
    <Card className="py-4 mt-5 mb-5 w-[350px] md:w-[800px] border border-gray-300 rounded-lg shadow-lx">

      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Easy to use</p>
        <small className="text-default-500">Monitor every aspect of your package</small>
        <h4 className="font-bold text-large">Seamlessly track your packages, maage vendors,hubs and customers.</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
      <iframe 
        className=" aspect-video " 
        src="https://www.youtube.com/embed/rNToLmmxmsQ" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
      </CardBody>
    </Card>
    </div>
    <Footer/>
    </div>
  );
}

export default Learn;
