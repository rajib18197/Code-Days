// Weekly Meal Planner Implementation

// Sample recipes data - in a real app, this would come from your database
const sampleRecipes = [
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
];

// Initialize meal plan - a map of day to recipe ID
let mealPlan = {
  Monday: null,
  Tuesday: null,
  Wednesday: null,
  Thursday: null,
  Friday: null,
  Saturday: null,
  Sunday: null,
};

// DOM Elements
let recipeList;
let mealCalendar;
let menuBarPlanSummary;

// Initialize the application
function initMealPlanner() {
  // Create UI elements
  createMealPlannerUI();

  // Render recipes and calendar
  renderRecipes();
  renderCalendar();
  updateMenuBarSummary();

  // Add event listener for showing/hiding the meal plan summary in menu bar
  const menuBarToggle = document.getElementById("menu-bar-toggle");
  if (menuBarToggle) {
    menuBarToggle.addEventListener("click", toggleMenuBarSummary);
  }
}

// Create the base UI elements for the meal planner
function createMealPlannerUI() {
  // Main container
  const container = document.createElement("div");
  container.classList.add("meal-planner-container");

  // Recipe list section
  const recipesSection = document.createElement("div");
  recipesSection.classList.add("recipes-section");
  recipesSection.innerHTML = `
      <h2>Recipes</h2>
      <div id="recipe-list" class="recipe-list"></div>
    `;

  // Calendar section
  const calendarSection = document.createElement("div");
  calendarSection.classList.add("calendar-section");
  calendarSection.innerHTML = `
      <h2>Weekly Meal Plan</h2>
      <div id="meal-calendar" class="meal-calendar"></div>
    `;

  // Menu bar for meal plan summary
  const menuBar = document.createElement("div");
  menuBar.classList.add("menu-bar");
  menuBar.innerHTML = `
      <button id="menu-bar-toggle">Meal Plan ▼</button>
      <div id="menu-bar-plan-summary" class="menu-bar-plan-summary hidden"></div>
    `;

  // Append to document
  container.appendChild(recipesSection);
  container.appendChild(calendarSection);
  document.body.appendChild(menuBar);
  document.body.appendChild(container);

  // Get references to elements
  recipeList = document.getElementById("recipe-list");
  mealCalendar = document.getElementById("meal-calendar");
  menuBarPlanSummary = document.getElementById("menu-bar-plan-summary");

  // Add stylesheet
  addStyles();
}

// Render the recipe list with dropdown menus
function renderRecipes() {
  recipeList.innerHTML = "";

  sampleRecipes.forEach((recipe) => {
    const recipeElement = document.createElement("div");
    recipeElement.classList.add("recipe-item");

    // Create dropdown for day selection
    const dropdown = createDayDropdown(recipe.id);

    // Recipe content
    recipeElement.innerHTML = `
        <h3>${recipe.name}</h3>
        <div class="recipe-details">
          <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
          <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        </div>
        <div class="day-dropdown-container">
          <label>Assign to: </label>
        </div>
      `;

    // Append dropdown
    recipeElement
      .querySelector(".day-dropdown-container")
      .appendChild(dropdown);

    // Add to recipe list
    recipeList.appendChild(recipeElement);
  });
}

// Create dropdown menu for day selection
function createDayDropdown(recipeId) {
  const dropdown = document.createElement("select");

  // Add default option
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Select day...";
  dropdown.appendChild(defaultOption);

  // Add days of the week
  Object.keys(mealPlan).forEach((day) => {
    const option = document.createElement("option");
    option.value = day;
    option.textContent = day;

    // Select this option if the recipe is already assigned to this day
    if (mealPlan[day] === recipeId) {
      option.selected = true;
    }

    dropdown.appendChild(option);
  });

  // Add event listener for changes
  dropdown.addEventListener("change", (e) => {
    const selectedDay = e.target.value;

    // First, remove this recipe from any day it might be assigned to
    Object.keys(mealPlan).forEach((day) => {
      if (mealPlan[day] === recipeId) {
        mealPlan[day] = null;
      }
    });

    // Then assign to the selected day
    if (selectedDay) {
      mealPlan[selectedDay] = recipeId;
    }

    // Update the UI
    renderCalendar();
    updateMenuBarSummary();
    renderRecipes(); // Re-render recipes to update dropdowns
  });

  return dropdown;
}

