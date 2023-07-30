import React, { useState } from 'react';
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import WeekdayQuestion from "./pages/WeekdayQuestion";
import WeekdayQuestionWrong from "./pages/WeekdayQuestionWrong";
import ColdQuestion from "./pages/ColdQuestion";
import ColdQuestionWrong from "./pages/ColdQuestionWrong";
import RainQuestion from "./pages/RainQuestion";
import RainQuestionWrong from "./pages/RainQuestionWrong";
import EnglishQuestion from "./pages/EnglishQuestion";
import EnglishQuestionWrong from "./pages/EnglishQuestionWrong";
import LunchQuestion from "./pages/LunchQuestion";
import LunchQuestionWrong from "./pages/LunchQuestionWrong";
import AfterSchoolRainQuestion from "./pages/AfterSchoolRainQuestion";
import AfterSchoolRainQuestionWrong from "./pages/AfterSchoolRainQuestionWrong";
import StopRainQuestion from "./pages/StopRainQuestion";
import StopRainQuestionWrong from "./pages/StopRainQuestionWrong";
import HomeworkQuestion from "./pages/HomeworkQuestion";
import HomeworkQuestionWrong from "./pages/HomeworkQuestionWrong";
import Congratulations from "./pages/Congratulations";

import Home from "./pages/Home";
import './App.css';

const App = () => {

  return (
    <div className='App'>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<Home/>} />
          
          <Route exact path="/weekdayQuestion" element={<WeekdayQuestion/>} />

          <Route exact path="/weekdayQuestionWrong" element={<WeekdayQuestionWrong/>} />

          <Route exact path="/coldQuestion" element={<ColdQuestion/>} />

          <Route exact path="/coldQuestionWrong" element={<ColdQuestionWrong/>} />

          <Route exact path="/rainQuestion" element={<RainQuestion/>} />

          <Route exact path="/rainQuestionWrong" element={<RainQuestionWrong/>} />

          <Route exact path="/englishQuestion" element={<EnglishQuestion/>} />

          <Route exact path="/englishQuestionWrong" element={<EnglishQuestionWrong/>} />

          <Route exact path="/lunchQuestion" element={<LunchQuestion/>} />

          <Route exact path="/lunchQuestionWrong" element={<LunchQuestionWrong/>} />

          <Route exact path="/afterSchoolRainQuestion" element={<AfterSchoolRainQuestion/>} />

          <Route exact path="/afterSchoolRainQuestionWrong" element={<AfterSchoolRainQuestionWrong/>} />

          <Route exact path="/stopRainQuestion" element={<StopRainQuestion/>} />

          <Route exact path="/stopRainQuestionWrong" element={<StopRainQuestionWrong/>} />

          <Route exact path="/homeworkQuestion" element={<HomeworkQuestion/>} />

          <Route exact path="/homeworkQuestionWrong" element={<HomeworkQuestionWrong/>} />

          <Route exact path="/congratulations" element={<Congratulations/>} />

          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Route path='/' element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;