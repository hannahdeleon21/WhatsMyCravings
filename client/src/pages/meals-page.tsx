import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ChevronLeft, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

  const { data: meals = [], isLoading } = useQuery<Meal[]>({
    queryKey: [`/api/meals/${category}`],
  });

  const filteredMeals = meals.filter((meal) => 
    meal.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    meal.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    setVisibleMeals((prev) => prev + 12);
  };

  return (
    <section className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center mb-8">
          <Button
            variant="outline"
            size="icon"
            className="mr-4 p-2 rounded-full"
            onClick={() => navigate("/categories")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">
            {capitalizeFirstLetter(category)}
          </h2>
        </div>
        
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {displayedMeals.length} of {sortedMeals.length} meals
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* Search Bar */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search meals..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Sort Dropdown */}
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-full sm:w-[200px]">
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
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : (
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
                  className="px-6 py-3 bg-tomato-red rounded-full hover:bg-opacity-90 transition-colors shadow-md"
                >
                  Load More
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default MealsPage;
