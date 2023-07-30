// pages/LunchQuestionWrong.js

import React from "react";
import './pages.css';
import { Link } from "react-router-dom";
const LunchQuestionWrong = () => (
  <div>
    <h1>During the lunch break, if you are hungry?</h1>
    <p>Please select the correct option to proceed!</p>
    <div>
          <Link to="/lunchQuestionWrong" className="LeftButton btn btn-outline-primary" role="button">I will go play outside</Link>
          <Link to="/afterSchoolRainQuestion" className="RightButton btn btn-outline-primary" role="button">I will eat my food</Link>
          </div>
  </div>
);

export default LunchQuestionWrong;