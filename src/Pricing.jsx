import { CheckIcon } from '@heroicons/react/20/solid';
import React, { useEffect, useState } from "react";
import { Tabs, Tab, Button } from "@nextui-org/react";
import Nav from './Nav';
import RegisterM from './component/RegisterM';
import Footer from './Footer';
const includedFeatures = [
  'Track and monitor your shipments',
  'Manage Your Hubs and Inventory',
  'Manage Returns',
  'Manage Vendors & Customers',
  'Shipment Alerts.',
  'Notify your customers.',
  'Analytical Dashboard',


];

const shipmentPlans = [
  { shipments: 50, price: 24, billing: 'Month' },
  { shipments: 100, price: 39, billing: 'Month' },
  { shipments: 250, price: 79, billing: 'Month' },
  { shipments: 500, price: 119, billing: 'Month' },
  { shipments: 1000, price: 169, billing: 'Month' },
  { shipments: 2500, price: 239, billing: 'Month' },
  { shipments: 5000, price: 424, billing: 'Month' },
  { shipments: 10000, price: 649, billing: 'Month' },
];

const shipmentPlans2 = [
  { shipments: 1000, price: 99, billing: 'Year' },
  { shipments: 5000, price: 399, billing: 'Year' },
  { shipments: 10000, price: 699, billing: 'Year' },
  { shipments: 20000, price: 1199, billing: 'Year' },
  { shipments: 50000, price: 2499, billing: 'Year' },
  { shipments: 100000, price: 3999, billing: 'Year' },
 
];

const onetime = [
  { shipments: 600, price: 0.45, billing: 'onetime' },
  { shipments: 1200, price: 0.40, billing: 'onetime' },
  { shipments: 3000, price: 0.35, billing: 'onetime' },
  { shipments: 6000, price: 0.30, billing: 'onetime' },
  { shipments: 12000, price: 0.25, billing: 'onetime' },
  { shipments: 30000, price: 0.20, billing: 'onetime' },
  { shipments: 60000, price: 0.15, billing: 'onetime' },
  { shipments: 120000, price: 0.10, billing: 'onetime' },
];

