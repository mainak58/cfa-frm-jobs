import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
  user: any | null;
  accessToken: string;
  refreshToken: string;
}

const initialState: InitialState = {
  user: null,
  accessToken: "",
  refreshToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{
        user: any;
        access_token?: string;
        refresh_token?: string;
      }>
    ) => {
      state.user = action.payload.user;

      if (action.payload.access_token) {
        state.accessToken = action.payload.access_token;
      }

      if (action.payload.refresh_token) {
        state.refreshToken = action.payload.refresh_token;
      }
    },

    logoutSuccess: (state) => {
      state.user = null;
      state.accessToken = "";
      state.refreshToken = "";
    },
  },
});

export const { loginSuccess, logoutSuccess } = userSlice.actions;

export default userSlice.reducer;
