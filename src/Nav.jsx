

// Nav.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import logo2 from "./component/dynamologo 3.png";
import RegisterM from "./component/RegisterM";
import { motion } from "framer-motion";
export default function Nav() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const title = "Sign up";
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
  const handleSelectLink2 = (navButton) => {
    submitTextRecord(`Login Button on Navebar`);
  };
  const handleSelectLink3 = (navButton) => {
    // submitTextRecord(`Sign-Up Button on Navebar`);
    console.log("sign up was cliked")
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
    <div className="sticky top-0 z-[1000] h-[0px]">
      <Navbar 
        onMenuOpenChange={setIsMenuOpen} 
        isBordered={false}  
        isMenuOpen={isMenuOpen}
        className="bg-black/60 backdrop-blur-md border-b border-white/10"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-white"
          />
         <NavbarBrand className="-ml-26 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center"
      >
        <span className="font-extrabold text-xl tracking-tight">
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Dynamo
          </span>
          <span className="text-white ml-1 font-light">Package</span>
        </span>
      </motion.div>
    </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-14" justify="center">
          {["Home", "Pricing", "Contact"].map((item) => (
            <NavbarItem key={item}>
              <Link 
                className="font-light text-white hover:text-purple-400 transition-colors" 
                to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => handleSelectLink(item)}
              >
                {item}
              </Link>
            </NavbarItem>
          ))}
          
          <div className="border-l border-white/20 h-8 mx-1"></div>
          
          <NavbarItem>
            <Link 
              className="font-light text-white hover:text-purple-400 transition-colors" 
              to="/learn" 
              onClick={() => handleSelectLink("Learn")}
            >
              Learn more
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button 
              color="secondary"
             
              variant="flat" 
    
              onPress={() => handleSelectLink2("Login")}
              className="border border-indigo-600"
            >
              <a 
                className="font-light text-white" 
                href="https://app.dynamopackage.com/login" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Login
              </a>
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-black/95 backdrop-blur-lg">
        {menuItems.map((item, index) => (
  <NavbarMenuItem
    key={`${item.name}-${index}-${item.path}`} // Ensures unique keys
    onClick={() => {
      handleMenuItemClick(item.path);
      if (item.name === "Sign Up") {
        console.log("Sign Up")
        handleSelectLink3("Sign Up");
      }
    }}
    className="hover:text-purple-400 cursor-pointer"
  >
    {item.name === "Sign Up" ? (
      <Button 
        as="a" 
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white"
        href={item.path}  
        target="_blank" 
        rel="noopener noreferrer"
        onPress={() => handleSelectLink3("Sign Up")}
      >
        {item.name}
      </Button>
    ) : (
      <span className="w-full text-lg text-white">{item.name}</span>
    )}
  </NavbarMenuItem>
))}

        
        </NavbarMenu>
        <RegisterM 
          isOpen={isSignUpModalOpen} 
          onClose={closeSignUpModal} 
          title={title}  
          borderi={true} 
          colori={"primary"} 
          variant={"flat"}
        />
      
      </Navbar>
    </div>
  );
}