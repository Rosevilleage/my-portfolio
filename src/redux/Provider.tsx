"use client";

import { Provider } from "react-redux";
import { store } from "./store";

interface ProviderChild {
  children: React.ReactNode;
}
export function Providers({ children }: ProviderChild) {
  return <Provider store={store}>{children}</Provider>;
}
