"use client";


import React from "react";
import { CardBody, CardContainer, CardItem } from "./component/ui/3d-card";
import logoee from "./or.png"
import logoee1 from "./or1.png"
import logoee2 from "./or2.png"
import logoee3 from "./or3.png"
export default function Home7() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0  bg-black">
    <CardContainer className="inter-var border border-gray-800 rounded-xl">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-100 dark:text-white">
          Manage your orders
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Manage your orders with the Kanban system—assign them to packages and automatically track their movement through the pipeline!
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={logoee}
            height="1000"
            width="1000"
            className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  
    <CardContainer className="inter-var border border-gray-800 rounded-xl">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-100 dark:text-white">
          Notify Your Venders
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300">
        You can schedule when your vendors send packages to you. Plus, you can chat with them and send shipping labels effortlessly.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={logoee1}
            height="1000"
            width="1000"
            className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var border border-gray-800 rounded-xl">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-100 dark:text-white">
          Leave note for customers
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Ensure every order is fulfilled for each customer, leave comments, and keep your team in sync.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={logoee2}
            height="1000"
            width="1000"
            className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var border border-gray-800 rounded-xl">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-100 dark:text-white">
         Keep track of your inventory
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300">
        You can monitor your inventory, receive notifications when it's time to reorder, and track the movement of goods in real time.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={logoee3}
            height="1000"
            width="1000"
            className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  </div>
  
  );
}
