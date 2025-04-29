import React from "react";
import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Mail, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-tomato-red mb-4">What's My Cravings?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Discover delicious meals for any time of day with nutritional facts and easy-to-follow recipes.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-tomato-red mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-gray-600 dark:text-gray-400 hover:text-tomato-red dark:hover:text-tomato-red cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/categories">
                  <span className="text-gray-600 dark:text-gray-400 hover:text-tomato-red dark:hover:text-tomato-red cursor-pointer">Menu</span>
                </Link>
              </li>
              <li>
                <Link href="/meals/breakfast">
                  <span className="text-gray-600 dark:text-gray-400 hover:text-tomato-red dark:hover:text-tomato-red cursor-pointer">Breakfast</span>
                </Link>
              </li>
              <li>
                <Link href="/meals/lunch">
                  <span className="text-gray-600 dark:text-gray-400 hover:text-tomato-red dark:hover:text-tomato-red cursor-pointer">Lunch</span>
                </Link>
              </li>
              <li>
                <Link href="/meals/dinner">
                  <span className="text-gray-600 dark:text-gray-400 hover:text-tomato-red dark:hover:text-tomato-red cursor-pointer">Dinner</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-tomato-red mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-tomato-red dark:hover:text-tomato-red">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-tomato-red dark:hover:text-tomato-red">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-tomato-red dark:hover:text-tomato-red">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@whatsmycravings.com" className="text-gray-600 dark:text-gray-400 hover:text-tomato-red dark:hover:text-tomato-red">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
            <span>© {currentYear} What's My Cravings? All rights reserved.</span>
            <span className="mx-2">|</span>
            <span className="flex items-center">Made with <Heart size={14} className="mx-1 text-tomato-red" /> by De Leon, Matnao, Mendoza</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
