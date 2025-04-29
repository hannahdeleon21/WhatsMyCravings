import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to get all meals from a category
  app.get("/api/meals/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const meals = await storage.getMealsByCategory(category);
      
      if (!meals) {
        return res.status(404).json({ message: `No meals found for category: ${category}` });
      }
      
      return res.json(meals);
    } catch (error) {
      console.error("Error fetching meals:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // API endpoint to get a specific meal by ID
  app.get("/api/meals/id/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid meal ID format" });
      }
      
      const meal = await storage.getMealById(id);
      
      if (!meal) {
        return res.status(404).json({ message: `Meal with ID ${id} not found` });
      }
      
      return res.json(meal);
    } catch (error) {
      console.error("Error fetching meal:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // API endpoint to search meals by query
  app.get("/api/meals/search", async (req, res) => {
    try {
      const { query } = req.query;
      
      if (!query || typeof query !== 'string') {
        return res.status(400).json({ message: "Search query is required" });
      }
      
      const meals = await storage.searchMeals(query);
      return res.json(meals);
    } catch (error) {
      console.error("Error searching meals:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
