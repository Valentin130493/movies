import React, { ChangeEvent, useEffect, useState } from "react";
import "./MovieDetails.scss";
import Input from "../../components/_common/input/Input";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import { Movie, Movies } from "../../types/Movies";
import useMovies from "../../hooks/useMovies";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/Routes";
import { MovieInputs } from "../../constants/MovieInputs";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { changeCurrentMovie, deleteOneMovie, getMovies } = useMovies();
  const movies = useSelector<ApplicationState, Movies>((state) => state.movies);
  const movie = useSelector<ApplicationState, Movie>((state) => state.movie);

  const initialValues: { [key: string]: string } = {
    title: movie.title,
    genre: movie.genre,
    year: `${movie.year}`,
  };

  const [movieState, setMovieState] = useState(initialValues);
  useEffect(() => {
    setMovieState({
      title: movie.title,
      genre: movie.genre,
      year: `${movie.year}`,
    });
  }, [movie]);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMovieState({ ...movieState, [event.target.name]: event.target.value });
  };
  const data = {
    title: movieState.title,
    genre: movieState.genre,
    year: +movieState.year,
  };

  const changeMovie = () => {
    changeCurrentMovie(data, movie.id);
    getMovies(movies.CurrentPage);
    navigate(ROUTES.MOVIES);
  };

  const deleteMovie = () => {
    deleteOneMovie(movie.id);
    navigate(ROUTES.MOVIES);
  };

  return (
    <div className={"movieDetails__wrapper"}>
      <header className={"movie__header"}>
        <h4> Movie information : </h4>
      </header>
      <main className={"movie__main"}>
        {MovieInputs.map(({ maxSymbols, name }) => {
          return (
            <>
              <label htmlFor={name}>{name}:</label>
              <div className={"input__form__container"}>
                <Input
                  name={name}
                  maxSymbols={maxSymbols}
                  value={movieState[name]}
                  onChange={(event) => handleInputChange(event)}
                />
              </div>
            </>
          );
        })}

        <div className={"button__block"}>
          <Button variant={"contained"} color={"success"} onClick={changeMovie}>
            Change
          </Button>
          <Button variant={"contained"} color={"error"} onClick={deleteMovie}>
            Delete
          </Button>
        </div>
      </main>
    </div>
  );
};

export default MovieDetails;
