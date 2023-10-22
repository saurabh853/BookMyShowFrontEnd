import React, { useContext } from "react";
import RadioBtnComponent from "./RadioBtnComponent";
import { moviesList } from "../data";
import BookMyShowContext from "../Context/BookMyShowContext";
import "../Css/SelectMovie.css";

const SelectMovie = () => {
  const context = useContext(BookMyShowContext);

  /* Getting movie and change movie components from the context.*/
  const { movie, changeMovie } = context;

  const handleChangeMovie = (value) => {
    changeMovie(value);

    /*setting movie in localstorage*/
    window.localStorage.setItem("movie", value);
  };

  return (
    <>
      <h1 className="SM_heading">Select a Movie :-</h1>
      <div className="SM_main_container">
        {moviesList.map((el, index) => {
          return (
            <RadioBtnComponent
              text={el}
              changeSelection={handleChangeMovie}
              data={movie}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default SelectMovie;
