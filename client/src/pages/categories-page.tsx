import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, UtensilsCrossed, ChefHat, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CategoryCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
  category: string;
  index: number;
  mealCount: number;
}> = ({ title, description, icon, bgColor, textColor, category, index, mealCount }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
    >
      <Link href={`/meals/${category}`}>
        <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 h-full border-t-4 border-t-tomato-red">
          <div className={`h-52 flex items-center justify-center ${bgColor} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
            <div className="relative z-10">
              {icon}
            </div>
            <Badge className="absolute top-4 right-4 bg-white/90 text-gray-800 hover:bg-white/90">
              {mealCount} meals
            </Badge>
          </div>
          <CardContent className="p-6">
            <h3 className={`text-3xl font-bold mb-3 ${textColor} font-poppins tracking-tight`}>{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
            <div className="flex items-center text-tomato-red font-medium">
              <span>View meals</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

const CategoriesPage: React.FC = () => {
  const categories = [
    {
      title: "Breakfast",
      description: "Start your day right with nutritious and delicious breakfast options.",
      icon: <Coffee className="h-28 w-28 text-chocolate-brown drop-shadow-lg" />,
      bgColor: "bg-bread-beige",
      textColor: "text-chocolate-brown",
      category: "breakfast",
      mealCount: 18,
    },
    {
      title: "Lunch",
      description: "Perfect midday meals to keep you energized throughout the day.",
      icon: <UtensilsCrossed className="h-28 w-28 text-white drop-shadow-lg" />,
      bgColor: "bg-avocado-green",
      textColor: "text-avocado-green",
      category: "lunch",
      mealCount: 15,
    },
    {
      title: "Dinner",
      description: "End your day with satisfying and flavorful dinner recipes.",
      icon: <ChefHat className="h-28 w-28 text-white drop-shadow-lg" />,
      bgColor: "bg-tomato-red",
      textColor: "text-tomato-red",
      category: "dinner",
      mealCount: 12,
    },
  ];

  return (
    <section className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block text-tomato-red text-sm font-medium tracking-wider uppercase mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Explore our menu
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-center font-poppins"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose a Category
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-tomato-red mx-auto mt-4 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.category}
              title={category.title}
              description={category.description}
              icon={category.icon}
              bgColor={category.bgColor}
              textColor={category.textColor}
              category={category.category}
              index={index}
              mealCount={category.mealCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesPage;
