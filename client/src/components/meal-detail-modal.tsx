import React from "react";
import { Meal } from "@shared/schema";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white dark:bg-gray-800 max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-0 top-0"
          >
            <X className="h-5 w-5" />
          </Button>
          <DialogTitle className="text-2xl md:text-3xl font-bold font-poppins">
            {meal.name}
          </DialogTitle>
        </DialogHeader>

        <div className="p-0 md:p-2">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-3">Nutrition Facts</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg text-center">
                <span className="block text-xs text-gray-500 dark:text-gray-400">Calories</span>
                <span className="block text-lg font-semibold text-tomato-red">{meal.calories}</span>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg text-center">
                <span className="block text-xs text-gray-500 dark:text-gray-400">Protein</span>
                <span className="block text-lg font-semibold text-avocado-green">{meal.protein}g</span>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg text-center">
                <span className="block text-xs text-gray-500 dark:text-gray-400">Carbs</span>
                <span className="block text-lg font-semibold text-bread-beige">{meal.carbs}g</span>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg text-center">
                <span className="block text-xs text-gray-500 dark:text-gray-400">Fat</span>
                <span className="block text-lg font-semibold text-chocolate-brown">{meal.fats}g</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-xl mb-3">Ingredients</h3>
            <ul className="list-disc pl-5 space-y-1">
              {meal.ingredients.map((ingredient, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {ingredient}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-3">Cooking Instructions</h3>
            <ol className="list-decimal pl-5 space-y-2">
              {meal.instructions.map((instruction, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  {instruction}
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
