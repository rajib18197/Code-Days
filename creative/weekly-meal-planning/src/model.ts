import type { stateProps } from "./types/recipe";

export const state: stateProps = {
  allRecipes: [
    {
      id: 1,
      name: "Spaghetti Bolognese",
      ingredients: ["pasta", "ground beef", "tomato sauce"],
      instructions: "Cook pasta. Brown beef. Mix with sauce.",
    },
    {
      id: 2,
      name: "Vegetable Stir Fry",
      ingredients: ["broccoli", "carrots", "soy sauce"],
      instructions: "Cut vegetables. Stir fry with sauce.",
    },
    {
      id: 3,
      name: "Chicken Curry",
      ingredients: ["chicken", "curry paste", "coconut milk"],
      instructions: "Cook chicken. Add curry paste and coconut milk.",
    },
    {
      id: 4,
      name: "Greek Salad",
      ingredients: ["cucumber", "tomato", "feta cheese", "olives"],
      instructions: "Chop vegetables. Mix with feta and olives.",
    },
    {
      id: 5,
      name: "Beef Tacos",
      ingredients: ["ground beef", "taco shells", "lettuce", "cheese"],
      instructions:
        "Brown beef with taco seasoning. Serve in shells with toppings.",
    },
  ],

  weeklyMealPlan: Array.from({ length: 7 }, () => null),
};
