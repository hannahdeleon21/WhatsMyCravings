import { users, type User, type InsertUser, type Meal } from "@shared/schema";
import { breakfastMeals } from "@shared/data/breakfast";
import { lunchMeals } from "@shared/data/lunch";
import { dinnerMeals } from "@shared/data/dinner";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  // Meal-related methods
  getMealsByCategory(category: string): Promise<Meal[]>;
  getMealById(id: number): Promise<Meal | undefined>;
  searchMeals(query: string): Promise<Meal[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private meals: Map<number, Meal>;
  currentId: number;
  currentMealId: number;

  constructor() {
    this.users = new Map();
    this.meals = new Map();
    this.currentId = 1;
    this.currentMealId = 1;
    
    // Initialize with meal data
    this.initializeMeals();
  }

  private initializeMeals() {
    // Process breakfast meals
    breakfastMeals.forEach(meal => {
      const id = this.currentMealId++;
      this.meals.set(id, { ...meal, id });
    });

    // Process lunch meals
    lunchMeals.forEach(meal => {
      const id = this.currentMealId++;
      this.meals.set(id, { ...meal, id });
    });

    // Process dinner meals
    dinnerMeals.forEach(meal => {
      const id = this.currentMealId++;
      this.meals.set(id, { ...meal, id });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getMealsByCategory(category: string): Promise<Meal[]> {
    return Array.from(this.meals.values()).filter(
      (meal) => meal.category.toLowerCase() === category.toLowerCase()
    );
  }

  async getMealById(id: number): Promise<Meal | undefined> {
    return this.meals.get(id);
  }

  async searchMeals(query: string): Promise<Meal[]> {
    const lowerCaseQuery = query.toLowerCase();
    return Array.from(this.meals.values()).filter(
      (meal) => 
        meal.name.toLowerCase().includes(lowerCaseQuery) || 
        meal.description.toLowerCase().includes(lowerCaseQuery) ||
        meal.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(lowerCaseQuery)
        )
    );
  }
}

export const storage = new MemStorage();
