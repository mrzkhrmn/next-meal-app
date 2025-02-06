import { fetchAllMeals } from "../lib/api/mealApi";

export const MealsSection = () => {
  const { meals } = fetchAllMeals();

  console.log(meals);
  return (
    <div className="max-7xl mx-auto">
      <div></div>
    </div>
  );
};
