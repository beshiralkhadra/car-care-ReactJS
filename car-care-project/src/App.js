import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navabar/Navbar";
import Landingpage from "./components/landingpage/Landingpage";
import Footer from "./components/footer/Footer";
import Signup from "./components/registeration/Signup";
import Login from "./components/registeration/Login";
import Aboutus from "./components/aboutUs/Aboutus";
import Services from "./components/services/Services";
import Userprofile from "./components/userprofile/Userprofile";
import Booking from "./components/Bookingform.js/Booking";
function App() {
  const [userSignupInformation, setUserSignupInformation] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [userLoginInformation, setUserLoginInformation] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="routes-div">
          <Switch>
            <Route exact path="/">
              <Landingpage />
            </Route>
            <Route path="/signup">
              <Signup
                userSignupInformation={userSignupInformation}
                setUserSignupInformation={setUserSignupInformation}
              />
            </Route>
            <Route path="/login">
              <Login
                userLoginInformation={userLoginInformation}
                setUserLoginInformation={setUserLoginInformation}
              />
            </Route>
            <Route path="/aboutus">
              <Aboutus />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/booking">
              <Booking />
            </Route>
            <Route path="/profile">
              <Userprofile />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
