import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Meal } from "@shared/schema";
import { motion } from "framer-motion";

interface MealCardProps {
  meal: Meal;
  onClick: (meal: Meal) => void;
  index: number;
}

const MealCard: React.FC<MealCardProps> = ({ meal, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card 
        className="meal-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl animate-card-lift" 
        onClick={() => onClick(meal)}
      >
        <CardContent className="p-5">
          <h3 className="text-xl font-semibold mb-2 font-poppins">{meal.name}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{meal.description}</p>
          
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3">
            <h4 className="text-sm font-semibold mb-2">Nutrition Facts</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-tomato-red rounded-full mr-2"></span>
                <span>{meal.calories} calories</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-avocado-green rounded-full mr-2"></span>
                <span>{meal.protein}g protein</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-bread-beige rounded-full mr-2"></span>
                <span>{meal.carbs}g carbs</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-chocolate-brown rounded-full mr-2"></span>
                <span>{meal.fats}g fats</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MealCard;
