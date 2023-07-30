// pages/StopRainQuestion.js

import React from "react";
import './pages.css';
import { Link } from "react-router-dom";
const StopRainQuestion = () => (
  <div>
    <h1>If it stopped raining, and sun is out?</h1>
    <div>
          <Link to="/stopRainQuestionWrong" className="LeftButton btn btn-outline-primary" role="button">I will see dark clouds</Link>
          <Link to="/homeworkQuestion" className="RightButton btn btn-outline-primary" role="button">I will see the rainbow</Link>
          </div>
  </div>
);

export default StopRainQuestion;