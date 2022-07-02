import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    message: "",
    token: "",
    user: null,
    userId: "",
  },
  reducers: {
    loginSuccess: (state, { payload }) => {
      state.isLoading = true;
      console.log("Payload", payload);
    },
    setUser: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.userData;
      state.token = payload.token;
      state.message = "";
    },
    setMessage: (state, { payload }) => {
      state.message = payload;
    },
    signUpSucceess: (state, { payload }) => {
      state.isLoading = true;
      console.log("Payload", payload);
    },
  },
});

export const { name, actions } = authReducer;
export default authReducer.reducer;
