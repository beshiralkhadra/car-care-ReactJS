import React from "react";
import "./booking.css";
const Booking = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="car-form-container ">
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="textsCont">
          <div className="texts" id="texts1">
            <input
              //   onChange={(e) => handleInputChange(e)}
              //   value={userInfo.fName}
              required
              placeholder="First Name"
              type="text"
              name="fName"
              id="fName"
            />
            <input
              //   onChange={(e) => handleInputChange(e)}
              //   value={userInfo.lName}
              required
              placeholder="Last Name"
              type="text"
              name="lName"
              id="lName"
            />
          </div>
          <div className="texts" id="texts2">
            <input
              //   value={userInfo.email}
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
            // min={found ? starting : valueCut1}
          />
          <input
            // onChange={(e) => handleDateChange2(e)}
            // min={valueCut2}
            // value={valueCut2}
            type="date"
            name="end"
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
    </div>
  );
};

export default Booking;
