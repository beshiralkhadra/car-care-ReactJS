import React from "react";
import "./userprofile.css";
const Userprofile = () => {
  let getLocal = JSON.parse(localStorage.getItem("loggedUsers"));

  return (
    <div className="userprofile">
      <div className="user-data">
        <img src="./abdallah3.jpg" />
        <div className="user-data-name">
          <p>{getLocal[0].username}</p>
        </div>
        <div className="user-data-email">
          <p>{getLocal[0].email} </p>
        </div>
      </div>
      <div className="userprofile-reservation">
        <div className="reservation-title">
          <h3>YOUR RESERVATIONS</h3>
        </div>
        <div className="reservation-table">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Job Title</th>
                <th>Twitter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-column="First Name">James</td>
                <td data-column="Last Name">Matman</td>
                <td data-column="Job Title">Chief Sandwich Eater</td>
                <td data-column="Twitter">@james</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
