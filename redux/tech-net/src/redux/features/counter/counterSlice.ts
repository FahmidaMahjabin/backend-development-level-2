// slice holo only functional logic thakbe .bussiness logic thakbe na.
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialState = { count: 0 };
const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});
export const { decrement, increment, incrementByAmount } = countSlice.actions;
export default countSlice.reducer;
