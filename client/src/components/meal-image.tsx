import React from 'react';

// Import all static meal images
import avocadoToastImg from '../assets/avocado-toast.jpg';
import frenchToastImg from '../assets/french-toast.jpg';
import pancakesImg from '../assets/pancakes.jpg';
import omeletteImg from '../assets/omelette.jpg';
import smoothieBowlImg from '../assets/smoothie-bowl.jpg';
import breakfastBurritoImg from '../assets/breakfast-burrito.jpg';
import caesarSaladImg from '../assets/caesar-salad.jpg';
import quinoaSaladImg from '../assets/quinoa-salad.jpg';
import sandwichImg from '../assets/sandwich.jpg';
import sushiImg from '../assets/sushi.jpg';
import pastaSaladImg from '../assets/pasta-salad.jpg';
import soupImg from '../assets/vegetable-soup.jpg';
import salmonImg from '../assets/grilled-salmon.jpg';
import steakImg from '../assets/steak.jpg';
import chickenCurryImg from '../assets/chicken-curry.jpg';
import pastaImg from '../assets/pasta.jpg';
import pizzaImg from '../assets/pizza.jpg';
import burgerImg from '../assets/burger.jpg';
import breakfastDefaultImg from '../assets/breakfast-default.jpg';
import lunchDefaultImg from "../assets/lunch-default.jpg"
import dinnerDefaultImg from '../assets/dinner-default.jpg';

type MealImageProps = {
  mealName: string;
  category?: string;
  className?: string;
};

// This component displays real food images based on the meal name
const MealImage: React.FC<MealImageProps> = ({ mealName, category = "meal", className = "" }) => {
  // Function to get a specific, consistent image for each meal
  const getMealImageUrl = (name: string, cat: string): string => {
    // Convert to lowercase for matching
    const lowerName = name.toLowerCase();
    
    // Map of meal names to imported image files
    if (lowerName.includes('avocado toast')) {
      return avocadoToastImg;
    } else if (lowerName.includes('french toast')) {
      return frenchToastImg;
    } else if (lowerName.includes('pancakes')) {
      return pancakesImg;
    } else if (lowerName.includes('omelette')) {
      return omeletteImg;
    } else if (lowerName.includes('smoothie bowl')) {
      return smoothieBowlImg;
    } else if (lowerName.includes('breakfast burrito')) {
      return breakfastBurritoImg;
    } else if (lowerName.includes('caesar salad')) {
      return caesarSaladImg;
    } else if (lowerName.includes('quinoa salad')) {
      return quinoaSaladImg;
    } else if (lowerName.includes('sandwich')) {
      return sandwichImg;
    } else if (lowerName.includes('sushi')) {
      return sushiImg;
    } else if (lowerName.includes('pasta salad')) {
      return pastaSaladImg;
    } else if (lowerName.includes('soup')) {
      return soupImg;
    } else if (lowerName.includes('salmon')) {
      return salmonImg;
    } else if (lowerName.includes('steak')) {
      return steakImg;
    } else if (lowerName.includes('chicken curry')) {
      return chickenCurryImg;
    } else if (lowerName.includes('pasta')) {
      return pastaImg;
    } else if (lowerName.includes('pizza')) {
      return pizzaImg;
    } else if (lowerName.includes('burger')) {
      return burgerImg;
    }
    
    // Default category image if no specific keywords match
    if (cat === 'breakfast') return breakfastDefaultImg;
    if (cat === 'lunch') return lunchDefaultImg;
    return dinnerDefaultImg;
  };

  // Generate a consistent fallback color based on the meal name (for loading/error states)
  const getColorFromString = (str: string): string => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    // Generate colors based on category with some variation from the meal name
    const hue = category === 'breakfast' 
      ? 30 + (hash % 30)  // Warm breakfast colors
      : category === 'lunch' 
        ? 120 + (hash % 30)  // Green lunch colors
        : 350 + (hash % 30); // Red dinner colors
    
    const saturation = 70 + (hash % 20);
    const lightness = 40 + (hash % 20);
    
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  // Get first letter of each word of the meal name for fallback display
  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const bgColor = getColorFromString(mealName);
  const initials = getInitials(mealName);
  const imageUrl = getMealImageUrl(mealName, category);

  return (
    <div 
      className={`relative overflow-hidden rounded-lg ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Real image with fallback */}
      <img 
        src={imageUrl}
        alt={`${mealName} - ${category}`}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          // If image fails to load, show the gradient background
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />
      
      {/* Fallback content shown if image fails to load */}
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl opacity-30">
        {initials}
      </div>
      
      {/* Gradient overlay for better text visibility */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
    </div>
  );
};

export default MealImage;