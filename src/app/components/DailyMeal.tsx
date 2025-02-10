"use client";

import React, { useEffect, useState } from "react";
import { fetchDailyMeal } from "../lib/api/mealApi";
import { Meal } from "../types/MealType";
import { Video } from "./Video";

export const DailyMeal = () => {
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  useEffect(() => {
    if (!selectedMeal) {
      async function fetchDailyMealFunc() {
        const lastFetchTime = Number(
          localStorage.getItem("lastFetchTime") || 0
        );
        const currentTime = Date.now();
        const twentyFourHours = 24 * 60 * 60 * 1000;

        if (currentTime - lastFetchTime > twentyFourHours) {
          const { meals } = await fetchDailyMeal();

          localStorage.setItem("lastFetchTime", currentTime.toString());
          localStorage.setItem("cachedMeal", JSON.stringify(meals[0]));
          setSelectedMeal(meals[0]);
        } else {
          const cachedMeal = JSON.parse(
            localStorage.getItem("cachedMeal") || "null"
          );
          setSelectedMeal(cachedMeal);
        }
      }
      fetchDailyMealFunc();
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

  return (
    <div className="max-w-7xl mx-auto  py-10">
      <h1 className="text-white text-4xl text-center font-semibold uppercase">
        <span className="border-b-2 border-[#ffa568]">Today&apos;s</span> Recipe
      </h1>
      <Video embedUrl={embedUrl} />
      <h3 className="text-lg text-white mt-6">{selectedMeal?.strArea}</h3>
      <h2 className=" text-3xl font-semibold text-white">
        {selectedMeal?.strMeal}
      </h2>
      <div className="flex items-center gap-4">
        {tags?.map((tag, i) => (
          <div key={i} className="flex gap-4 items-center ">
            <p>{tag} </p>
            {i < tags.length - 1 && <p>|</p>}
          </div>
        ))}
      </div>
      <div className="flex items-start gap-5 mt-4">
        <div className="text-white border-r">
          <p className="underline text-lg font-semibold  mb-2">Ingredients:</p>
          <ol className="flex flex-col  whitespace-nowrap pr-4">
            {ingredients.map((ing, i) => (
              <li key={i} className="flex gap-2 items-center">
                <p className="font-semibold">{ing[0]}</p> <p>{ing[1]}</p>
              </li>
            ))}
          </ol>
        </div>
        <p className="text-white">
          <span className="font-semibold">Preparing:</span>{" "}
          {selectedMeal?.strInstructions}
        </p>
      </div>
    </div>
  );
};
