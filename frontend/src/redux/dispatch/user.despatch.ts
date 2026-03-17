import type { UserAttributes } from "../../interfaces";
import { setUser, logoutUser, updateUser } from "../ducks/userLogin";
import { store } from "../store";

export const dispatchSetUser = (user: UserAttributes) => {
  store.dispatch(setUser(user));
};

export const dispatchUpdateUser = (user: Partial<UserAttributes>) => {
  store.dispatch(updateUser(user));
};

export const dispatchLogoutUser = () => {
  store.dispatch(logoutUser());
};
