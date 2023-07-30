// pages/ColdQuestionWrong.js

import React from "react";
import './pages.css';
import { Link } from "react-router-dom";
const ColdQuestionWrong = () => (
  <div>
    <h1>If it is cold outside?</h1>
    <p>Please choose the correct option to move forward!</p>
    <div>
          <Link to="/coldQuestionWrong" className="LeftButton btn btn-outline-primary" role="button">I will not use the geyser</Link>
          <Link to="/rainQuestion" className="RightButton btn btn-outline-primary" role="button">I will use the geyser</Link>
          </div>
  </div>
);

export default ColdQuestionWrong;