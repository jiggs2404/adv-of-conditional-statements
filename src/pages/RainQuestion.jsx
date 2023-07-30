// pages/RainQuestion.js

import React from "react";
import './pages.css';
import { Link } from "react-router-dom";
const RainQuestion = () => (
  <div className="q3image">
    <h1>If it is rainy outside?</h1>
    <div>
          <Link to="/englishQuestion" className="LeftButton btn btn-outline-primary" role="button">I will carry my umbrella and raincoat</Link>
          <Link to="/rainQuestionWrong" className="RightButton btn btn-outline-primary" role="button">I will carry my sunglasses</Link>
          </div>
  </div>
);

export default RainQuestion;