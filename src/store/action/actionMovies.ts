import { CustomAction } from "../index";
import { MOVIES_ACTION_TYPES } from "../actionTypes";
import { Movie, Movies } from "../../types/Movies";

export const actionGetMovies = (data: Movies): CustomAction => {
  return {
    type: MOVIES_ACTION_TYPES.GET_MOVIES_LIST,
    data,
  };
};

export const actionGetMovie = (data: Movie): CustomAction => {
  return {
    type: MOVIES_ACTION_TYPES.GET_MOVIE,
    data,
  };
};

export const actionChangeMovie = (data: Movie): CustomAction => {
  return {
    type: MOVIES_ACTION_TYPES.CHANGE_MOVIE,
    data,
  };
};

export const actionSetPage = (data: number): CustomAction => {
  return {
    type: MOVIES_ACTION_TYPES.SET_PAGE,
    data,
  };
};
