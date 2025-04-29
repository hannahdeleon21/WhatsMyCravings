import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import LandingPage from "@/pages/landing-page";
import CategoriesPage from "@/pages/categories-page";
import MealsPage from "@/pages/meals-page";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { MealDetailModal } from "@/components/meal-detail-modal";
import { useState, useEffect } from "react";
import { Meal } from "@shared/schema";

// Simple hook to scroll to top when location changes
function useScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
}

function Router() {
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Use the scroll to top hook
  useScrollToTop();

  const openMealModal = (meal: Meal) => {
    setSelectedMeal(meal);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={LandingPage} />
          <Route path="/categories">
            {() => <CategoriesPage />}
          </Route>
          <Route path="/meals/:category">
            {(params: { category: string }) => (
              <MealsPage 
                category={params.category} 
                openMealModal={openMealModal}
              />
            )}
          </Route>
          <Route component={NotFound} />
        </Switch>
        <MealDetailModal 
          meal={selectedMeal} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
