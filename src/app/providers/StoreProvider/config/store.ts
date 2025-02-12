import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers";
import { botListApi } from "entities/Bot";

export function createReduxStore(initialState = {}) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(botListApi.middleware),
    preloadedState: initialState,
  });
}
