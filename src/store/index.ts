import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { moviesReducer } from "./reducers/moviesReducer";
import { Movie, Movies } from "../types/Movies";
import { movieReducer } from "./reducers/movieReducer";
import loaderReducer, { LoaderState } from "./reducers/loaderReducer";
import { User } from "../types/User";
import { userReducer } from "./reducers/userReducer";

export interface CustomAction {
  type: string;
  data?: any;
}

export interface ApplicationState {
  user: User;
  movies: Movies;
  movie: Movie;
  loader: LoaderState;
}

const reducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
  movie: movieReducer,
  loader: loaderReducer,
});

export const store = createStore(reducer, composeWithDevTools());
