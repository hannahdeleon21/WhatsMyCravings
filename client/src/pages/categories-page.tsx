import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Clock, Moon } from "lucide-react";

const CategoryCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  category: string;
  index: number;
}> = ({ title, description, icon, bgColor, category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link href={`/meals/${category}`}>
        <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className={`h-48 flex items-center justify-center ${bgColor}`}>
            {icon}
          </div>
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-2 font-poppins">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
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
      icon: <Sun className="h-24 w-24 text-chocolate-brown" />,
      bgColor: "bg-bread-beige",
      category: "breakfast",
    },
    {
      title: "Lunch",
      description: "Perfect midday meals to keep you energized throughout the day.",
      icon: <Clock className="h-24 w-24 text-chocolate-brown" />,
      bgColor: "bg-avocado-green",
      category: "lunch",
    },
    {
      title: "Dinner",
      description: "End your day with satisfying and flavorful dinner recipes.",
      icon: <Moon className="h-24 w-24 text-white" />,
      bgColor: "bg-tomato-red",
      category: "dinner",
    },
  ];

  return (
    <section className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-10 text-center font-poppins"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Choose a Category
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.category}
              title={category.title}
              description={category.description}
              icon={category.icon}
              bgColor={category.bgColor}
              category={category.category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesPage;
