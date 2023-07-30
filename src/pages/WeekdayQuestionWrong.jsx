// pages/WeekdayQuestionWrong.js

import React from "react";
import './pages.css';
import { Link } from "react-router-dom";
const WeekdayQuestionWrong = () => (
  <div className="q1image">
    <h1>If it is a weekday</h1>
    <p>Please select the correct option to proceed!</p>
    <div>
          <Link to="/coldQuestion" className="LeftButton btn btn-outline-primary" role="button">I will go to school</Link>
          <Link to="/weekdayQuestionWrong" className="RightButton btn btn-outline-primary" role="button">I will relax at home</Link>
          </div>
  </div>
);

export default WeekdayQuestionWrong;