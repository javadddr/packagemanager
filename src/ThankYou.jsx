import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardBody, CardHeader, Button, Progress } from "@nextui-org/react";
import { motion } from "framer-motion";

function ThankYou() {
  const [countdown, setCountdown] = useState(5);
  const location = useLocation();
  const email = location.state?.email || "your email";

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      window.location.href = "https://app.dynamopackage.com/";
    }
  }, [countdown]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
    pulse: { scale: [1, 1.03, 1], transition: { duration: 1.5, repeat: Infinity } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black p-4">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-md">
        <Card className="bg-gray-900/90 backdrop-blur-md border border-indigo-500/20 shadow-xl">
          <CardHeader className="flex justify-center p-6">
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-white"
            >
              Thank You!
            </motion.h1>
          </CardHeader>
          <CardBody className="p-6 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-gray-200 mb-2"
            >
              Congratulations, <span className="text-indigo-400 font-semibold">{email}</span>!
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-md text-gray-300 mb-4"
            >
              Your registration was successful.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-md text-gray-300 mb-6"
            >
              Redirecting in <span className="font-bold text-indigo-400">{countdown}</span> seconds...
            </motion.p>
            <Progress value={(5 - countdown) * 20} color="primary" className="mb-6" />
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" animate="pulse">
              <Button
                color="primary"
                variant="solid"
                size="lg"
                className="w-full bg-indigo-600 hover:bg-indigo-700 shadow-lg"
                onPress={() => (window.location.href = "https://app.dynamopackage.com/")}
              >
                Go to App Now
              </Button>
            </motion.div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}

export default ThankYou;