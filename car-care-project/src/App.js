import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navabar/Navbar";
import Landingpage from "./components/landingpage/Landingpage";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <div className="routes-div">
            <Route exact path="/">
              <Landingpage />
            </Route>
          </div>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
