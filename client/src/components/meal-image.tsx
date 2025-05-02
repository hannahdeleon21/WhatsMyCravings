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
import lunchDefaultImg from "../assets/lunch-default.jpg";
import dinnerDefaultImg from '../assets/dinner-default.jpg';
import potatoImg from '../assets/stuffed-sweet-potato.jpg';
import oatmealImg from '../assets/apple-cinnamon-oatmeal.jpg';
import breakfastbowlvegImg from '../assets/breakfast-bowl-with-roasted-veggies.jpg';
import chiapuddingImg from '../assets/breakfast-chia-pudding.jpg';
import breakfasthashImg from '../assets/breakfast-hash.jpg';
import breakfastparfaitImg from '../assets/breakfast-parfait.jpg';
import breakfastquesadillaImg from '../assets/breakfast-quesadilla.jpg';
import breakfastquinoaImg from '../assets/breakfast-quinoa-bowl.jpg';
import breakfastpeppersImg from '../assets/breakfast-stuffed-peppers.jpg';
import eggandvegetableImg from '../assets/egg-and-vegetable-muffins.jpg';
import greekyogurtImg from '../assets/greek-yogurt-bowl.jpg';
import homemadegranolaImg from '../assets/homemade-granola.jpg';
import overnightoatsImg from '../assets/overnight-oats.jpg';
import nutbutterImg from '../assets/whole-grain-toast-with-nut-butter.jpg';
import noodlesaladImg from '../assets/asian-noodle-salad.jpg';
import burritobowlImg from '../assets/Black-Bean-and-Corn-Burrito-Bowl.jpg';
import chickenwrapImg from '../assets/chicken-wrap.jpg';
import chickpeaImg from '../assets/chickpea-and-vegetable-stir-fry.jpg';
import eggsaladImg from '../assets/egg-salad-lettuce-wraps.jpg';
import falafelpitaImg from '../assets/Falafel Pita.jpg';
import paniniImg from '../assets/Grilled Vegetable Panini.jpg';
import hummusImg from '../assets/Hummus and Vegetable Plate.jpg';
import buddhabowlImg from '../assets/Lentil Buddha Bowl.jpg';
import mezzeplateImg from '../assets/Mediterranean Mezze Plate.jpg';
import tunasaladImg from '../assets/Mediterranean Tuna Salad.jpg';
import quinoaImg from '../assets/Roasted Vegetable and Quinoa Salad.jpg';
import mushroomImg from '../assets/Mushroom and Spinach Quesadilla.jpg';
import shrimpImg from '../assets/Shrimp and Avocado Salad.jpg';
import codImg from '../assets/Baked Cod with Herb Crust.jpg';
import beefandbroccoliImg from '../assets/Beef and Broccoli Stir-Fry.jpg';
import beefImg from '../assets/Beef Stir Fry.jpg';
import veggiecurryImg from '../assets/Veggie Chickpea Curry.jpg';
import turkeyImg from '../assets/Turkey Chili.jpg';
import sweetandsourImg from '../assets/Sweet and Sour Tofu.jpg';
import bellpeppersImg from '../assets/Stuffed Bell Peppers.jpg';
import spinachImg from '../assets/Spinach and Ricotta Stuffed Shells.jpg';
import coconutImg from '../assets/Coconut Curry Chicken.jpg';
import eggplantImg from '../assets/Eggplant Parmesan.jpg';
import greekImg from '../assets/Greek Stuffed Chicken.jpg';
import herbImg from '../assets/Herb Roasted Chicken.jpg';
import tilapiaImg from '../assets/Lemon Garlic Tilapia.jpg';
import carbonaraImg from '../assets/Spaghetti Carbonara.jpg';
import mushroomrisottoImg from '../assets/Mushroom Risotto.jpg';
import pestoImg from '../assets/Pesto Baked Chicken.jpg';
import porkImg from '../assets/Pork Tenderloin with Apple Chutney.jpg';
import scampiImg from '../assets/Shrimp Scampi.jpg';


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
    } else if (lowerName.includes('roasted vegetable')) {
      return quinoaImg;
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
    } else if (lowerName.includes('stuffed sweet potato')) {
      return potatoImg;
    } else if (lowerName.includes('apple cinnamon oatmeal')) {
      return oatmealImg;
    } else if (lowerName.includes('breakfast bowl with roasted vegetables')) {
      return breakfastbowlvegImg;
    } else if (lowerName.includes('breakfast chia pudding')) {
        return chiapuddingImg;
    } else if (lowerName.includes('breakfast hash')) {
        return breakfasthashImg;
    } else if (lowerName.includes('parfait')) {
        return breakfastparfaitImg;
    } else if (lowerName.includes('breakfast quinoa bowl')) {
        return breakfastquinoaImg;
    } else if (lowerName.includes('breakfast quesadilla')) {
        return breakfastquesadillaImg;
    } else if (lowerName.includes('breakfast stuffed peppers')) {
        return breakfastpeppersImg;
    } else if (lowerName.includes('egg and vegetable muffins')) {
        return eggandvegetableImg;
    } else if (lowerName.includes('greek yogurt bowl')) {
        return greekyogurtImg;
    } else if (lowerName.includes('homemade granola')) {
        return homemadegranolaImg;
    } else if (lowerName.includes('overnight oats')) {
        return overnightoatsImg;
    } else if (lowerName.includes('whole grain toast with nut butter')) {
        return nutbutterImg;
    } else if (lowerName.includes('asian noodle salad')) {
        return noodlesaladImg;
    } else if (lowerName.includes('black bean and corn burrito bowl')) {
        return burritobowlImg;
    } else if (lowerName.includes('chicken wrap')) {
        return chickenwrapImg;
    } else if (lowerName.includes('chickpea and vegetable stir-fry')) {
        return chickpeaImg;
    } else if (lowerName.includes('egg salad lettuce wraps')) {
        return eggsaladImg;
    } else if (lowerName.includes('falafel pita')) {
        return falafelpitaImg;
    } else if (lowerName.includes('mediterranean tuna salad')) {
        return tunasaladImg;
    } else if (lowerName.includes('grilled vegetable panini')) {
        return paniniImg;
    } else if (lowerName.includes('hummus and vegetable plate')) {
        return hummusImg;
    } else if (lowerName.includes('lentil buddha bowl')) {
        return buddhabowlImg;
    } else if (lowerName.includes('mediterranean mezze plate')) {
        return mezzeplateImg;
    } else if (lowerName.includes('mushroom and spinach quesadilla')) {
        return mushroomImg;
    } else if (lowerName.includes('shrimp and avocado salad')) {
        return shrimpImg;
    } else if (lowerName.includes('baked cod with herb crust')) {
        return codImg;
    } else if (lowerName.includes('beef and broccoli stir-fry')) {
        return beefandbroccoliImg;
    } else if (lowerName.includes('shrimp and avocado salad')) {
        return shrimpImg;
    } else if (lowerName.includes('beef stir fry')) {
        return beefImg;
    } else if (lowerName.includes('veggie chickpea curry')) {
        return veggiecurryImg;
    } else if (lowerName.includes('turkey chili')) {
        return turkeyImg;
    } else if (lowerName.includes('sweet and sour tofu')) {
        return sweetandsourImg;
    } else if (lowerName.includes('stuffed bell peppers')) {
        return bellpeppersImg;
    } else if (lowerName.includes('spinach and ricotta stuffed shells')) {
        return spinachImg;
    } else if (lowerName.includes('coconut curry chicken')) {
        return coconutImg;
    } else if (lowerName.includes('eggplant parmesan')) {
        return eggplantImg;
    } else if (lowerName.includes('greek stuffed chicken')) {
        return greekImg;
    } else if (lowerName.includes('herb roasted chicken')) {
        return herbImg;
    } else if (lowerName.includes('lemon garlic tilapia')) {
        return tilapiaImg;
    } else if (lowerName.includes('mushroom risotto')) {
        return mushroomrisottoImg;
    } else if (lowerName.includes('spaghetti carbonara')) {
        return carbonaraImg;
    } else if (lowerName.includes('pesto baked chicken')) {
        return pestoImg;
    } else if (lowerName.includes('Pork Tenderloin with Apple Chutney')) {
        return porkImg;
    } else if (lowerName.includes('shrimp scampi')) {
        return scampiImg;

      
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