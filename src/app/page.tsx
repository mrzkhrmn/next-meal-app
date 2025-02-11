import HeroSection from "./components/HeroSection";
import { DailyMeal } from "./components/DailyMeal";
import { MealsSection } from "./components/MealsSection";
import { fetchAllMeals } from "./lib/api/mealApi";

export default async function Home() {
  const { meals } = await fetchAllMeals();
  console.log(meals);
  return (
    <div>
      <HeroSection />
      <DailyMeal />
      <MealsSection meals={meals} />
    </div>
  );
}
