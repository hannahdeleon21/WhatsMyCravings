import React from "react";
import { Link, useLocation } from "wouter";
import { ThemeToggle } from "./ui/theme-toggle";
import { Home, Book, Menu } from "lucide-react";

const Header: React.FC = () => {
  const [location] = useLocation();

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-500">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <span className="text-2xl font-bold text-tomato-red font-poppins cursor-pointer flex items-center">
              <Menu className="mr-2 h-6 w-6" />
              What's My Cravings?
            </span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <Link href="/">
              <span className={`flex items-center cursor-pointer ${location === '/' ? 'text-tomato-red font-semibold' : 'text-gray-600 dark:text-gray-300 hover:text-tomato-red dark:hover:text-tomato-red'}`}>
                <Home className="mr-1 h-4 w-4" />
                Home
              </span>
            </Link>
            <Link href="/categories">
              <span className={`flex items-center cursor-pointer ${location === '/categories' ? 'text-tomato-red font-semibold' : 'text-gray-600 dark:text-gray-300 hover:text-tomato-red dark:hover:text-tomato-red'}`}>
                <Book className="mr-1 h-4 w-4" />
                Menu
              </span>
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
