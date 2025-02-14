import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers";
import { botListApi } from "entities/Bot";
import { tradeStatisticApi } from "widgets/TradeStatistic";

export function createReduxStore(initialState = {}) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        botListApi.middleware,
        tradeStatisticApi.middleware,
      ),
    preloadedState: initialState,
  });
}
