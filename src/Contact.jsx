import React, { useEffect, useState } from "react";

import { Field, Label } from '@headlessui/react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    if (!first_name || !last_name || !email || !message) {
      return; // Prevent submission if required fields are missing
    }
    
    setIsLoading(true);
  
    const emailData = {
      email: email,
      subject: `Email from ${first_name} ${last_name} (${company || 'No Company'})`,
      message: message,
    };
  
    fetch(`https://api.dynamopackage.com/api/email/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })
      .then((response) => {
        if (response.ok) {
          setIsPopupVisible(true);
          handleOpen("blur"); // Open modal on success
        } else {
          console.error("Failed to send the message");
        }
      })
      .catch((error) => {
        console.error("Error occurred while sending the message:", error);
      })
      .finally(() => {
        setIsLoading(false);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setCompany('');
        setMessage('');
      });
  };
  




  

  useEffect(() => {
    setIsLoaded(true);
  }, []);


  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('blur')

  const backdrops = [ "blur"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop)
    onOpen();
  }


  return (
    <div>
    <Nav/>
    <div className={`isolate bg-black px-6 py-24 sm:py-32 lg:px-8 justify-center relative ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
     
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Contact us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-400">Or directly email us at Contact@dynamopackage.com</p>
        <p className="mt-2 text-lg leading-8 text-gray-400">Our bb response time typically ranges between 30 minutes and 3 hours.</p>
      </div>
      <form  method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-400">First name</label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete="given-name"
                className="block w-full bg-gray-400 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-400">Last name</label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                autoComplete="family-name"
                className="block w-full bg-gray-400 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-400">Company</label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                type="text"
                autoComplete="organization"
                className="block w-full bg-gray-400 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-400">
              Email <span className="text-red-500 text-xl">*</span>
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="email"
                className="block w-full bg-gray-400 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-400">Phone number</label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">Country</label>
           
            
              </div>
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="block w-full bg-gray-400 rounded-md border-0 px-3.5 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-400">
            Message <span className="text-red-500 text-xl">*</span>
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
              className="block w-full bg-gray-400 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            />
          </div>
        </div>

          <Field className="flex gap-x-4 sm:col-span-2">
           
            <Label className="text-sm leading-6 text-gray-400">
            By clicking "Let's talk", you agree to our{' '}
            
              <Link to="/privacy-policy" className="font-semibold text-indigo-600">Privacy Policy</Link>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
        <button
          type="submit"
          className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm ${
            isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500'
          } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : "Let's talk"}
        </button>
        </div>
      </form>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose} className="dark text-gray-300">
  <ModalContent>
    {(onClose) => (
      <>
        <ModalHeader className="flex flex-col gap-1">Thank you!</ModalHeader>
        <ModalBody>
        
          <p>
          We have received your request and will get back to you shortly. Our response time typically ranges from 30 minutes to 3 hours.
          </p>
        
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button>
        </ModalFooter>
      </>
    )}
  </ModalContent>
      </Modal>

    </div>
     <Footer/>
     </div>
  )
}
