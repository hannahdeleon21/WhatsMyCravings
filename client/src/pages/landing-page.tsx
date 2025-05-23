import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Utensils, Coffee, MoonStar } from "lucide-react";

const LandingPage: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-avocado-green/10 to-bread-beige/20 dark:from-red-600/10 dark:to-gray-800/30 z-0"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto stagger-children">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4 text-red-600 dark:text-red-500 font-poppins"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What's My Cravings?
        </motion.h1>
        
        <motion.div
          className="mb-6 flex justify-center space-x-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-amber-100 text-amber-900 shadow-md">
            <Coffee className="mr-2 h-4 w-4" />
            Breakfast
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-green-100 text-green-900 shadow-md dark:bg-green-200">
            <Utensils className="mr-2 h-4 w-4" />
            Lunch
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-red-100 text-red-900 shadow-md dark:bg-red-200">
            <MoonStar className="mr-2 h-4 w-4" />
            Dinner
          </span>
        </motion.div>
        
        <motion.p 
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover delicious meals for any time of day. Find your next favorite recipe with nutritional facts and easy-to-follow instructions.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/categories">
            <Button 
              size="lg" 
              className="px-8 py-7 bg-gradient-to-r from-green-600 to-red-600 rounded-full text-lg font-semibold transform hover:scale-105 transition-all shadow-lg h-auto text-white group"
            >
              Get Started
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Link href="/meals/breakfast">
            <Button 
              variant="outline"
              size="lg"
              className="px-6 py-6 rounded-full border-2 border-green-600 text-green-700 dark:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 text-lg"
            >
              Browse Meals
            </Button>
          </Link>
        </motion.div>
      </div>
      
      {/* Decorative food icons (hidden on small screens) */}
      <motion.div 
        className="hidden md:block absolute top-20 left-10 text-avocado-green/40 dark:text-avocado-green/20"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Utensils className="h-16 w-16" />
      </motion.div>
      
      <motion.div 
        className="hidden md:block absolute bottom-20 right-10 text-bread-beige/60 dark:text-bread-beige/30"
        initial={{ opacity: 0, rotate: 10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <Coffee className="h-24 w-24" />
      </motion.div>
    </section>
  );
};

export default LandingPage;
