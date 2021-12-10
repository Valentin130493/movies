import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { moviesReducer } from "./reducers/moviesReducer";
import { Movie, Movies } from "../types/Movies";
import { movieReducer } from "./reducers/movieReducer";
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
}

const reducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
  movie: movieReducer,
});

export const store = createStore(reducer, composeWithDevTools());
