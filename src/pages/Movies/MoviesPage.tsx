import React, { ChangeEvent, useEffect, useState } from "react";
import "./MoviesPage.scss";
import useMovies from "../../hooks/useMovies";
import { useDispatch, useSelector } from "react-redux";
import { Movies } from "../../types/Movies";
import { ApplicationState } from "../../store";
import OneMovie from "../../components/_common/OneMovie/OneMovie";
import { Button, Pagination } from "@mui/material";
import ModalForm from "../../components/Forms/ModalForm/ModalForm";
import { useNavigate } from "react-router-dom";
import LoaderCommon from "../../components/_common/Loader/Loader";
import {
  actionDeleteMovie,
  actionSetPage,
} from "../../store/action/actionMovies";

const MoviesPage = () => {
  const { getMovies, deleteOneMovie, getCurrentMovie } = useMovies();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { results, count, CurrentPage } = useSelector<ApplicationState, Movies>(
    (state) => state.movies
  );

  const [isDataLoading, setIsDataLoading] = useState(true);
  const [page, setPage] = useState(CurrentPage);
  useEffect(() => {
    getMovies(page).then(() => setIsDataLoading(false));
  }, [page]);
  const [isOpen, setIsOpen] = useState(true);
  const currentCount = Math.ceil(count / 10);

  const getMovie = async (id: number) => {
    dispatch(actionSetPage(page));
    await getCurrentMovie(id);
    navigate(`/movies/${id}`);
  };

  const deleteMovie = (
    event: React.MouseEvent<HTMLImageElement>,
    id: number
  ) => {
    dispatch(actionDeleteMovie(id));
    deleteOneMovie(id);
    event.stopPropagation();
  };

  const handleChange = (event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
    getMovies(page);
  };

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={"movies__wrapper"}>
      <header className={"movies__header"}>
        <Button
          className={"btn__right"}
          variant={"contained"}
          color={"secondary"}
          size={"small"}
          onClick={openModal}
        >
          Create movie
        </Button>
        {!isOpen && <ModalForm close={openModal} page={page} />}
      </header>
      <div className={"movies__area"}>
        {isDataLoading ? (
          <LoaderCommon />
        ) : (
          results.map((item, index) => {
            return (
              <OneMovie
                item={item}
                key={index}
                onClick={getMovie}
                Delete={deleteMovie}
              />
            );
          })
        )}
      </div>
      {isDataLoading ? (
        <LoaderCommon />
      ) : (
        <div className={"pagination"}>
          <Pagination
            count={currentCount}
            page={page}
            color={"secondary"}
            defaultPage={1}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
