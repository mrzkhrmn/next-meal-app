import { Meal, MealResponse } from "../types/MealType";
import { MealItem } from "./MealItem";

export const AllMealsList = ({ meals }: { meals: MealResponse }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-4">
      {meals.map((meal: Meal, index: number) => (
        <MealItem meal={meal} key={index} />
      ))}
    </div>
  );
};
