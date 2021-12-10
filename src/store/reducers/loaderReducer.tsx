import { CustomAction } from "../index";
import { LOADER_ACTION_TYPES } from "../actionTypes";

export interface LoaderState {
  isDataLoading: boolean;
}

const defaultState: LoaderState = {
  isDataLoading: false,
};

export default function loaderReducer(
  state: LoaderState = defaultState,
  action: CustomAction
) {
  switch (action.type) {
    case LOADER_ACTION_TYPES.SET_STATUS_LOADER:
      return {
        ...state,
        isDataLoading: action.data,
      };

    default:
      return state;
  }
}
