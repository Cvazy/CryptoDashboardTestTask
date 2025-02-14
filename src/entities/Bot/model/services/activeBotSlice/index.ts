import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IActiveBot {
  activeIndex: number;
}

const initialState: IActiveBot = {
  activeIndex: 0,
};

export const activeBotSlice = createSlice({
  name: "activeBot",
  initialState,
  reducers: {
    changeActiveBot: (state, action: PayloadAction<number>) => {
      state.activeIndex = action.payload;
    },
  },
});

export const { changeActiveBot } = activeBotSlice.actions;
export const activeBotReducer = activeBotSlice.reducer;
