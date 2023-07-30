// pages/RainQuestionWrong.js

import React from "react";
import './pages.css';
import { Link } from "react-router-dom";
const RainQuestionWrong = () => (
  <div>
    <h1>If it is rainy outside?</h1>
    <p>Please select the correct option to proceed!</p>
    <div>
          <Link to="/englishQuestion" className="LeftButton btn btn-outline-primary" role="button">I will carry my umbrella and raincoat</Link>
          <Link to="/rainQuestionWrong" className="RightButton btn btn-outline-primary" role="button">I will carry my sunglasses</Link>
          </div>
  </div>
);

export default RainQuestionWrong;