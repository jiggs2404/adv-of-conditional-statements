// pages/EnglishQuestion.js

import React from "react";
import './pages.css';
import { Link } from "react-router-dom";
const EnglishQuestion = () => (
  <div className="q4image">
    <h1>If the first class in your day is English?</h1>
    <div>
          <Link to="/englishQuestionWrong" className="LeftButton btn btn-outline-primary" role="button">I will use my Math textbook</Link>
          <Link to="/lunchQuestion" className="RightButton btn btn-outline-primary" role="button">I will use my English textbook</Link>
          </div>
  </div>
);

export default EnglishQuestion;