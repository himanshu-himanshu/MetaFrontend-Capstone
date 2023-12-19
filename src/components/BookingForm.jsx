import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occassion, setOccasion] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch(e);
  };

  const handleSubmit = (e) => {
    if (date == "" || time == "" || guests == "" || occassion == "") {
      alert("Please fill the form to reserve a table!");
      return;
    }
    submitForm();
  };

  return (
    <div className="bookingPage_wrapper">
      <div className="top_header">
        <h1>Make a Reservation</h1>
      </div>
      <div className="form_div">
        <form>
          <div className="date_div">
            <label htmlForfor="res-date">Choose date:</label>
            <input
              type="date"
              id="res-date"
              value={date}
              onChange={(e) => handleDateChange(e)}
            />
          </div>
          <div className="time_div">
            <label htmlFor="res-time">Choose time:</label>
            <select
              id="res-time "
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option>select</option>
              {availableTimes.availableTimes.map((x, y) => (
                <option key={y}>{x}</option>
              ))}
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
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
          <div className="occassion_div">
            <label htmlFor="occasion">Occasion:</label>
            <select
              id="occasion"
              value={occassion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option>Select</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>

          <button
            type="submit"
            className="submitBtn"
            onClick={() => handleSubmit()}
          >
            Make Your Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
