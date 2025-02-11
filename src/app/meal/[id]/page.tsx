"use client";
import GoBackButton from "@/app/components/GoBackButton";
import { Video } from "@/app/components/Video";
import { fetchMealDetail } from "@/app/lib/api/mealApi";
import { Meal } from "@/app/types/MealType";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function MealDetail() {
  const [meal, setMeal] = useState<Meal>();
  const { id } = useParams<{ id: string }>();

  const videoId = meal?.strYoutube?.split("v=")[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const tags = meal?.strTags?.split(",");

  const ingredients = [];

  for (let i = 0; i < 20; i++) {
    if (meal) {
      const measure = meal[`strMeasure${i + 1}` as keyof Meal];
      const ingredient = meal[`strIngredient${i + 1}` as keyof Meal];
      if (ingredient) {
        ingredients.push([measure, ingredient]);
      }
    }
  }

  useEffect(() => {
    async function getMeaDetail() {
      const { meals } = await fetchMealDetail(id);

      setMeal(meals[0]);
    }

    getMeaDetail();
  }, [id]);

  console.log(meal);
  return (
    <div className="max-w-5xl mx-auto">
      <div>
        <GoBackButton />
        <h1 className="text-4xl font-semibold my-10">Recipe Details</h1>
      </div>
      <div className="flex gap-4 ">
        <div className="w-[600px] h-[420px] relative rounded-lg overflow-hidden">
          <Image
            src={meal?.strMealThumb || "/hero-banner.png"}
            alt="Description of the image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col justify-start ">
          {" "}
          <ul className="flex items-center gap-2">
            {tags?.map((tag, key) => (
              <li key={key} className="text-xl">
                {tag} {key < tags.length - 1 && <span>|</span>}
              </li>
            ))}
          </ul>
          <h1 className="text-4xl font-semibold mt-2">{meal?.strMeal}</h1>
          <h2 className="text-xl border-b pb-1">{meal?.strCategory}</h2>
          <ol className="flex flex-col flex-grow  whitespace-nowrap pr-4 mt-2">
            {ingredients.map((ing, i) => (
              <li key={i} className="flex gap-2 items-center">
                <p className="font-semibold">{ing[0]}</p> <p>{ing[1]}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <p className="mt-4">
        <span className="font-semibold">Preparing: </span>
        {meal?.strInstructions}
      </p>
      <Video embedUrl={embedUrl} height="500" />
    </div>
  );
}
