import { combineReducers } from "@reduxjs/toolkit";
import { botListApi } from "entities/Bot";
import { timeRangeReducer } from "features";

export const rootReducer = combineReducers({
  timeRange: timeRangeReducer,
  [botListApi.reducerPath]: botListApi.reducer,
});
