import React, { useRef } from "react";
import { AppStore, store } from "./lib/store";
import { Provider } from "react-redux";
// import { initializeCount } from '../lib/features/counter/counterSlice'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(undefined);

  if (!storeRef.current) {
    storeRef.current = store();
    // storeRef.current.dispatch(initializeCount(count)) eğer initial değere ihtiyaç varsa
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
