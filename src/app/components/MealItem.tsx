import Image from "next/image";
import React from "react";
import { Meal } from "../types/MealType";

export const MealItem = ({ meal }: { meal: Meal }) => {
  return (
    <div className="bg-[#a45928] rounded-lg overflow-hidden cursor-pointer hover:bg-[#6e3c21] transition duration-300 hover:scale-105">
      <Image
        className="object-cover"
        alt="Meal Image"
        width={190}
        height={100}
        src={meal.strMealThumb}
      />
      <div className="px-4 py-3">
        <p className="text-sm">{meal.strArea}</p>
        <h1 className="text-lg mt-2 font-semibold">{meal.strMeal}</h1>
        <p className="text-sm">{meal.strCategory}</p>
      </div>
    </div>
  );
};
