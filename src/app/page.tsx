import HeroSection from "./components/HeroSection";
import { DailyMeal } from "./components/DailyMeal";
import { MealsSection } from "./components/MealsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DailyMeal />
      <MealsSection />
    </div>
  );
}
