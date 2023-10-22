import React, { useState, useEffect } from "react";
import BookMyShowContext from "./BookMyShowContext";

const BookMyShowState = (props) => {
  
  /*error popup*/
  const [errorPopup, setErrorPopup] = useState(false);

  /*error message*/
  const [errorMessage, setErrorMessage] = useState("");

  /* time slot which the user selects.*/
  const [time, changeTime] = useState("");

  /* Movie which the user selects.*/
  const [movie, changeMovie] = useState("");

  /* No of seats which the user selects.*/
  const [noOfSeat, changeNoOfSeats] = useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    D1: "",
    D2: "",
  });

  /* Last movie booking details.*/
  const [lastBookingDetail, setLastBookingDetails] = useState(null);

  /* handling post request to save booking details on the backend*/
  const handlePostBooking = async (url) => {
    /* Sending api request to backend with user selected movie, slot and seats to book movie.*/
    const response = await fetch(
      `${url}/api/booking`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movie: movie, slot: time, seats: noOfSeat }),
      }
    );

    const data = await response.json();

    /*showing message from backend on popup to user whether success or error*/
    setErrorPopup(true);
    setErrorMessage(data.message);

    if (response.status === 200) {
      /*reset the state on success*/
      changeTime("");
      changeMovie("");
      changeNoOfSeats({
        A1: "",
        A2: "",
        A3: "",
        A4: "",
        D1: "",
        D2: "",
      });
      setLastBookingDetails(data.data);

      /*clearing the local storage when booking is successfull*/
      window.localStorage.clear();
    }
  };

  /*handle get request to get the last booking details from backend*/
  const getLastBooking = async (url) => {
    console.log(url)
    const response = await fetch(
      `${url}/api/booking`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    /* Setting last booking details recieved from the backend.*/
    setLastBookingDetails(data.data);
  };

  useEffect(() => {
    //getting movies, slot and seats from localstorage and updating state (useful when page refreshes)
    const movie = window.localStorage.getItem("movie");
    const slot = window.localStorage.getItem("slot");
    const seats = JSON.parse(window.localStorage.getItem("seats"));

    if(movie){
      changeMovie(movie);
    }
    if(slot){
      changeTime(slot);
    }
    if(seats){
      changeNoOfSeats(seats);
    }
  }, []);
  
  return (
    // providing all the required data to app
    <BookMyShowContext.Provider
      value={{
        handlePostBooking: (url)=>handlePostBooking(url),
        getLastBooking: (url) => getLastBooking(url),
        movie,
        changeMovie,
        time,
        changeTime,
        noOfSeat,
        changeNoOfSeats,
        lastBookingDetail,
        errorPopup,
        setErrorPopup,
        errorMessage,
        setErrorMessage,
      }}>
      {props.children}
    </BookMyShowContext.Provider>
  );
};

export default BookMyShowState;