export default function Pricing() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedKey, setSelectedKey] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(30000); 
  const [shipmentsInput, setShipmentsInput] = useState('');
  const [matchedPrice, setMatchedPrice] = useState(null);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const colori="danger"
    const openSignUpModal = () => setIsSignUpModalOpen(true);
    const closeSignUpModal = () => setIsSignUpModalOpen(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const title="Register for free"
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (selectedKey) {
      submitTextRecord(`Selected tab: ${selectedKey} -Landing Page/pricing`);
    }
  }, [selectedKey]);
  

  const handleTabChange = (key) => {
    setSelectedKey(key);
  };



  const handleSelectPlan = (shipments) => {
    setSelectedPlan(shipments);
    submitTextRecord(`Selected plan: ${shipments} shipments-Landing Page/pricing`);
  };

  const submitTextRecord = async (text) => {
    const apiUrl = "https://api.dynamopackage.com/api/textrecords";
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit text: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Text recorded successfully:", result);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // Dynamically switch between shipmentPlans (monthly) and shipmentPlans2 (annually)
  const activePlans = selectedKey === "annually" ? shipmentPlans2 : shipmentPlans;

  const handleShipmentsInputChange = (event) => {
    const value = event.target.value;
    setShipmentsInput(value);

    // Find the appropriate plan based on the user input
    const matchingPlan = onetime.find(plan => plan.shipments >= value);
    if (matchingPlan) {
      setMatchedPrice(matchingPlan.price);
    } else {
      setMatchedPrice(null);
    }
  };

  return (
    <div>
      <Nav/>
 
    <div className={`relative bg-gray-900 isolate px-6 pt-0  lg:px-8 ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
      <div className=" py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-0 lg:px-8 bg-gray-900">
          <div className="mx-auto max-w-2xl sm:text-center bg-gray-900">
            <h2 className="text-3xl font-bold tracking-tight mb-7 text-gray-100 sm:text-4xl bg-gray-900">Simple Pricing and Full Access</h2>
            <div class="text-center text-gray-100 bg-gray-900"><strong className='text-lime-200'>All</strong> plans include <strong className='text-lime-200'>complete</strong> access
                                to our platform.<br></br> The only difference in pricing depends on how many shipments you
                                would like to track.</div>
            <p className="mt-6 text-lg leading-8 text-gray-100 bg-gray-900">
        

            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none bg-gray-900">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-100">What does "shipment capacity" mean?</h3>
              <div className="bg-gray-50 p-4 rounded-md shadow-sm bg-gray-900">

  
  <div className="space-y-5 ">
    <div className="flex items-start">
      <span className="bg-gray-300 text-gray-600 font-medium rounded-full w-24 h-9 flex justify-center items-center mr-2 text-xs">1</span>
      <p className="text-gray-600 text-sm">
        <span className="font-medium text-gray-400">Each unique tracking number you monitor counts as one shipment. Once a number is tracked, the duration of delivery, the number of updates requested, or how long you retain it does not impact the count—it still counts as one shipment.</span> 
      </p>
    </div>

    <div className="flex items-start ">
      <span className="bg-gray-300 text-gray-600 font-medium rounded-full w-16 h-10 flex justify-center items-center mr-2 text-xs">2</span>
      <p className="text-gray-600 text-sm">
        <span className="font-medium text-gray-400">All purchased shipment capacities remain valid for 12 months from the purchase date. Any unused capacity after this period will expire and reset to zero.</span> 
      </p>
    </div>


  </div>
</div>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400" />
                    <span className='text-gray-400'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* New Input Section for One-time Plan */}
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl shadow-2xl bg-slate-950 min-h-[550px] py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-start lg:py-16">
                <div className=" mx-9 max-w-sm px-1">
                  <Tabs
                    aria-label="Options"
                    color="secondry"
                    variant="bordered"
                    className="flex justify-center m-3 "
                    selectedKey={selectedKey}
                    onSelectionChange={handleTabChange}
                  >
                    {/* <Tab key="monthly" title="Monthly" /> */}
                    <Tab className='text-gray-100' key="annually" title="On Time Purchase" />
                    <Tab key="ontime" title="Unlimited Tracking" />
                  </Tabs>

                 { (selectedKey === "monthly" || selectedKey === "annually") }
                  {(selectedKey === "monthly" || selectedKey === "annually") && (
                    
                    <div className="grid grid-cols-2 gap-2 mt-20 text-gray-100 ">
                 
                      {activePlans.map((plan) => (
                        <Button
                          key={plan.shipments}
                          radius="sm"
                          variant="ghost"
                          color={selectedPlan === plan.shipments ? "primary" : "warning"}
                          className="p-4"
                          size="lg"
                          style={{ fontSize: 15, width: 170,height:60 }}
                          onClick={() => handleSelectPlan(plan.shipments)}
                        >
                          {plan.shipments} Shipments<br />{plan.price}$ 
                        </Button>
                      ))}


                    </div>
                  )}

                  {/* Input for Shipments and Price Display for One-time Plan */}
                  {selectedKey === "ontime" && (
                    <div className="mt-5  bg-slate-950">
                      <div className="max-w-lg mx-auto text-gray-100  rounded-lg shadow-md p-6 space-y-4 ">
      <div className="text-center ">
        <label className="block text-lg font-semibold text-gray-100 mb-2">
          Track unlimited packages for a fixed rate of $2,499 per month.
        </label>
      </div>
      <p className="text-sm text-gray-400">
        To qualify, you must meet one or both of these two criteria:
      </p>
      <ul className="list-disc pl-5 text-sm text-gray-400">
        <li>Your carriers include FedEx, UPS, USPS, or all three.</li>
        <li>We need to integrate your carrier portal with our app.</li>
      </ul>
    </div>
                     
                    </div>
                  )}
        
             <div className='mt-10 '>
        <RegisterM isOpen={isSignUpModalOpen} onClose={closeSignUpModal} title={title} borderi={false} colori={colori}  variant={"flat"} wid={"w-[300px]"}/>
        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
