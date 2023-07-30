// pages/AfterSchoolRainQuestion.js

import React from "react";
import './pages.css';
import { Link } from "react-router-dom";
const AfterSchoolRainQuestion = () => (
  <div className="q6image">
    <h1>After the school, if it is raining?</h1>
    <div>
          <Link to="/stopRainQuestion" className="LeftButton btn btn-outline-primary" role="button">I will use my umbrella and raincoat on the way home</Link>
          <Link to="/afterSchoolRainQuestionWrong" className="RightButton btn btn-outline-primary" role="button">I will use my sunglasses on the way home</Link>
          </div>
  </div>
);

export default AfterSchoolRainQuestion;