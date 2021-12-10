import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "../pages/LogIn/LogIn";
import { ROUTES } from "../constants/Routes";
import Registration from "../pages/Registration/Registration";
import Layout from "../components/_common/Layout/Layout";
import MoviesPage from "../pages/Movies/MoviesPage";
import UserDetails from "../pages/UserDetails/UserDetails";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import IsAuth from "../components/IsAuth/IsAuth";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<LogIn />} />
        <Route path={ROUTES.REGISTRATION} element={<Registration />} />
        <Route
          path={"/"}
          element={
            <IsAuth>
              <Layout />
            </IsAuth>
          }
        >
          <Route
            path={ROUTES.MOVIES}
            element={
              <IsAuth>
                <MoviesPage />
              </IsAuth>
            }
          />
          <Route
            path={ROUTES.USER_DETAILS}
            element={
              <IsAuth>
                <UserDetails />
              </IsAuth>
            }
          />
          <Route
            path={ROUTES.MOVIE_DETAILS}
            element={
              <IsAuth>
                <MovieDetails />
              </IsAuth>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
