import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Booking from "./pages/Booking";
import Comment from "./pages/Comment";
import Contact from "./pages/Contact";
import Header from "./components/navigation/header/Header";

export default function App() {
  return (
  <>
  <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/booking">Booking</Link>
                </li>
                <li>
                  <Link to="/comment">Comment</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/">
                <Home />
                <Header />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/booking">
                <Booking />
              </Route>
              <Route path="/comment">
                <Comment />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
        </Router>
  </div>
  </>
  );
}

