// pages/HomeworkQuestionWrong.js

import React from "react";
import './pages.css';
import { Link } from "react-router-dom";
const HomeworkQuestionWrong = () => (
  <div className="q8image">
    <h1>If you have homework</h1>
    <p>Please select the correct option to proceed!</p>
    <div>
          <Link to="/homeworkQuestionWrong" className="LeftButton btn btn-outline-primary" role="button">I will watch TV</Link>
          <Link to="/congratulations" className="RightButton btn btn-outline-primary" role="button">I will complete my homework</Link>
          </div>
  </div>
);

export default HomeworkQuestionWrong;