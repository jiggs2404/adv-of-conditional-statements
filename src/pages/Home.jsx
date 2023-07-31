import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
  
const Home = () => {
  return (
    <div className="q0image">
        <h1>Let's learn about if conditions</h1>
      <h3 className = "homepageheading">Conditional statements are something that we use on a daily basis. We use our reasoning skills to decipher conditional statements and then make a decision. <br/>In today’s adventure you will navigate your way through a series of conditional statements. Choose the correct answer for each to complete your adventurous day.</h3>
      <br/>
          <Link to="/weekdayQuestion" className="btn btn-outline-primary" role="button">Let's begin!</Link>
    </div>
  );
};
  
export default Home;