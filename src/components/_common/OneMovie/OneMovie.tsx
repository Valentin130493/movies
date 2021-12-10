import React from "react";
import "./OneMovie.scss";
import deleteIcon from "../../../assets/static/svg/delete.svg";

interface Props {
  title: string;
  genre: string;
  creator: string;
  year: number;
  onClick: (id: number) => void;
  Delete: (event: React.MouseEvent<HTMLImageElement>, id: number) => void;
  id: number;
}

const OneMovie: React.FC<Props> = ({
  title,
  creator,
  genre,
  year,
  onClick,
  Delete,
  id,
}) => {
  return (
    <div className={"oneMovie__wrapper"} onClick={() => onClick(id)}>
      <section className={"movie"}>
        <div className={"movie__header"}>
          <h3 className={"header__title"}>{title}</h3>
          <img
            className={"info"}
            src={deleteIcon}
            alt={"delete"}
            onClick={(event) => Delete(event, id)}
          />
        </div>
        <p className={"movie__genre"}>{genre}</p>
        <p className={"movie__creator"}>{creator}</p>
        <p className={"movie__year"}>{year}</p>
      </section>
    </div>
  );
};

export default OneMovie;
