import { CustomAction } from "../index";
import { LOADER_ACTION_TYPES } from "../actionTypes";

export const actionSetLoaderStatus = (data: boolean): CustomAction => {
  return {
    type: LOADER_ACTION_TYPES.SET_STATUS_LOADER,
    data,
  };
};
