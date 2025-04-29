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
        <Card className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 h-full border-t-4 ${
          category === 'breakfast' ? 'border-t-amber-500' : 
          category === 'lunch' ? 'border-t-green-500' : 
          'border-t-red-500'
        }`}>
          <div className={`h-52 flex items-center justify-center ${bgColor} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30"></div>
            
            {/* Real food images */}
            <div className="absolute inset-0 w-full h-full opacity-80">
              <img 
                src={`https://source.unsplash.com/featured/?${category},food`}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Dark gradient overlay for better icon visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            
            <div className="relative z-10">
              {icon}
            </div>
            <Badge className="absolute top-4 right-4 bg-white/90 text-gray-800 hover:bg-white/90 z-20">
              {mealCount} meals
            </Badge>
          </div>
          <CardContent className="p-6">
            <h3 className={`text-3xl font-bold mb-3 ${textColor} font-poppins tracking-tight`}>{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
            <div className={`flex items-center font-medium ${
              category === 'breakfast' ? 'text-amber-600 dark:text-amber-400' : 
              category === 'lunch' ? 'text-green-600 dark:text-green-400' : 
              'text-red-600 dark:text-red-400'
            }`}>
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
      icon: <Coffee className="h-28 w-28 text-white drop-shadow-xl bg-amber-500/70 p-6 rounded-full" />,
      bgColor: "bg-amber-100",
      textColor: "text-amber-900 dark:text-amber-100",
      category: "breakfast",
      mealCount: 18,
    },
    {
      title: "Lunch",
      description: "Perfect midday meals to keep you energized throughout the day.",
      icon: <UtensilsCrossed className="h-28 w-28 text-white drop-shadow-xl bg-green-500/70 p-6 rounded-full" />,
      bgColor: "bg-green-100",
      textColor: "text-green-900 dark:text-green-100",
      category: "lunch",
      mealCount: 15,
    },
    {
      title: "Dinner",
      description: "End your day with satisfying and flavorful dinner recipes.",
      icon: <ChefHat className="h-28 w-28 text-white drop-shadow-xl bg-red-500/70 p-6 rounded-full" />,
      bgColor: "bg-red-100",
      textColor: "text-red-900 dark:text-red-100",
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
