import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = { showSidebar: boolean };

const initialState: InitialStateType = { showSidebar: false };

const uiManagerSlice = createSlice({
  name: "ui-manager",
  initialState,
  reducers: {
    setShowSidebar: (state:InitialStateType , action: PayloadAction<boolean>) => {
      state.showSidebar = action.payload;
    },
  },
});

const uiManagerReducer = uiManagerSlice.reducer;
export default uiManagerReducer;

export const { setShowSidebar } = uiManagerSlice.actions;
