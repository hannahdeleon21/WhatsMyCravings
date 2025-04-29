import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ChevronLeft, Search, X, Coffee, UtensilsCrossed, ChefHat } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import MealCard from "@/components/meal-card";
import { Meal } from "@shared/schema";
import { capitalizeFirstLetter } from "@/lib/utils";

interface MealsPageProps {
  category: string;
  openMealModal: (meal: Meal) => void;
}

const MealsPage: React.FC<MealsPageProps> = ({ category, openMealModal }) => {
  const [, navigate] = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");
  const [visibleMeals, setVisibleMeals] = useState(12);
  
  // We keep these states for compatibility with the clear filters button
  const [caloriesRange, setCaloriesRange] = useState([0, 1000]);
  const [proteinRange, setProteinRange] = useState([0, 40]);
  const [carbsRange, setCarbsRange] = useState([0, 80]);
  
  // Get icon for the category
  const getCategoryIcon = () => {
    switch (category) {
      case 'breakfast':
        return <Coffee className="h-6 w-6 text-bread-beige mr-2" />;
      case 'lunch':
        return <UtensilsCrossed className="h-6 w-6 text-avocado-green mr-2" />;
      case 'dinner':
        return <ChefHat className="h-6 w-6 text-red-600 dark:text-red-500 mr-2" />;
      default:
        return null;
    }
  };

  const { data: meals = [], isLoading } = useQuery<Meal[]>({
    queryKey: [`/api/meals/${category}`],
  });
  
  // Calculate max values for filters if meals are loaded
  useEffect(() => {
    if (meals.length > 0) {
      const maxCalories = Math.max(...meals.map(meal => meal.calories));
      const maxProtein = Math.max(...meals.map(meal => meal.protein));
      const maxCarbs = Math.max(...meals.map(meal => meal.carbs));
      
      setCaloriesRange([0, maxCalories]);
      setProteinRange([0, maxProtein]);
      setCarbsRange([0, maxCarbs]);
    }
  }, [meals]);

  // Filter meals by search term and nutrition filters
  const filteredMeals = meals.filter((meal) => {
    const matchesSearch = 
      meal.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      meal.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      meal.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
    return matchesSearch;
  });

  // Sort the filtered meals
  const sortedMeals = [...filteredMeals].sort((a, b) => {
    switch (sortOption) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "calories-asc":
        return a.calories - b.calories;
      case "calories-desc":
        return b.calories - a.calories;
      case "protein-desc":
        return b.protein - a.protein;
      default:
        return 0;
    }
  });

  const displayedMeals = sortedMeals.slice(0, visibleMeals);
  const hasMoreMeals = visibleMeals < sortedMeals.length;

  const loadMoreMeals = () => {
    setVisibleMeals((prev) => prev + 9);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <section className="min-h-screen py-8 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Header with Back button and Category Title */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
              onClick={() => navigate("/categories")}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div>
              <div className="flex items-center">
                {getCategoryIcon()}
                <h2 className="text-3xl md:text-4xl font-bold font-poppins">
                  {capitalizeFirstLetter(category)}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Discover delicious {category} meals for your day
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                <SelectItem value="calories-asc">Calories (Low to High)</SelectItem>
                <SelectItem value="calories-desc">Calories (High to Low)</SelectItem>
                <SelectItem value="protein-desc">Protein (High to Low)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="relative w-full mb-4">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search by meal name, description, or ingredients..."
              className="pl-10 pr-10 bg-white dark:bg-gray-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute right-1 top-1 h-8 w-8 p-0 rounded-full"
                onClick={clearSearch}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          
          {/* Filters removed as requested */}
        </div>
        
        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Showing {displayedMeals.length} of {sortedMeals.length} meals
          </p>
          
          {searchTerm && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Search: {searchTerm}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearSearch}
                className="h-4 w-4 p-0 ml-1"
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
        </div>
        
        {/* Meals Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-96 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : displayedMeals.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedMeals.map((meal, index) => (
                <MealCard
                  key={meal.id}
                  meal={meal}
                  onClick={openMealModal}
                  index={index}
                />
              ))}
            </div>
            
            {hasMoreMeals && (
              <div className="text-center mt-10">
                <Button
                  variant="default"
                  onClick={loadMoreMeals}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold shadow-lg"
                >
                  Load More
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No meals found</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              We couldn't find any {category} meals matching your search. Try adjusting your filters or search term.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setCaloriesRange([0, 1000]);
                setProteinRange([0, 40]);
                setCarbsRange([0, 80]);
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MealsPage;
