import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";

import logo2 from "./component/dynamologo 3.png";
import RegisterM from "./component/RegisterM";
export default function Nav() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
const title="Sign up"
  const openSignUpModal = () => setIsSignUpModalOpen(true);
  const closeSignUpModal = () => setIsSignUpModalOpen(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
    
    { name: "Login", path: "https://www.app.dynamofleet.com/login" },
    { name: "Sign Up", path: "https://www.app.dynamofleet.com/register" },
  ];
console.log(isMenuOpen)
  const handleMenuItemClick = (path) => {
    if (path.startsWith("http")) {
      window.open(path, "_blank", "noopener noreferrer");
      
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };





  const handleSelectLink = (navButton) => {

    submitTextRecord(`Selected route: ${navButton}-Landing Page`);
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




  return (
   
<div className="sticky top-0 z-[1000]  h-[0px]">
    <Navbar 
    onMenuOpenChange={setIsMenuOpen} 
    isBordered={false}  
    isMenuOpen={isMenuOpen}

  >
      <NavbarContent  >
      <NavbarMenuToggle
  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
  className="sm:hidden dark"
  
/>


        <NavbarBrand className="-ml-26  mr-20 " >
          <img src={logo2} alt="logo2" className="h-12 w-32 mr-1  " />
          {/* <p className="font-bold text-indigo-1200 ">Global<span className="text-green-600 ">Package</span>Tracker</p> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-14" justify="center">
      <NavbarItem>
  <Link 
    className="font-light text-inherit hover:text-blue-600" 
    to="/" 
    onClick={() => handleSelectLink("Home")}
  >
    Home
  </Link>
</NavbarItem>
<NavbarItem>
  <Link 
    className="font-light text-inherit hover:text-blue-600" 
    to="/pricing" 
    onClick={() => handleSelectLink("Pricing")}
  >
    Pricing
  </Link>
</NavbarItem>
<NavbarItem>
  <Link 
    className="font-light text-inherit hover:text-blue-600" 
    to="/contact" 
    onClick={() => handleSelectLink("Contact")}
  >
    Contact
  </Link>
</NavbarItem>

       
      
        <div className="border-l border-gray-300 h-8 mx-1"></div>
        <NavbarItem>
         
          <Link 
    className="font-light text-inherit hover:text-blue-600" 
    to="/learn" 
    onClick={() => handleSelectLink("Learn")}
  >
   Learn more
  </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button color="primary" variant="flat" onPress={() => handleSelectLink("Login")}> <a className="font-light text-inherit hover:text-blue-600 text-blue-600/100" href="https://app.dynamopackage.com/login" target="_blank" rel="noopener noreferrer">Login</a></Button>
         
        </NavbarItem>
     
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
        <NavbarMenuItem
        key={`${item.name}-${index}`}
        onClick={() => {
          handleMenuItemClick(item.path);
          
        }}
        className="hover:text-blue-600 cursor-pointer"
      >
        {item.name === "Sign Up" ? (
          <Button as="a" color="primary" href="https://www.app.dynamofleet.com/register"  target="_blank" rel="noopener noreferrer">
            {item.name}
          </Button>
        ) : (
          <span className="w-full text-lg">{item.name}</span>
        )}
      </NavbarMenuItem>
      
        
        ))}
      </NavbarMenu>
      <RegisterM isOpen={isSignUpModalOpen} onClose={closeSignUpModal} title={title}  borderi={false} colori={"primary"} variant={"ghost"}/>
    </Navbar>
    </div>
  );
}
