import { Meal } from "@/app/types/MealType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MealState {
  meal: Meal | null;
  lastFetch: number | null;
}

const initialState: MealState = {
  meal: null,
  lastFetch: null,
};

const mealSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {
    setMeal: (state, action: PayloadAction<Meal>) => {
      state.meal = action.payload;
    },
    setLastFetch: (state, action: PayloadAction<number>) => {
      state.lastFetch = action.payload;
    },
  },
});

export const { setMeal, setLastFetch } = mealSlice.actions;
export default mealSlice.reducer;
