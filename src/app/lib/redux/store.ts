import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import mealReducer from "./features/mealSlice";
import { persistStore, persistReducer } from "redux-persist";
import { createWrapper } from "next-redux-wrapper";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, mealReducer);

export const store = configureStore({
  reducer: {
    meal: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
