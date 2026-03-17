import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { UserReduxState } from "../../interfaces";


const initialState: UserReduxState = {
  id:0,
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  phone_no: "",
  profilePicture: "",
  role_id: 0,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const data: UserReduxState = action.payload;
      return {
        ...state,
        ...data,
        isLoggedIn: true,
      };
    },
    logoutUser: () => {
      return { ...initialState };
    },
    updateUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setUser, logoutUser, updateUser } = userSlice.actions;

export const currentUser = (state: RootState) => state.user;

export default userSlice.reducer;
