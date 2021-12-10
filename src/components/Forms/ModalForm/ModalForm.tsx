import React, { ChangeEvent, useState } from "react";
import "./ModalForm.scss";
import Input from "../../_common/input/Input";
import { Button } from "@mui/material";
import useMovies from "../../../hooks/useMovies";

interface Props {
  close: () => void;
  page: number;
}

const ModalForm: React.FC<Props> = ({ close, page }) => {
  const { createMovies, getMovies } = useMovies();
  const [state, setState] = useState({
    title: "",
    genre: "",
    year: "",
    creator: "",
  });
  const { genre, year, creator, title } = state;
  const disabled = !title || !genre || !year;
  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const data = {
    title: title,
    genre: genre,
    creator: creator,
    year: +year,
  };
  const createMovie = () => {
    createMovies(data, page);
    getMovies(page);
    close();
  };

  return (
    <div className={"modal-back"}>
      <div className={"base-modal"}>
        <div className={"base-modal-wrapper"}>
          <header> Create your movie :</header>
          <Input
            name={"title"}
            type={"text"}
            placeholder={"Title"}
            maxSymbols={25}
            minSymbols={3}
            value={title}
            onChange={(event) => inputChange(event)}
          />
          <Input
            name={"genre"}
            type={"text"}
            placeholder={"Genre"}
            maxSymbols={25}
            minSymbols={3}
            value={genre}
            onChange={(event) => inputChange(event)}
          />
          <Input
            name={"year"}
            type={"number"}
            placeholder={"Year"}
            maxSymbols={15}
            minSymbols={3}
            value={year}
            onChange={(event) => inputChange(event)}
          />
          <Input
            name={"creator"}
            type={"text"}
            placeholder={"Creator"}
            maxSymbols={25}
            minSymbols={3}
            value={creator}
            onChange={(event) => inputChange(event)}
          />
          <div className={"button__block"}>
            <Button size={"small"} disabled={disabled} onClick={createMovie}>
              Create
            </Button>
            <Button size={"small"} onClick={close}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
