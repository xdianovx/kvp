import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../store";

export interface UserState {
  data: any;
}

const initialState: UserState = {
  data: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction) => {
      state.data = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;
export const selectUserData = (state: AppState) => state.user.data;
export const userReducer = userSlice.reducer;
