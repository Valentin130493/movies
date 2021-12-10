import { CustomAction } from "../index";
import { MOVIES_ACTION_TYPES } from "../actionTypes";
import { Movies } from "../../types/Movies";

const defaultStateMovies: Movies = {
  count: 0,
  next: "",
  previous: "",
  results: [
    {
      id: 0,
      creator: "",
      genre: "",
      title: "",
      year: 2020,
    },
  ],
  CurrentPage: 1,
};

export const moviesReducer = (
  state = defaultStateMovies,
  action: CustomAction
) => {
  switch (action.type) {
    case MOVIES_ACTION_TYPES.GET_MOVIES_LIST: {
      return {
        ...state,
        results: action.data.results,
        next: action.data.next,
        previous: action.data.previous,
        count: action.data.count,
      };
    }

    case MOVIES_ACTION_TYPES.ADD_MOVIES: {
      return {
        ...state,
        results: state.results.concat(action.data),
      };
    }

    case MOVIES_ACTION_TYPES.DELETE_MOVIE: {
      return {
        ...state,
        results: state.results.filter((item) => item.id !== action.data),
      };
    }
    case MOVIES_ACTION_TYPES.SET_PAGE: {
      return {
        ...state,
        CurrentPage: action.data,
      };
    }

    default:
      return state;
  }
};
