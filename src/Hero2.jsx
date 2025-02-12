import React from 'react'
import bv1 from "./bv1.png"
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { FaCheckCircle } from "react-icons/fa";
export default function Hero2() {


  const features = [
    {
      name: 'Shipping Date.',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: FaCheckCircle,
    },
    {
      name: 'Delivery Date.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: FaCheckCircle,
    },
    {
      name: 'Estimated Delivery Date.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: FaCheckCircle,
    },
    {
      name: ' Transit Time.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: FaCheckCircle,
    },
  ]
 
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-12 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-3xl">
            Stay on top of your shipping! track with detailed travel history.
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-300">
            See if your packages are on their way without issues, get notified if they’re stuck in customs, inform your customers about delays, and much more!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <dl className="mt-0 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-green-600" />
                      <span className='text-white'>{feature.name}</span>
                    </dt>{' '}
               
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src={bv1}
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-[27rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

