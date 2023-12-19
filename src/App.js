import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import { useState, useReducer } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import "./App.css";
import BookingPage from "./components/BookingPage";

function App() {
  const initializeTimes = {
    availableTimes: ["10:00", "1:00", "4:00"],
  };

  const updateTimes = () => {
    return { availableTimes: ["9:00", "11:30", "1:15"] };
  };

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  const navigate = useNavigate();

  function submitForm() {
    alert("Table Reserved Successfull!");
    if (true) {
      navigate("/");
    }
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
