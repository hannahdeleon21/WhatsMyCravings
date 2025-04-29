import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Meal } from "@shared/schema";
import { motion } from "framer-motion";
import MealImage from "./meal-image";
import { Badge } from "@/components/ui/badge";
import { Clock, Flame, Apple } from "lucide-react";

interface MealCardProps {
  meal: Meal;
  onClick: (meal: Meal) => void;
  index: number;
}

const MealCard: React.FC<MealCardProps> = ({ meal, onClick, index }) => {
  // Calculate a very basic difficulty level based on instructions length
  const getDifficulty = (instructions: string[]): "Easy" | "Medium" | "Advanced" => {
    const totalSteps = instructions.length;
    if (totalSteps <= 5) return "Easy";
    if (totalSteps <= 8) return "Medium";
    return "Advanced";
  };

  // Get difficulty color
  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const difficulty = getDifficulty(meal.instructions);
  const difficultyColor = getDifficultyColor(difficulty);

  // Estimate preparation time based on number of ingredients and instructions
  const getEstimatedTime = (ingredients: string[], instructions: string[]): string => {
    const baseTime = 10; // Base time in minutes
    const timePerIngredient = 1; // Additional minutes per ingredient
    const timePerInstruction = 3; // Additional minutes per instruction step
    
    const total = baseTime + (ingredients.length * timePerIngredient) + (instructions.length * timePerInstruction);
    
    if (total < 30) return "< 30 min";
    if (total < 60) return "30-60 min";
    return "> 60 min";
  };

  const prepTime = getEstimatedTime(meal.ingredients, meal.instructions);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card 
        className="meal-card bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl border border-gray-200 dark:border-gray-700 h-full" 
        onClick={() => onClick(meal)}
      >
        {/* Meal Image */}
        <div className="relative h-48">
          <MealImage 
            mealName={meal.name} 
            category={meal.category} 
            className="w-full h-full" 
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge variant="secondary" className={difficultyColor}>
              {difficulty}
            </Badge>
          </div>
          <div className="absolute top-3 right-3">
            <Badge variant="outline" className="bg-black/60 text-white border-none">
              <Clock className="w-3 h-3 mr-1" />
              {prepTime}
            </Badge>
          </div>
          <div className="absolute bottom-3 left-3 right-3">
            <h3 className="text-lg font-bold text-white drop-shadow-md line-clamp-1">{meal.name}</h3>
          </div>
        </div>

        <CardContent className="p-4">
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2 h-10">{meal.description}</p>
          
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-sm font-semibold">Nutrition Facts</h4>
              <Badge variant="outline" className="bg-tomato-red/10 text-tomato-red border-tomato-red">
                <Flame className="w-3 h-3 mr-1" />{meal.calories}
              </Badge>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="flex flex-col items-center p-2 bg-white dark:bg-gray-800 rounded-md">
                <span className="text-tomato-red font-bold">{meal.protein}g</span>
                <span className="text-gray-500 dark:text-gray-400">Protein</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-white dark:bg-gray-800 rounded-md">
                <span className="text-avocado-green font-bold">{meal.carbs}g</span>
                <span className="text-gray-500 dark:text-gray-400">Carbs</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-white dark:bg-gray-800 rounded-md">
                <span className="text-chocolate-brown font-bold">{meal.fats}g</span>
                <span className="text-gray-500 dark:text-gray-400">Fats</span>
              </div>
            </div>
          </div>
          
          <div className="mt-3 flex justify-between items-center">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Apple className="w-4 h-4 mr-1" />
              <span>{meal.ingredients.length} ingredients</span>
            </div>
            <span className="text-tomato-red text-sm font-medium">View Recipe →</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MealCard;
