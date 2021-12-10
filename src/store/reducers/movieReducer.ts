import { Movie } from "../../types/Movies";
import { CustomAction } from "../index";
import { MOVIES_ACTION_TYPES } from "../actionTypes";

const defaultStateMovie: Movie = {
  id: 0,
  creator: "",
  genre: "",
  title: "",
  year: 2020,
};

export const movieReducer = (
  state = defaultStateMovie,
  action: CustomAction
) => {
  switch (action.type) {
    case MOVIES_ACTION_TYPES.GET_MOVIE: {
      return action.data;
    }
    case MOVIES_ACTION_TYPES.CHANGE_MOVIE: {
      return action.data;
    }

    default:
      return state;
  }
};
