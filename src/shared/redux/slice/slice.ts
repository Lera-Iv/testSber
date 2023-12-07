import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCurrency } from '../model';

const initialState: TCurrency = {
  id: "",
  name: "",
  min_size: 0,
};

export const currentCurensy = createSlice({
  name: "currentCurensy",
  initialState,
  reducers: {
    addCurrencyState: (state, action: PayloadAction<TCurrency>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { addCurrencyState } = currentCurensy.actions;
export const formCurrentCurensy = currentCurensy.reducer;
