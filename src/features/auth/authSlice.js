import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./authApi";

const initialState = {
  user: null,
  status: "idle",
  authenticationStatus: false,
  expiry: null,
};

export const userAsync = createAsyncThunk("auth/fetchUser", async (amount) => {
  const response = await fetchUser(amount);
  return response.user;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.status = "fulfilled";
      state.authenticationStatus = true;
      const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000;
      state.expiry = expirationTime;

      setTimeout(() => {
        state.user = null;
        state.status = "idle";
        state.authenticationStatus = false;
        state.expiry = null;
      }, 24 * 60 * 60 * 1000);
    },
    clearUser: (state) => {
      state.user = null;
      state.status = "idle";
      state.authenticationStatus = false;
      state.expiry = null;
    },
    setLoading: (state) => {
      state.status = "loading";
    },
    setError: (state) => {
      state.status = "error";
    },
    clearError: (state) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload.user;
      });
  },
});

export const { setUser, clearUser, setLoading, setError, clearError } =
  authSlice.actions;
export default authSlice.reducer;

export const selectUser = (state) => state.auth.user;
export const selectStatus = (state) => state.auth.status;
export const selectAuthenticationStatus = (state) =>
  state.auth.authenticationStatus;
