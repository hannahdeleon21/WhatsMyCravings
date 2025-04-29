import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const LandingPage: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-avocado-green/10 to-bread-beige/20 dark:from-tomato-red/10 dark:to-chocolate-brown/30 z-0"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto stagger-children">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 text-tomato-red font-poppins"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What's My Cravings?
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Discover delicious meals for any time of day. Find your next favorite recipe with nutritional facts and easy-to-follow instructions.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/categories">
            <Button 
              size="lg" 
              className="px-8 py-8 bg-tomato-red rounded-full text-lg font-semibold transform hover:scale-105 transition-all shadow-lg h-auto"
            >
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
      
      {/* Decorative food icons (hidden on small screens) */}
      <div className="hidden md:block absolute top-20 left-10 text-avocado-green/40 dark:text-avocado-green/20">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </div>
      <div className="hidden md:block absolute bottom-20 right-10 text-bread-beige/60 dark:text-bread-beige/30">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
    </section>
  );
};

export default LandingPage;
