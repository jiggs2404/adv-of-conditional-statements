// pages/StopRainQuestionWrong.js

import React from "react";
import './pages.css';
import { Link } from "react-router-dom";
const StopRainQuestionWrong = () => (
  <div className="q7image">
    <h1>If it stopped raining, and sun it out?</h1>
    <p>Please select the correct option to proceed!</p>
    <div>
          <Link to="/stopRainQuestionWrong" className="LeftButton btn btn-outline-primary" role="button">I will see dark clouds</Link>
          <Link to="/homeworkQuestion" className="RightButton btn btn-outline-primary" role="button">I will see the rainbow</Link>
          </div>
  </div>
);

export default StopRainQuestionWrong;