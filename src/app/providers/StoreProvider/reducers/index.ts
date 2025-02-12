import { combineReducers } from "@reduxjs/toolkit";
import { botListApi } from "entities/Bot";

export const rootReducer = combineReducers({
  [botListApi.reducerPath]: botListApi.reducer,
});
