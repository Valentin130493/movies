import { API_BASE_URL, API_ENDPOINTS } from "../constants/api";
import { Http } from "../services/http";
import { useDispatch } from "react-redux";
import {
  actionChangeMovie,
  actionGetMovie,
  actionGetMovies,
} from "../store/action/actionMovies";

export default function useMovies() {
  const dispatch = useDispatch();
  const getMovies = async (page: number) => {
    try {
      const url = `${API_BASE_URL}${API_ENDPOINTS.MOVIE}?page=${page}`;
      const res = await Http.get(url);
      dispatch(actionGetMovies(res));
    } catch (e) {
      console.log(e);
    }
  };

  const createMovies = async (
    data: {
      title: string;
      genre: string;
      year: number;
      creator: string;
    },
    page: number
  ) => {
    const url = `${API_BASE_URL}${API_ENDPOINTS.MOVIE}`;
    await Http.post(url, data);
    await getMovies(page);
  };

  const getCurrentMovie = async (id: number) => {
    try {
      const url = `${API_BASE_URL}${API_ENDPOINTS.MOVIE}${id}/`;
      const res = await Http.get(url);
      dispatch(actionGetMovie(res));
    } catch (e) {
      throw e;
    }
  };

  const changeCurrentMovie = async (
    data: { title: string; genre: string; year: number },
    id: number
  ) => {
    try {
      const url = `${API_BASE_URL}${API_ENDPOINTS.MOVIE}${id}/`;
      const res = await Http.put(url, data);
      dispatch(actionChangeMovie(res));
    } catch (e) {
      throw e;
    }
  };

  const deleteOneMovie = async (id: number) => {
    try {
      const url = `${API_BASE_URL}${API_ENDPOINTS.MOVIE}${id}/`;
      await Http.delete(url);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getMovies,
    createMovies,
    changeCurrentMovie,
    getCurrentMovie,
    deleteOneMovie,
  };
}
