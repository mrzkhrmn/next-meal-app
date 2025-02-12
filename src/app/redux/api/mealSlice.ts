import { MealResponse } from "@/app/types/MealType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mealsApi = createApi({
  reducerPath: "mealsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5091/api/Meals",
  }),
  endpoints: (builder) => ({
    getAllMeals: builder.query<MealResponse, void>({
      query: () => "/",
    }),
  }),
});

export const { useGetAllMealsQuery } = mealsApi;
