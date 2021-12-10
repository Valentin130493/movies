import { User } from "../../types/User";
import { CustomAction } from "../index";
import { USER_ACTION_TYPES } from "../actionTypes";

const defaultStateUser: User = {
  id: 0,
  email: "",
  first_name: "",
  last_name: "",
  username: "",
};

export const userReducer = (state = defaultStateUser, action: CustomAction) => {
  switch (action.type) {
    case USER_ACTION_TYPES.GET_USER_INFO: {
      return (state = action.data ? action.data : state);
    }

    default:
      return state;
  }
};
