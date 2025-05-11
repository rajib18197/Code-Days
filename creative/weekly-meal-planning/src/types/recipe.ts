export type stateProps = {
  allRecipes: Recipe[];
  weeklyMealPlan: WeeklyMealPlan;
};

export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
};

// export type Weekdays =
//   | "Saturday"
//   | "Sunday"
//   | "Monday"
//   | "Tuesday"
//   | "Wednesday"
//   | "Thursday"
//   | "Friday";

export type AssignedDate = {
  date: Date;
  label: string;
};

export type WeeklyMealPlan = (AssignedDate | null)[];
