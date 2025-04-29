import React from "react";
import { Link } from "wouter";
import { ThemeToggle } from "./ui/theme-toggle";

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-500">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold text-tomato-red font-poppins">
            What's My Cravings?
          </a>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
