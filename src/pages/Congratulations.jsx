// pages/Congratulations.js

import React from "react";
import './pages.css';
import { Link } from "react-router-dom";
const Congratulations = () => (
  <div>
    <h1>Congratulations! You have successfully completed your day while learning the basics of conditional statements!</h1>
          <Link to="/" className="btn btn-outline-primary" role="button">Click to go back to first page!</Link>
  </div>
);

export default Congratulations;