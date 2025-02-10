import Image from "next/image";
import React from "react";
import { Meal } from "../types/MealType";
import Link from "next/link";

export const MealItem = ({ meal }: { meal: Meal }) => {
  return (
    <Link
      href={`/meal/${meal.idMeal}`}
      className="bg-[#a45928] rounded-lg overflow-hidden cursor-pointer hover:bg-[#6e3c21] transition duration-300 hover:scale-105"
    >
      <Image
        className="w-[200px] h-auto object-cover"
        alt="Meal Image"
        width="0"
        height="0"
        sizes="100vw"
        src={meal.strMealThumb}
      />
      <div className="px-4 py-3">
        <p className="text-sm">{meal.strArea}</p>
        <h1 className="text-lg mt-2 font-semibold">{meal.strMeal}</h1>
        <p className="text-sm">{meal.strCategory}</p>
      </div>
    </Link>
  );
};
