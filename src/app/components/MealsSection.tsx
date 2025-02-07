"use client";

import { useState } from "react";
import { MealResponse } from "../types/MealType";
import { AllMealsList } from "./AllMealsList";
import { Order } from "./Order";
import { Filter } from "./Filter";

export const MealsSection = ({ meals }: { meals: MealResponse }) => {
  const [mealsState, setMealsState] = useState<MealResponse>(meals);

  return (
    <div className="max-w-7xl mx-auto border-t ">
      <div className="flex items-center justify-between">
        <h1 className="my-4 text-4xl font-semibold">All Recipes</h1>
        <div className="flex items-center gap-4">
          <Order mealsState={mealsState} setMealsState={setMealsState} />
          <Filter />
        </div>
      </div>
      <AllMealsList meals={mealsState} />
    </div>
  );
};
