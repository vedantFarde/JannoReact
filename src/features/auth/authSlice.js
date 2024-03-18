import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  authUser: null,
  currentUser: null,
  manualAuth: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setIsmanualAuth: (state, action) => {
      state.manualAuth = action.payload;
    },
  },
});

export const {
  setIsAuthenticated,
  setIsmanualAuth,
  setAuthUser,
  setCurrentUser,
} = authSlice.actions;
export default authSlice.reducer;
