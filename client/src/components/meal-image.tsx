import React from 'react';

type MealImageProps = {
  mealName: string;
  category?: string;
  className?: string;
};

// This component displays real food images based on the meal name
const MealImage: React.FC<MealImageProps> = ({ mealName, category = "meal", className = "" }) => {
  // Function to get a specific, consistent image for each meal
  const getMealImageUrl = (name: string, cat: string): string => {
    // Convert to lowercase and replace spaces with hyphens
    const formattedName = name.toLowerCase().replace(/\s+/g, '-');
    
    // For more specific, consistent and higher quality images
    // Adding more specific keywords for food searches
    const specificFoodTerms = {
      // Breakfast items
      "avocado toast": "avocado-toast-healthy-breakfast",
      "french toast": "french-toast-maple-syrup",
      "pancakes": "pancakes-maple-syrup-breakfast",
      "omelette": "cheese-mushroom-omelette",
      "smoothie bowl": "acai-smoothie-bowl-berries",
      "breakfast burrito": "breakfast-burrito-eggs-bacon",
      
      // Lunch items
      "caesar salad": "caesar-salad-chicken-parmesan",
      "quinoa salad": "quinoa-vegetable-salad-healthy",
      "sandwich": "turkey-avocado-sandwich-lunch",
      "sushi": "salmon-avocado-sushi-rolls",
      "pasta salad": "italian-pasta-salad-vegetables",
      "soup": "vegetable-soup-homemade",
      
      // Dinner items
      "salmon": "grilled-salmon-asparagus-lemon",
      "steak": "medium-rare-steak-rosemary",
      "chicken curry": "indian-chicken-curry-spicy",
      "pasta": "italian-pasta-tomato-sauce",
      "pizza": "homemade-margherita-pizza",
      "burger": "gourmet-beef-burger-fries"
    };
    
    // Loop through our specific keywords and check if any match our meal name
    for (const [foodKey, searchTerm] of Object.entries(specificFoodTerms)) {
      if (name.toLowerCase().includes(foodKey)) {
        return `https://source.unsplash.com/featured/?${searchTerm}`;
      }
    }
    
    // Default search if no specific keywords match
    return `https://source.unsplash.com/featured/?${formattedName},${cat},food,recipe,meal`;
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