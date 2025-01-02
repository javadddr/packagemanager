import React, { useEffect,useState } from 'react';
import { Card, CardBody, CardFooter, Accordion, AccordionItem,Button } from '@nextui-org/react';
import { MapPin, Package, Truck, Calendar, Clock, User, Tag, DollarSign } from 'lucide-react'; // Changed to lucide-react
import { motion } from 'framer-motion';
import { FaTruck, FaCheckCircle, FaClock } from 'react-icons/fa'; 
import { TbSquareArrowRight } from "react-icons/tb";
import logo from "./dil.png"
import logo1 from "./dil.png"
import logo2 from "./dil.png"
import logo3 from "./dil.png"
import logo4 from "./dil.png"
function Home4() {
  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };


  const capitalizeFirstLetter = (string) => {
    if (typeof string !== 'string') return string;
    return string.split(' ')
                 .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                 .join(' ');
  };

  const finalShipments = [
    {
      _id: "675234293afa70c432359421",
      owner: {
        _id: "674de44b896bd090b4136ea8",
        email: "testjavad@gmail.com",
      },
      archived: false,
      tracking_number: "1ZH574F2A615193884",
      courier_code: "ups",
      delivery_status: "Delivered",
      delivery_date: "2024-12-09T22:19:04.000Z",
      shipping_date: "2024-12-04T22:26:00.000Z",
      label_created_date: "2024-12-04T19:50:04.000Z",
      first_event_time: "2024-12-04T19:50:04.000Z",
      origin: "US",
      destination: "US",
      shipping_info: {
        shipper_address: {
          country: "US",
          state: "FL",
          city: "BOYNTON BEACH",
        },
        recipient_address: {
          country: "US",
          state: "UT",
          city: "BOUNTIFUL",
        },
        weight_courier: null,
        weight_courier_raw: null,
        weight_courier_kg: 0.82,
        weight_courier_lb: 1.8,
        pieces: "1",
      },
      latest_event: "DELIVERED",
      latest_event_time: "2024-12-09T22:19:04.000Z",
      transit_time: 5,
      travel_history: [
        { datetime: "2024-12-09T22:19:04.000Z", status: "DELIVERED", location: "BOUNTIFUL, US", delivery_status: "Delivered" },
        { datetime: "2024-12-09T15:34:46.000Z", status: "Out For Delivery Today", location: "Salt Lake City, US", delivery_status: "Transit" },
        { datetime: "2024-12-09T13:11:59.000Z", status: "Processing at UPS Facility", location: "Salt Lake City, US", delivery_status: "Transit" },
        { datetime: "2024-12-09T01:16:00.000Z", status: "Arrived at Facility", location: "Salt Lake City, US", delivery_status: "Transit" },
        { datetime: "2024-12-09T00:03:00.000Z", status: "Departed from Facility", location: "Salt Lake City, US", delivery_status: "Transit" },
        { datetime: "2024-12-07T16:55:00.000Z", status: "Due to weather, your package is delayed by one business day.", location: null, delivery_status: "Exception" },
        { datetime: "2024-12-07T01:08:00.000Z", status: "Arrived at Facility", location: "Salt Lake City, US", delivery_status: "Transit" },
        { datetime: "2024-12-06T21:43:00.000Z", status: "Departed from Facility", location: "Louisville, US", delivery_status: "Transit" },
        { datetime: "2024-12-06T15:56:00.000Z", status: "Arrived at Facility", location: "Louisville, US", delivery_status: "Transit" },
        { datetime: "2024-12-06T13:23:00.000Z", status: "Departed from Facility", location: "Miami, US", delivery_status: "Transit" },
        { datetime: "2024-12-06T11:03:00.000Z", status: "Departed from Facility", location: "Hialeah, US", delivery_status: "Transit" },
        { datetime: "2024-12-06T11:00:00.000Z", status: "Arrived at Facility", location: "Miami, US", delivery_status: "Transit" },
        { datetime: "2024-12-06T09:30:00.000Z", status: "Arrived at Facility", location: "Miami, US", delivery_status: "Transit" },
        { datetime: "2024-12-06T02:43:00.000Z", status: "Arrived at Facility", location: "Hialeah, US", delivery_status: "Transit" },
        { datetime: "2024-12-06T02:26:00.000Z", status: "Departed from Facility", location: "Miami, US", delivery_status: "Transit" },
        { datetime: "2024-12-05T04:46:00.000Z", status: "Arrived at Facility", location: "Hialeah, US", delivery_status: "Transit" },
        { datetime: "2024-12-05T03:19:00.000Z", status: "Departed from Facility", location: "Riviera Beach, US", delivery_status: "Transit" },
        { datetime: "2024-12-05T01:38:36.000Z", status: "Arrived at Facility", location: "Riviera Beach, US", delivery_status: "Transit" },
        { datetime: "2024-12-04T22:26:00.000Z", status: "Drop-Off", location: "Riviera Beach, US", delivery_status: "Transit" },
        { datetime: "2024-12-04T19:50:04.000Z", status: "Shipper created a label, UPS has not received the package yet.", location: "US", delivery_status: "Created" }
      ],
      service_type: "UPS 2nd Day Air®",
      customer: null,
      shippedBy: null,
      shippedTo: null,
      product: null,
      weight: null,
      costs: null,
      createdAtv2: "2024-12-05T00:00:16.040Z",
      source: "web",
      notes: "",
      additional_field0: "",
      additional_field1: "",
      additional_field2: "",
      was_registered: null,
      first_data_update: "2024-12-05T23:15:53.669Z",
      more_details: "",
      dhl_api_acc: null,
      stop_tracking: false,
      createdAt: "2024-12-05T23:15:53.034Z",
      updatedAt: "2024-12-10T00:07:59.875Z",
      time_metrics: {
        estimated_delivery_date: {
          source: "UPS",
          from: "2024-12-09T00:00:00.000Z",
          to: "2024-12-09T15:19:04.000Z",
        },
        ups_api: true
      }
    }
  ];




  return (
    <div style={{ 
      width: '99vw', // Full viewport width
      height: '100vh', // Full viewport height
      overflow: 'hidden', // Prevent content from overflowing beyond viewport
      background: '#253237',
      display: 'flex', // Enable flexbox
      justifyContent: 'center', // Center horizontally
     
    }}>
       <div className="flex flex-col  w-[80%] gap-4 p-4">
        {finalShipments && finalShipments.length > 0 ? (
          finalShipments.map((shipment, index) => (
            <motion.div 
              key={shipment._id} 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-full"
            >
              <Card className=' border border-gray-400 dark '>
              <CardBody className='dark'>
    <div className="grid grid-cols-[30%_30%_30%_10%] gap-4">
      <div>
        <h3 className=" flex items-center">
          <Package size={20} className="mr-2 text-gray-600 " />{shipment.tracking_number}
        </h3>
        <p className="flex items-center"><Truck size={20} className="mr-2 text-gray-600" /><span className='text-gray-500 mr-1'>Courier:</span> {shipment.courier_code}</p>
        <p className="flex items-center"><Calendar size={20} className="mr-2 text-gray-600" /><span className='text-gray-500 mr-1'>Shipping Date: </span> {formatDate(shipment.shipping_date)}</p>
        <p className="flex items-center"><Calendar size={20} className="mr-2 text-gray-600" /><span className='text-gray-500 mr-1'>Last Update:</span> {formatDate(shipment.latest_event_time)}</p>
      </div>
      <div className="flex flex-col pl-4">
      <p className="flex items-center">
        <User size={20} className="mr-2 text-gray-600" />
        <span className='text-gray-500 mr-1'>ETA:</span> {formatDate(shipment.time_metrics?.estimated_delivery_date?.from) || 
              formatDate(shipment.time_metrics?.estimated_delivery_date?.to) || 
              'No data available'}
      </p>

        <p className="flex items-center"><Clock size={20} className="mr-2 text-gray-600" /><span className='text-gray-500 mr-1'>Transit Time: </span> {shipment.transit_time ? `${shipment.transit_time} days` : 'No data available'}</p>
        <p className="flex items-center"><MapPin size={20} className="mr-2 text-gray-600" /><span className='text-gray-500 mr-1'>Route:</span>  {shipment.origin || 'Not available'}   {shipment.origin ? <TbSquareArrowRight className='ml-1 mr-1' />:""} {shipment.destination || ''}</p>
      </div>
      <div>

        <p className="flex items-center"><User size={20} className="mr-2 text-gray-600" /><span className='text-gray-500 mr-1'>Customer:  </span>{shipment.customer || 'Mr Max'}</p>
        <p className="flex items-center">
          <Tag size={20} className="mr-2 text-gray-600" />
          <span className='text-gray-500 mr-1'>Shipped From: </span>
          {shipment.shipping_info?.shipper_address?.city 
            ? capitalizeFirstLetter(shipment.shipping_info.shipper_address.city) 
            : 'No data available'}
        </p>
        <p className="flex items-center">
          <Tag size={20} className="mr-2 text-gray-600" />
          <span className='text-gray-500 mr-1'>Shipped To: </span>
          {shipment.shipping_info?.recipient_address?.city 
            ? capitalizeFirstLetter(shipment.shipping_info.recipient_address.city) 
            : 'No data available'}
        </p>
      </div>
    
  <div className="w-[40%] flex flex-col justify-center items-center">
  <p className="flex items-center -ml-4 ">{shipment.delivery_status || '-'}</p>
    {shipment.delivery_status === 'Transit' && (
      <img src={logo1} alt="In Transit" className="w-full h-auto" />
    )}
    {shipment.delivery_status === 'Exception' && (
      <img src={logo3} alt="Exception" className="w-full h-auto" />
    )}
    {shipment.delivery_status === 'Delivered' && (
      <img src={logo} alt="Delivered" className="w-full h-auto" />
    )}
    {shipment.delivery_status !== 'Transit' && shipment.delivery_status !== 'Exception' && shipment.delivery_status !== 'Delivered' && (
      <img src={logo2} alt="Other Status" className="w-full h-auto" />
    )}
  </div>
    </div>
  </CardBody>
                <CardFooter className="flex justify-between items-center">
                  <Accordion isCompact defaultExpandedKeys={["1"]} >
                  <AccordionItem
                    key="1"
                      aria-label="Travel History"
                      title="See the travel history"
                
                      className="dark border-1 border-slate-400 pl-2 text-xs rounded-lg shadow-md "
                    >
                {shipment.travel_history && shipment.travel_history.length > 0 ? (
                  <ol className="relative border-l border-gray-300 pl-4">
                    {shipment.travel_history.map((event, eventIndex) => {
                      let statusColor = "text-gray-500";
                      const lowercaseStatus = event.status.toLowerCase();
                      let IconComponent = FaTruck;

                      if (lowercaseStatus.includes('exception') || lowercaseStatus.includes('delay')) {
                        statusColor = "text-red-500";
                      } else if ((lowercaseStatus.includes('out for delivery') || lowercaseStatus.includes('delivered')) 
                      && !lowercaseStatus.includes('will be delivered')) {
                        statusColor = "text-green-500";
                        IconComponent = FaCheckCircle;
                      } else if (lowercaseStatus.includes('arrived') || lowercaseStatus.includes('departed')) {
                        IconComponent = FaClock;
                      }

                      return (
                        <li 
                          key={eventIndex} 
                          className="mb-2 ml-4"
                          style={{ order: -eventIndex }}
                        >
                    <motion.div 
    className="absolute"
    initial={{ y: '100%', scaleY: 0 }}
    animate={(lowercaseStatus.includes('delivered') && !lowercaseStatus.includes('will be delivered')) ? {
      y: '0%',
      scaleY: 1,
      transition: { duration: 1.5, delay: eventIndex * 0.1 }
    } : {
      y: '0%',
      scaleY: 1,
      transition: { duration: 1.5, delay: eventIndex * 0.1 }
    }}
    style={{
      left: '-5px',
      width: '10px',
      height: '100%',
      zIndex: 1
    }}
  >
                        <motion.div 
                          className="rounded-full"
                          style={{
                            width: '10px',
                            height: '10px',
                            transform: 'rotate(45deg) translateY(50%)',
                            backgroundColor: lowercaseStatus.includes('delivered') ? 'green' : (lowercaseStatus.includes('delay') || lowercaseStatus.includes('Exception') ? 'red' : 'blue')
                          }}
                          animate={lowercaseStatus.includes('delivered') ? {
                            opacity: 1,
                            y: '0%'
                          } : lowercaseStatus.includes('Exception') || lowercaseStatus.includes('delay') ? {
                            opacity: 1,
                            x: [-1, 1, -1],
                            transition: { duration: 0.2, repeat: Infinity, repeatType: 'mirror' }
                          } : {
                            opacity: [1, 0, 1],
                            y: ['0%', '100%', '0%'],
                            transition: { duration: 1.5, delay: 0, repeat: Infinity, repeatDelay: 0 }
                          }}
                        />
                        <motion.div 
                          className="bg-green-500" 
                          style={{
                            width: '2px',
                            height: lowercaseStatus.includes('delivered') ? '100%' : '0%',
                            position: 'absolute',
                            top: '10px',
                            left: '4px'
                          }}
                          animate={{ opacity: 1, height: lowercaseStatus.includes('delivered') ? '100%' : '0%' }}
                          transition={{ duration: 1.5, delay: eventIndex * 0.1 }}
                        />
                      </motion.div>
                                  <div className="flex items-center mb-1">
                                    <IconComponent size={20} className={`${statusColor} mr-2`} />
                                    <time className="text-sm font-semibold leading-none text-gray-900">{formatDate(event.datetime)}</time>
                                  </div>
                                  <p className={`text-xs font-normal ${statusColor}`}>{event.status}</p>
                                  <p className="text-xs font-normal text-gray-500">{event.location}</p>
                                </li>
                              );
                            })}
                          </ol>
                        ) : (
                          'No travel history available'
                        )}
                  </AccordionItem>
                  </Accordion>
                  <div className="flex">
                 
     
      </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center w-full -mt-16  min-h-[100vh] ">
        <img src={logo4} alt="No vendors available" className="w-[500px] h-[500px] object-cover " />
        <p className="text-center text-lg text-gray-600">No shipment found. Create your first one or change the filters!</p>
      </div>
        )}
      </div>
    </div>
  )
}

export default Home4
