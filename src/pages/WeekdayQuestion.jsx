// pages/WeekdayQuestion.js

import React from "react";
import { Link } from "react-router-dom";
import './pages.css';

const WeekdayQuestion = () => (
  <div className="q1image">
    <h1>If it is a weekday</h1>
    <div>
          <Link to="/coldQuestion" className="LeftButton btn btn-outline-primary" role="button">I will go to school</Link> 
          <Link to="/weekdayQuestionWrong" className="RightButton btn btn-outline-primary" role="button">I will relax at home</Link> 
          </div>
  </div>
);

export default WeekdayQuestion;