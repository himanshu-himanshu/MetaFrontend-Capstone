import React from "react";

import logo from "../assets/9118.jpg";

const BookingPage = () => {
  return (
    <>
      <div className="bookingPage_wrapper">
        <div className="top_header">
          <h1>Make a Reservation</h1>
        </div>
        <div className="form_div">
          <form>
            <div className="date_div">
              <label htmlForfor="res-date">Choose date:</label>
              <input type="date" id="res-date" />
            </div>
            <div className="time_div">
              <label htmlFor="res-time">Choose time:</label>
              <select id="res-time ">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
              </select>
            </div>
            <div className="guests_div">
              <label htmlFor="guests">Number of guests:</label>
              <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
              />
            </div>
            <div className="occassion_div">
              <label htmlFor="occasion">Occasion:</label>
              <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>

            <input
              type="submit"
              value="Make Your reservation"
              className="submitBtn"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
