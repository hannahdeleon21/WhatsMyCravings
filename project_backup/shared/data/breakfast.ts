import { InsertMeal } from "@shared/schema";

export const breakfastMeals: InsertMeal[] = [
  {
    name: "Avocado Toast",
    description: "Creamy avocado on whole grain toast with a sprinkle of salt and red pepper flakes.",
    category: "breakfast",
    calories: 290,
    protein: 8,
    carbs: 30,
    fats: 15,
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "1/4 tsp sea salt",
      "1/4 tsp red pepper flakes",
      "1 tbsp extra virgin olive oil",
      "1/2 lemon, juiced"
    ],
    instructions: [
      "Toast the bread until golden and firm.",
      "Cut the avocado in half, remove the pit, and scoop the flesh into a bowl.",
      "Mash the avocado with a fork and mix in the lemon juice, salt, and half the olive oil.",
      "Spread the mashed avocado on the toast.",
      "Drizzle with remaining olive oil and sprinkle with red pepper flakes."
    ]
  },
  {
    name: "Greek Yogurt Bowl",
    description: "Creamy Greek yogurt topped with fresh berries, honey, and crunchy granola.",
    category: "breakfast",
    calories: 320,
    protein: 18,
    carbs: 45,
    fats: 8,
    ingredients: [
      "1 cup Greek yogurt",
      "1/2 cup mixed berries (strawberries, blueberries, raspberries)",
      "2 tbsp honey",
      "1/4 cup granola",
      "1 tbsp chia seeds",
      "Fresh mint leaves for garnish"
    ],
    instructions: [
      "Add Greek yogurt to a bowl and smooth the surface.",
      "Top with mixed berries, arranging them attractively.",
      "Drizzle honey over the berries and yogurt.",
      "Sprinkle granola and chia seeds on top.",
      "Garnish with fresh mint leaves.",
      "Serve immediately for the best texture and flavor."
    ]
  },
  {
    name: "Spinach Omelette",
    description: "Fluffy eggs with sautéed spinach, cherry tomatoes, and feta cheese.",
    category: "breakfast",
    calories: 275,
    protein: 21,
    carbs: 6,
    fats: 19,
    ingredients: [
      "3 large eggs",
      "1 cup fresh spinach",
      "6 cherry tomatoes, halved",
      "2 tbsp feta cheese, crumbled",
      "1 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Whisk eggs in a bowl with salt and pepper.",
      "Heat olive oil in a non-stick pan over medium heat.",
      "Add spinach and cherry tomatoes, sauté until spinach wilts.",
      "Pour the eggs over the vegetables.",
      "Cook until the edges set, then use a spatula to lift edges and let uncooked egg flow underneath.",
      "When mostly set, sprinkle feta cheese on top, fold omelette in half.",
      "Cook for another minute, then serve."
    ]
  },
  {
    name: "Overnight Oats",
    description: "A time-saving breakfast prepared the night before with oats, milk, and your favorite toppings.",
    category: "breakfast",
    calories: 350,
    protein: 12,
    carbs: 55,
    fats: 10,
    ingredients: [
      "1/2 cup rolled oats",
      "1/2 cup milk of choice",
      "1/4 cup Greek yogurt",
      "1 tbsp maple syrup",
      "1/2 banana, sliced",
      "1 tbsp nut butter",
      "1 tsp chia seeds"
    ],
    instructions: [
      "In a jar or container, combine oats, milk, yogurt, and maple syrup.",
      "Stir well, cover, and refrigerate overnight.",
      "In the morning, stir the oats and add a splash of milk if needed.",
      "Top with sliced banana, nut butter, and chia seeds.",
      "Enjoy cold or warm for a minute in the microwave."
    ]
  },
  {
    name: "Breakfast Burrito",
    description: "A hearty wrap filled with scrambled eggs, beans, cheese, and vegetables.",
    category: "breakfast",
    calories: 450,
    protein: 22,
    carbs: 48,
    fats: 20,
    ingredients: [
      "1 large flour tortilla",
      "2 eggs, scrambled",
      "1/4 cup black beans, rinsed and drained",
      "1/4 cup shredded cheddar cheese",
      "2 tbsp salsa",
      "1/4 avocado, sliced",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Warm the tortilla in a pan or microwave.",
      "Scramble eggs in a pan until just set.",
      "Heat black beans in a small pan or microwave.",
      "Place eggs in the center of the tortilla.",
      "Add beans, cheese, salsa, and avocado slices.",
      "Season with salt and pepper.",
      "Fold the sides of the tortilla, then roll up tightly.",
      "Optionally, toast the burrito in a pan until golden on all sides."
    ]
  },
  {
    name: "Banana Pancakes",
    description: "Fluffy pancakes made with ripe bananas and a hint of cinnamon.",
    category: "breakfast",
    calories: 380,
    protein: 10,
    carbs: 62,
    fats: 11,
    ingredients: [
      "1 cup all-purpose flour",
      "1 tbsp baking powder",
      "1/4 tsp salt",
      "1 tsp cinnamon",
      "1 tbsp sugar",
      "1 large ripe banana, mashed",
      "1 cup milk",
      "1 egg",
      "2 tbsp melted butter",
      "Maple syrup for serving"
    ],
    instructions: [
      "In a bowl, whisk together flour, baking powder, salt, cinnamon, and sugar.",
      "In another bowl, mash the banana, then mix in milk, egg, and melted butter.",
      "Pour wet ingredients into dry ingredients and stir until just combined.",
      "Heat a non-stick pan or griddle over medium heat.",
      "Scoop 1/4 cup of batter for each pancake.",
      "Cook until bubbles form on top, then flip and cook until golden.",
      "Serve with maple syrup and sliced bananas if desired."
    ]
  },
  {
    name: "Breakfast Smoothie Bowl",
    description: "A thick, nutritious smoothie topped with fruits, nuts, and seeds, eaten with a spoon.",
    category: "breakfast",
    calories: 340,
    protein: 14,
    carbs: 58,
    fats: 9,
    ingredients: [
      "1 frozen banana",
      "1/2 cup frozen berries",
      "1/4 cup Greek yogurt",
      "1/4 cup milk of choice",
      "1 tbsp honey",
      "Toppings: sliced fruits, granola, coconut flakes, chia seeds"
    ],
    instructions: [
      "Blend frozen banana, berries, yogurt, milk, and honey until smooth and thick.",
      "Pour into a bowl.",
      "Arrange toppings artfully on the surface.",
      "Eat immediately with a spoon."
    ]
  },
  {
    name: "Breakfast Quinoa Bowl",
    description: "A protein-rich breakfast alternative to oatmeal, made with quinoa, milk, and toppings.",
    category: "breakfast",
    calories: 310,
    protein: 11,
    carbs: 50,
    fats: 8,
    ingredients: [
      "1/2 cup cooked quinoa",
      "1/2 cup milk of choice",
      "1 tbsp maple syrup or honey",
      "1/4 tsp cinnamon",
      "1/4 cup chopped nuts",
      "1/2 cup mixed berries",
      "1 tsp chia seeds"
    ],
    instructions: [
      "Combine cooked quinoa and milk in a saucepan.",
      "Heat over medium heat until warm and creamy.",
      "Stir in maple syrup and cinnamon.",
      "Transfer to a bowl and top with nuts, berries, and chia seeds."
    ]
  },
  {
    name: "Egg and Vegetable Muffins",
    description: "Portable, protein-packed breakfast muffins filled with eggs and vegetables.",
    category: "breakfast",
    calories: 180,
    protein: 16,
    carbs: 4,
    fats: 12,
    ingredients: [
      "6 large eggs",
      "1/4 cup milk",
      "1/2 cup chopped spinach",
      "1/4 cup diced bell peppers",
      "1/4 cup diced onions",
      "1/4 cup shredded cheddar cheese",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C) and grease a muffin tin.",
      "Whisk eggs and milk in a bowl.",
      "Stir in vegetables, cheese, salt, and pepper.",
      "Pour mixture into muffin cups, filling each about 3/4 full.",
      "Bake for 20-25 minutes until set and lightly golden.",
      "Let cool slightly before removing from tin."
    ]
  },
  {
    name: "Whole Grain Toast with Nut Butter",
    description: "Simple yet nutritious toast topped with protein-rich nut butter and sliced bananas.",
    category: "breakfast",
    calories: 290,
    protein: 10,
    carbs: 35,
    fats: 14,
    ingredients: [
      "2 slices whole grain bread",
      "2 tbsp almond or peanut butter",
      "1 banana, sliced",
      "1 tsp honey",
      "Sprinkle of cinnamon"
    ],
    instructions: [
      "Toast bread until golden and crisp.",
      "Spread nut butter on each slice.",
      "Arrange banana slices on top.",
      "Drizzle with honey and sprinkle with cinnamon."
    ]
  },
  {
    name: "Breakfast Chia Pudding",
    description: "A make-ahead breakfast pudding with chia seeds, milk, and flavorings.",
    category: "breakfast",
    calories: 260,
    protein: 9,
    carbs: 30,
    fats: 13,
    ingredients: [
      "3 tbsp chia seeds",
      "1 cup milk of choice",
      "1 tbsp maple syrup or honey",
      "1/4 tsp vanilla extract",
      "Pinch of salt",
      "Fresh fruits for topping"
    ],
    instructions: [
      "In a jar, combine chia seeds, milk, sweetener, vanilla, and salt.",
      "Stir well and let sit for 5 minutes.",
      "Stir again to break up any clumps, then cover and refrigerate overnight.",
      "In the morning, stir the pudding and add more milk if needed.",
      "Top with fresh fruits and serve."
    ]
  },
  {
    name: "Breakfast Hash",
    description: "A satisfying skillet of diced potatoes, vegetables, and protein.",
    category: "breakfast",
    calories: 380,
    protein: 15,
    carbs: 42,
    fats: 18,
    ingredients: [
      "2 medium potatoes, diced",
      "1/2 bell pepper, diced",
      "1/2 onion, diced",
      "2 oz cooked ham or bacon, diced",
      "2 tbsp olive oil",
      "1 tsp paprika",
      "Salt and pepper to taste",
      "2 eggs (optional)"
    ],
    instructions: [
      "Heat olive oil in a large skillet over medium heat.",
      "Add potatoes and cook for 10 minutes, stirring occasionally.",
      "Add bell pepper and onion, cook for another 5 minutes.",
      "Add ham or bacon, paprika, salt, and pepper, and cook for 3-5 more minutes until everything is golden and crispy.",
      "Optionally, make wells in the hash and crack eggs into them, cover and cook until eggs are set."
    ]
  },
  {
    name: "Breakfast Stuffed Peppers",
    description: "Bell peppers filled with eggs, cheese, and vegetables for a colorful breakfast.",
    category: "breakfast",
    calories: 260,
    protein: 18,
    carbs: 10,
    fats: 16,
    ingredients: [
      "2 bell peppers, halved and seeds removed",
      "4 eggs",
      "1/4 cup shredded cheese",
      "2 tbsp diced onions",
      "2 tbsp diced tomatoes",
      "1 tbsp chopped fresh herbs (parsley, chives, or basil)",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Place pepper halves on a baking sheet.",
      "Crack an egg into each pepper half.",
      "Sprinkle with cheese, onions, tomatoes, herbs, salt, and pepper.",
      "Bake for 15-20 minutes until eggs are set to your liking.",
      "Let cool slightly before serving."
    ]
  },
  {
    name: "Apple Cinnamon Oatmeal",
    description: "Warm, comforting oatmeal with diced apples and cinnamon.",
    category: "breakfast",
    calories: 300,
    protein: 8,
    carbs: 52,
    fats: 7,
    ingredients: [
      "1/2 cup rolled oats",
      "1 cup milk or water",
      "1 apple, diced",
      "1 tsp cinnamon",
      "1 tbsp maple syrup or honey",
      "1 tbsp chopped nuts",
      "Pinch of salt"
    ],
    instructions: [
      "In a saucepan, combine oats, milk or water, half the diced apple, and salt.",
      "Bring to a simmer and cook for 5 minutes, stirring occasionally.",
      "Stir in cinnamon and sweetener.",
      "Transfer to a bowl and top with remaining diced apple and chopped nuts."
    ]
  },
  {
    name: "Breakfast Sandwich",
    description: "A classic morning sandwich with egg, cheese, and optional meat on an English muffin.",
    category: "breakfast",
    calories: 380,
    protein: 20,
    carbs: 32,
    fats: 19,
    ingredients: [
      "1 English muffin, split and toasted",
      "1 egg",
      "1 slice cheese (cheddar, Swiss, or American)",
      "2 slices bacon or 1 sausage patty (optional)",
      "1 slice tomato",
      "Fresh spinach leaves",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Cook bacon or sausage if using.",
      "Fry egg in a small pan, breaking the yolk if desired.",
      "Season with salt and pepper.",
      "Place cheese on the bottom half of the English muffin.",
      "Top with the hot egg to melt the cheese.",
      "Add bacon or sausage if using, then tomato and spinach.",
      "Complete with the top half of the English muffin."
    ]
  },
  {
    name: "Breakfast Parfait",
    description: "Layers of yogurt, granola, and fruit create a visually appealing and nutritious breakfast.",
    category: "breakfast",
    calories: 300,
    protein: 14,
    carbs: 48,
    fats: 7,
    ingredients: [
      "1 cup Greek yogurt",
      "1/4 cup granola",
      "1/2 cup mixed berries",
      "1 tbsp honey",
      "1 tsp chia seeds"
    ],
    instructions: [
      "In a glass or jar, create alternating layers starting with yogurt.",
      "Add a layer of granola, then berries.",
      "Repeat layers ending with berries on top.",
      "Drizzle with honey and sprinkle with chia seeds.",
      "Serve immediately or refrigerate for up to 4 hours (the granola will soften over time)."
    ]
  },
  {
    name: "Smoked Salmon Bagel",
    description: "An elegant breakfast featuring a bagel topped with cream cheese, smoked salmon, and garnishes.",
    category: "breakfast",
    calories: 420,
    protein: 24,
    carbs: 50,
    fats: 15,
    ingredients: [
      "1 bagel, sliced and toasted",
      "2 tbsp cream cheese",
      "2 oz smoked salmon",
      "Thinly sliced red onion",
      "Capers",
      "Fresh dill",
      "Lemon wedge"
    ],
    instructions: [
      "Spread cream cheese on both halves of the toasted bagel.",
      "Layer smoked salmon on top.",
      "Add red onion slices and capers.",
      "Garnish with fresh dill and a squeeze of lemon juice."
    ]
  },
  {
    name: "Breakfast Quesadilla",
    description: "A Mexican-inspired breakfast with eggs, cheese, and vegetables in a folded tortilla.",
    category: "breakfast",
    calories: 380,
    protein: 19,
    carbs: 35,
    fats: 18,
    ingredients: [
      "1 large flour tortilla",
      "2 eggs, scrambled",
      "1/4 cup shredded cheese",
      "2 tbsp diced bell peppers",
      "2 tbsp diced onions",
      "1 tbsp chopped cilantro",
      "Salsa for serving"
    ],
    instructions: [
      "Heat a large skillet over medium heat.",
      "Place tortilla in the skillet.",
      "Sprinkle half the cheese over one half of the tortilla.",
      "Add scrambled eggs, peppers, onions, and cilantro.",
      "Top with remaining cheese and fold tortilla in half.",
      "Cook until golden on both sides and cheese is melted.",
      "Cut into wedges and serve with salsa."
    ]
  },
  {
    name: "Breakfast Bowl with Roasted Vegetables",
    description: "A savory breakfast bowl featuring roasted vegetables, grains, and a protein source.",
    category: "breakfast",
    calories: 340,
    protein: 16,
    carbs: 42,
    fats: 12,
    ingredients: [
      "1/2 cup cooked quinoa or brown rice",
      "1 cup roasted vegetables (sweet potatoes, bell peppers, onions)",
      "1 egg, fried or poached",
      "1/4 avocado, sliced",
      "Hot sauce or salsa",
      "Salt and pepper to taste",
      "Fresh herbs for garnish"
    ],
    instructions: [
      "Place cooked grains in a bowl.",
      "Top with roasted vegetables.",
      "Add fried or poached egg.",
      "Arrange avocado slices on top.",
      "Season with salt and pepper.",
      "Drizzle with hot sauce or salsa and garnish with fresh herbs."
    ]
  },
  {
    name: "Homemade Granola",
    description: "A crunchy mix of oats, nuts, and dried fruits with honey and spices.",
    category: "breakfast",
    calories: 280,
    protein: 7,
    carbs: 38,
    fats: 13,
    ingredients: [
      "2 cups rolled oats",
      "1/2 cup chopped nuts (almonds, walnuts, pecans)",
      "1/4 cup seeds (sunflower, pumpkin)",
      "1/4 cup honey or maple syrup",
      "2 tbsp coconut oil",
      "1 tsp cinnamon",
      "1/4 tsp salt",
      "1/2 cup dried fruits (raisins, cranberries, apricots)"
    ],
    instructions: [
      "Preheat oven to 300°F (150°C).",
      "In a large bowl, mix oats, nuts, and seeds.",
      "In a small saucepan, warm honey and coconut oil until melted.",
      "Pour liquid mixture over dry ingredients and add cinnamon and salt. Mix well.",
      "Spread on a baking sheet and bake for 25-30 minutes, stirring occasionally.",
      "Remove from oven, add dried fruits, and let cool completely.",
      "Store in an airtight container for up to 2 weeks.",
      "Serve with milk or yogurt."
    ]
  }
];
