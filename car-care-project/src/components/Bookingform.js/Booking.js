import React, { useState } from "react";
import "./booking.css";
import { useParams } from "react-router-dom";
import Popup from "./Popup";
const Booking = () => {
  // let { id } = useParams();
  let getLocal = JSON.parse(localStorage.getItem("loggedUsers"));
  const [inputData, setInputData] = useState(getLocal);
  const [test, setTest] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  /////////////////////////////////////////////////  handling dates
  let d = new Date();
  let tdate = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getUTCFullYear();
  if (tdate < 10) {
    tdate = "0" + tdate;
  }
  if (month < 10) {
    month = "0" + month;
  }
  let minDate = year + "-" + month + "-" + tdate;

  const handleonchange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let data = {
      ...inputData,
    };
    setSubmitted(!submitted);
    setTest(data);
  };
  return (
    <div className="car-form-container ">
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="textsCont">
          <div className="texts" id="texts1">
            <input
              onChange={handleonchange}
              name="username"
              value={inputData[0].username}
              required
              placeholder="First Name"
              type="text"
              id="username"
            />
          </div>
          <div className="texts" id="texts2">
            <input
              value={getLocal[0].email}
              required
              placeholder="Email"
              onChange={() => {
                return null;
              }}
              type="email"
              name="email"
              id="email"
            />
            <input
              type="tel"
              pattern="[0-9]{10}"
              required
              placeholder="Mobile Number"
              name="tel"
              id="tel"
            />
          </div>
        </div>
        <div className="dates">
          <input
            // onChange={(e) => handleDateChange(e)}
            // value={valueCut}
            type="date"
            name="start"
            min={minDate}
          />
          <input required type="time" name="hours" />
        </div>
        <div className="total">
          {/* <p className="state">{duration} Days</p> */}
          {/* <p>Total :{duration * ppd} JOD</p> */}
        </div>
        <div className="submit">
          <input type="submit" value="Book Now !" />
        </div>
      </form>
      {submitted && <Popup test={test} setSubmitted={setSubmitted} />}
    </div>
  );
};

export default Booking;
