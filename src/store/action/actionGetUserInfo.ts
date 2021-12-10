import { User } from "../../types/User";
import { USER_ACTION_TYPES } from "../actionTypes";

export const actionGetUserInfo = (data: User) => {
  return {
    type: USER_ACTION_TYPES.GET_USER_INFO,
    data,
  };
};
