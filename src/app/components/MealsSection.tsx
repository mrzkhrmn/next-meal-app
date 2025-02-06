"use client";

import { useState } from "react";
import { MealResponse } from "../types/MealType";
import { AllMealsList } from "./AllMealsList";
import { FilterAndOrder } from "./FilterAndOrder";

export const MealsSection = ({ meals }: { meals: MealResponse }) => {
  const [mealsState, setMealsState] = useState<MealResponse>(meals);

  const handleOrder = (orderBy: string) => {
    const sortedMeals = [...mealsState].sort((a, b) => {
      if (orderBy === "name") {
        return a.strMeal.localeCompare(b.strMeal);
      } else if (orderBy === "country") {
        return a.strArea.localeCompare(b.strArea);
      } else if (orderBy === "category") {
        return a.strCategory.localeCompare(b.strCategory);
      } else {
        return 0;
      }
    });
    setMealsState(sortedMeals);
  };
  return (
    <div className="max-w-7xl mx-auto border-t ">
      <div className="flex items-center justify-between">
        <h1 className="my-4 text-4xl font-semibold">All Recipes</h1>
        <FilterAndOrder onOrder={handleOrder} />
      </div>
      <AllMealsList meals={mealsState} />
    </div>
  );
};
