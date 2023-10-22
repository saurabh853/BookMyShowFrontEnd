import React, { useEffect } from "react";
import "../Css/LastBookingDetails.css";
import { useContext } from "react";
import BookMyShowContext from "../Context/BookMyShowContext";
import { seats } from "../data";

const LastBookingDetails = (props) => {
  const url = "https://turquoise-panda-sock.cyclic.cloud";
  const context = useContext(BookMyShowContext);

  const { getLastBooking, lastBookingDetail } = context;

  useEffect(() => {
    /*calling get last booking api to get the last booking details*/
    getLastBooking(url);
    /* eslint-disable-next-line*/
  }, []);

  return (
    <div className="last_booking_details_container_main">
      <h2 className="last_booking_details_header">Last Booking Details:</h2>
      {lastBookingDetail ? (
        <>
          <div className="seats_container">
            <p className="seats_header">Seats:</p>
            <ul className="seats">
              {seats.map((seat, index) => {
                return (
                  <li className="seat_value" key={index}>
                    {seat}: {Number(lastBookingDetail.seats[seat])}
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="slot" style={{ textAlign: "left" }}>
            Slot: <span>{lastBookingDetail.slot}</span>
          </p>
          <p className="movie">
            Movie: <span>{lastBookingDetail.movie}</span>
          </p>
        </>
      ) : (
        <p className="no_previous_booking_msg">No Previous Booking Found!</p>
      )}
    </div>
  );
};

export default LastBookingDetails;
