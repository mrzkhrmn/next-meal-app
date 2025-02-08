import { MealResponse } from "../types/MealType";

interface OrderProps {
  mealsState: MealResponse;
  setMealsState: React.Dispatch<React.SetStateAction<MealResponse>>;
}

export const Order = ({ mealsState, setMealsState }: OrderProps) => {
  const handleOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const orderBy = e.target.value;

    const sortedMeals = [...mealsState].sort((a, b) => {
      if (orderBy === "name") {
        return a.strMeal.localeCompare(b.strMeal);
      } else if (orderBy === "country") {
        return a.strArea.localeCompare(b.strArea);
      } else if (orderBy === "category") {
        return a.strCategory.localeCompare(b.strCategory);
      } else {
        return 0;
      }
    });
    setMealsState(sortedMeals);
  };

  return (
    <select
      name="orderBy"
      id="orderBy"
      className="bg-transparent border border-white px-4 py-2 rounded-xl outline-none"
      onChange={handleOrder}
    >
      <option value="" className="text-black">
        Order By
      </option>
      <option value="name" className="text-black">
        Name
      </option>
      <option value="country" className="text-black">
        Country
      </option>
      <option value="category" className="text-black">
        Category
      </option>
    </select>
  );
};
