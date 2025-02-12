import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITimeRange {
  range: string;
}

const initialState: ITimeRange = {
  range: "24h",
};

export const timeRangeSlice = createSlice({
  name: "timeRange",
  initialState,
  reducers: {
    changeTimeRange: (state, action: PayloadAction<string>) => {
      state.range = action.payload;
    },
  },
});

export const { changeTimeRange } = timeRangeSlice.actions;
export const timeRangeReducer = timeRangeSlice.reducer;
