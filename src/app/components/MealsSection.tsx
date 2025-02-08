"use client";

import { useEffect, useState } from "react";
import { MealResponse } from "../types/MealType";
import { AllMealsList } from "./AllMealsList";
import { Order } from "./Order";
import { Filter } from "./Filter";

export const MealsSection = ({ meals }: { meals: MealResponse }) => {
  const [mealsState, setMealsState] = useState<MealResponse>([]);
  const [categoryFilter, setCategoryFilter] = useState("");

  const onFilter = (filterValue: string) => {
    setCategoryFilter(filterValue);
  };

  useEffect(() => {
    if (categoryFilter === "") {
      setMealsState(meals);
    } else {
      setMealsState(meals);
      setMealsState((prev) =>
        prev.filter((meal) => meal.strCategory.toLowerCase() === categoryFilter)
      );
    }
  }, [categoryFilter, meals]);

  return (
    <section id="all-meals" className="max-w-7xl mx-auto border-t ">
      <div className="flex items-center justify-between">
        <h1 className="my-4 text-4xl font-semibold">All Recipes</h1>
        <div className="flex items-center gap-4">
          <Order mealsState={mealsState} setMealsState={setMealsState} />
          <Filter onFilter={onFilter} />
        </div>
      </div>
      <AllMealsList meals={mealsState} />
    </section>
  );
};
