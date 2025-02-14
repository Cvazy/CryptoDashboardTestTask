import { combineReducers } from "@reduxjs/toolkit";
import { botListApi } from "entities/Bot";
import { timeRangeReducer } from "features";
import { tradeStatisticApi } from "widgets/TradeStatistic";

export const rootReducer = combineReducers({
  timeRange: timeRangeReducer,
  [botListApi.reducerPath]: botListApi.reducer,
  [tradeStatisticApi.reducerPath]: tradeStatisticApi.reducer,
});
