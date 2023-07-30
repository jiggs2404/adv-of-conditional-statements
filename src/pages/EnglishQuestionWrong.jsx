// pages/EnglishQuestionWrong.js

import React from "react";
import './pages.css';
import { Link } from "react-router-dom";
const EnglishQuestionWrong = () => (
  <div className="q4image">
    <h1>If the first class in your day is English?</h1>
    <p>Please select the correct option to proceed!</p>
    <div>
          <Link to="/englishQuestionWrong" className="LeftButton btn btn-outline-primary" role="button">I will use my Math textbook</Link>
          <Link to="/lunchQuestion" className="RightButton btn btn-outline-primary" role="button">I will use my English textbook</Link>
          </div>
  </div>
);

export default EnglishQuestionWrong;