// Render the calendar view
function renderCalendar() {
  mealCalendar.innerHTML = "";

  // Create a card for each day
  Object.keys(mealPlan).forEach((day) => {
    const dayCard = document.createElement("div");
    dayCard.classList.add("day-card");

    // Get recipe for this day
    const recipeId = mealPlan[day];
    const recipe = recipeId
      ? sampleRecipes.find((r) => r.id === recipeId)
      : null;

    // Day card content
    dayCard.innerHTML = `
        <h3>${day}</h3>
        <div class="day-meal">
          ${
            recipe
              ? `<p>${recipe.name}</p>`
              : '<p class="no-meal">No meal planned</p>'
          }
        </div>
      `;

    // Add remove button if a meal is assigned
    if (recipe) {
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-meal-btn");
      removeButton.addEventListener("click", () => {
        mealPlan[day] = null;
        renderCalendar();
        updateMenuBarSummary();
        renderRecipes(); // Update dropdowns
      });

      dayCard.querySelector(".day-meal").appendChild(removeButton);
    }

    mealCalendar.appendChild(dayCard);
  });
}

// Update the meal plan summary in the menu bar
function updateMenuBarSummary() {
  menuBarPlanSummary.innerHTML = "";

  const planList = document.createElement("ul");

  Object.keys(mealPlan).forEach((day) => {
    const recipeId = mealPlan[day];
    const recipe = recipeId
      ? sampleRecipes.find((r) => r.id === recipeId)
      : null;

    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${day}:</strong> ${
      recipe ? recipe.name : "No meal planned"
    }`;

    planList.appendChild(listItem);
  });

  menuBarPlanSummary.appendChild(planList);
}

// Toggle the visibility of the meal plan summary in the menu bar
function toggleMenuBarSummary() {
  const menuBarToggle = document.getElementById("menu-bar-toggle");

  if (menuBarPlanSummary.classList.contains("hidden")) {
    menuBarPlanSummary.classList.remove("hidden");
    menuBarToggle.textContent = "Meal Plan ▲";
  } else {
    menuBarPlanSummary.classList.add("hidden");
    menuBarToggle.textContent = "Meal Plan ▼";
  }
}

// Add CSS styles for the meal planner
function addStyles() {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
      .meal-planner-container {
        display: flex;
        gap: 20px;
        margin-top: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }
      
      .recipes-section, .calendar-section {
        flex: 1;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        background-color: #fff;
      }
      
      .recipe-list {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      
      .recipe-item {
        padding: 15px;
        border-radius: 5px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        background-color: #f9f9f9;
      }
      
      .recipe-item h3 {
        margin-top: 0;
        color: #333;
      }
      
      .day-dropdown-container {
        margin-top: 10px;
      }
      
      .day-dropdown-container select {
        padding: 5px;
        border-radius: 4px;
        border: 1px solid #ddd;
      }
      
      .meal-calendar {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 15px;
      }
      
      .day-card {
        padding: 15px;
        border-radius: 5px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        background-color: #f0f8ff;
        min-height: 100px;
      }
      
      .day-card h3 {
        margin-top: 0;
        color: #333;
        border-bottom: 1px solid #ddd;
        padding-bottom: 5px;
      }
      
      .no-meal {
        color: #999;
        font-style: italic;
      }
      
      .remove-meal-btn {
        background-color: #ff6b6b;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 3px 8px;
        font-size: 12px;
        cursor: pointer;
        margin-top: 5px;
      }
      
      .menu-bar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: #333;
        color: white;
        padding: 10px;
        z-index: 100;
      }
      
      #menu-bar-toggle {
        background-color: transparent;
        color: white;
        border: 1px solid white;
        border-radius: 4px;
        padding: 5px 10px;
        cursor: pointer;
      }
      
      .menu-bar-plan-summary {
        background-color: #444;
        padding: 15px;
        border-radius: 0 0 8px 8px;
        margin-top: 5px;
      }
      
      .menu-bar-plan-summary ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }
      
      .menu-bar-plan-summary li {
        padding: 5px 0;
        border-bottom: 1px solid #555;
      }
      
      .menu-bar-plan-summary li:last-child {
        border-bottom: none;
      }
      
      .hidden {
        display: none;
      }
      
      body {
        margin-top: 60px;
        font-family: Arial, sans-serif;
        background-color: #f5f5f5;
      }
    `;

  document.head.appendChild(styleSheet);
}

// Initialize the meal planner when the page loads
document.addEventListener("DOMContentLoaded", initMealPlanner);
