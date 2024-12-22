import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeType = "dark"| "light"

type InitialStateType = { showSidebar: boolean, theme: ThemeType };

const initialState: InitialStateType = { showSidebar: false, theme: localStorage.getItem("theme") as ThemeType || "light" };

const uiManagerSlice = createSlice({
  name: "ui-manager",
  initialState,
  reducers: {
    setShowSidebar: (state:InitialStateType , action: PayloadAction<boolean>) => {
      state.showSidebar = action.payload;
    },
    toggleTheme : (state: InitialStateType)=>{
      const newTheme = state.theme === "light" ? "dark" : "light"
      state.theme = newTheme
      localStorage.setItem("theme", newTheme)
    },
    setTheme : (state: InitialStateType, action: PayloadAction<ThemeType>)=>{
      state.theme = action.payload
      localStorage.setItem("theme", action.payload)
    }
  },
});

const uiManagerReducer = uiManagerSlice.reducer;
export default uiManagerReducer;

export const { setShowSidebar, toggleTheme, setTheme } = uiManagerSlice.actions;
