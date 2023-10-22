import React, { useContext } from "react";
import RadioBtnComponent from "./RadioBtnComponent";
import { slots } from "../data";
import "../Css/TimeShedule.css";
import BookMyShowContext from "../Context/BookMyShowContext";

const TimeShedule = () => {
  const context = useContext(BookMyShowContext);

  /* Getting time and change changeTime components from the context.*/
  const { time, changeTime } = context;

  const handleChangeTime = (value) => {
    changeTime(value);

    /*setting slot in localstorage*/
    window.localStorage.setItem("slot", value);
  };

  return (
    <>
      <div className="Slot_container">
        <h1 className="TS_heading">Select a Schedule :-</h1>
        <div className="TS_main_container">
          {slots.map((el, index) => {
            return (
              <RadioBtnComponent
                text={el}
                changeSelection={handleChangeTime}
                data={time}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TimeShedule;
