"use client";

import React, { useEffect, useState } from "react";
import { fetchDailyMeal } from "../lib/api/mealApi";
import { Meal } from "../types/MealType";
import { Video } from "./Video";

export const DailyMeal = () => {
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  useEffect(() => {
    if (!selectedMeal) {
      async function fetchDailyMovie() {
        const { meals } = await fetchDailyMeal("random.php");
        setSelectedMeal(meals[0]);
      }
      fetchDailyMovie();
    }
  }, [selectedMeal]);

  const videoId = selectedMeal?.strYoutube?.split("v=")[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const tags = selectedMeal?.strTags?.split(",");

  const ingredients = [];

  for (let i = 0; i < 20; i++) {
    if (selectedMeal) {
      const measure = selectedMeal[`strMeasure${i + 1}` as keyof Meal];
      const ingredient = selectedMeal[`strIngredient${i + 1}` as keyof Meal];
      if (ingredient) {
        ingredients.push([measure, ingredient]);
      }
    }
  }

  console.log(ingredients);

  return (
    <div className="max-w-7xl mx-auto  py-10">
      <h1 className="text-white text-4xl text-center font-semibold uppercase">
        Today&apos;s Recipe
      </h1>
      <Video embedUrl={embedUrl} />
      <h3 className="text-lg text-white mt-6">{selectedMeal?.strCategory}</h3>
      <h2 className=" text-3xl font-semibold text-white">
        {selectedMeal?.strMeal}
      </h2>
      <div className="flex items-center gap-4">
        {tags?.map((tag, i) => (
          <div key={i} className="flex gap-4 items-center text-gray-200 mt-1">
            <p>{tag} </p>
            {i < tags.length - 1 && <p>|</p>}
          </div>
        ))}
      </div>
      <div className="flex items-start gap-5 mt-4">
        <div className="text-white border-r">
          <p className="underline text-lg font-semibold  mb-2">Ingredients:</p>
          <div className="w-[250px] ">
            {ingredients.map((ing, i) => (
              <div key={i} className="flex gap-2 items-center">
                <p className="font-semibold">{ing[0]}</p> <p>{ing[1]}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-white">
          <span className="font-semibold">Preparing:</span>{" "}
          {selectedMeal?.strInstructions}
        </p>
      </div>
    </div>
  );
};
