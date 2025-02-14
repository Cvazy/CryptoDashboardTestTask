import { combineReducers } from "@reduxjs/toolkit";
import { botListApi } from "entities/Bot";
import { timeRangeReducer } from "features";
import { tradeStatisticApi } from "widgets/TradeStatistic";
import { activeBotReducer } from "entities/Bot/model/services";

export const rootReducer = combineReducers({
  timeRange: timeRangeReducer,
  activeBot: activeBotReducer,
  [botListApi.reducerPath]: botListApi.reducer,
  [tradeStatisticApi.reducerPath]: tradeStatisticApi.reducer,
});
