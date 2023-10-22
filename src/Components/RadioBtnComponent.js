import React from "react";
import "../Css/RadioBtnComponent.css";

/*This the radio component which is used for selecting movie and slot.*/
const RadioBtnComponent = ({ text, changeSelection, data }) => {
  /* Changing selected data from the user.*/
  const handleChecked = (value) => {
    changeSelection(value);
  };

  return (
    <div
      name={text}
      className={`form-check-label ${data === text ? "active" : "inactive"}`}
      onClick={() => {
        handleChecked(text);
      }}>
      <span className={"text"}>{text}</span>
    </div>
  );
};

export default RadioBtnComponent;
