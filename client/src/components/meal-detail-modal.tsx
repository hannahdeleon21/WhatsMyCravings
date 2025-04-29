import React from "react";
import { Meal } from "@shared/schema";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X, Clock, ChefHat, Flame, BarChart3, Apple, BookOpen, Bookmark, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import MealImage from "./meal-image";

interface MealDetailModalProps {
  meal: Meal | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MealDetailModal: React.FC<MealDetailModalProps> = ({
  meal,
  isOpen,
  onClose,
}) => {
  if (!meal) return null;
  
  // Calculate a very basic difficulty level based on instructions length
  const getDifficulty = (instructions: string[]): "Easy" | "Medium" | "Advanced" => {
    const totalSteps = instructions.length;
    if (totalSteps <= 5) return "Easy";
    if (totalSteps <= 8) return "Medium";
    return "Advanced";
  };

  // Estimate preparation time based on number of ingredients and instructions
  const getEstimatedTime = (ingredients: string[], instructions: string[]): number => {
    const baseTime = 10; // Base time in minutes
    const timePerIngredient = 1; // Additional minutes per ingredient
    const timePerInstruction = 3; // Additional minutes per instruction step
    
    return baseTime + (ingredients.length * timePerIngredient) + (instructions.length * timePerInstruction);
  };

  const difficulty = getDifficulty(meal.instructions);
  const prepTimeMinutes = getEstimatedTime(meal.ingredients, meal.instructions);
  
  // Format prep time for display
  const formatPrepTime = (minutes: number): string => {
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins > 0 ? mins + 'm' : ''}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white dark:bg-gray-800 max-w-4xl max-h-[90vh] overflow-y-auto p-0 rounded-xl">
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div>
            <DialogTitle className="text-2xl md:text-3xl font-bold font-poppins">
              {meal.name}
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {meal.category.charAt(0).toUpperCase() + meal.category.slice(1)} Recipe
            </DialogDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Column - Image and Stats */}
            <div className="lg:col-span-2">
              <div className="rounded-xl overflow-hidden mb-6 relative">
                <MealImage 
                  mealName={meal.name} 
                  category={meal.category} 
                  className="w-full h-64 lg:h-80" 
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button variant="outline" size="icon" className="bg-white/80 hover:bg-white dark:bg-gray-900/80 dark:hover:bg-gray-900 h-8 w-8 rounded-full">
                    <Bookmark className="h-4 w-4 text-tomato-red" />
                  </Button>
                  <Button variant="outline" size="icon" className="bg-white/80 hover:bg-white dark:bg-gray-900/80 dark:hover:bg-gray-900 h-8 w-8 rounded-full">
                    <Share2 className="h-4 w-4 text-tomato-red" />
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-3 rounded-lg">
                  <Clock className="h-5 w-5 mb-1 text-tomato-red" />
                  <span className="text-sm font-semibold">{formatPrepTime(prepTimeMinutes)}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Prep Time</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-3 rounded-lg">
                  <ChefHat className="h-5 w-5 mb-1 text-avocado-green" />
                  <span className="text-sm font-semibold">{difficulty}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Difficulty</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-3 rounded-lg">
                  <Apple className="h-5 w-5 mb-1 text-bread-beige" />
                  <span className="text-sm font-semibold">{meal.ingredients.length}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Ingredients</span>
                </div>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-6">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-5 w-5 mr-2 text-tomato-red" />
                  <h3 className="font-semibold">Nutrition Facts</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Calories</span>
                    <span className="font-semibold text-tomato-red">{meal.calories} kcal</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Protein</span>
                    <span className="font-semibold text-avocado-green">{meal.protein}g</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Carbohydrates</span>
                    <span className="font-semibold text-bread-beige">{meal.carbs}g</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Fats</span>
                    <span className="font-semibold text-chocolate-brown">{meal.fats}g</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Recipe Instructions */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Apple className="h-5 w-5 mr-2 text-avocado-green" />
                  <h3 className="font-semibold text-xl">Ingredients</h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {meal.ingredients.map((ingredient, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start"
                    >
                      <div className="min-w-6 h-6 flex items-center justify-center rounded-full bg-avocado-green/10 text-avocado-green mr-3 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{ingredient}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <BookOpen className="h-5 w-5 mr-2 text-tomato-red" />
                  <h3 className="font-semibold text-xl">Cooking Instructions</h3>
                </div>
                <ol className="space-y-4">
                  {meal.instructions.map((instruction, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="flex items-start"
                    >
                      <div className="min-w-8 h-8 flex items-center justify-center rounded-full bg-tomato-red/10 text-tomato-red font-semibold mr-4 mt-0.5">
                        {index + 1}
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg flex-1">
                        <span className="text-gray-700 dark:text-gray-300">{instruction}</span>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
