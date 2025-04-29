import React from 'react';

type MealImageProps = {
  mealName: string;
  category?: string;
  className?: string;
};

// This component creates a consistent placeholder image based on the meal name
const MealImage: React.FC<MealImageProps> = ({ mealName, category = "meal", className = "" }) => {
  // Generate a consistent color based on the meal name
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

  // Get first letter of each word of the meal name
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

  return (
    <div 
      className={`relative overflow-hidden rounded-lg ${className}`}
      style={{ 
        backgroundColor: bgColor,
        backgroundImage: `radial-gradient(circle at 30% 70%, rgba(255,255,255,0.2), transparent 40%), 
                           radial-gradient(circle at 70% 30%, rgba(255,255,255,0.2), transparent 25%)`
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl opacity-30">
        {initials}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
    </div>
  );
};

export default MealImage;