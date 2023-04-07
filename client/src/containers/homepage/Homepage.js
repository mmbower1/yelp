import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h1>MB Yelp</h1>
      <Link to="/campgrounds">Check out all campgrounds here.</Link>
    </div>
  );
};

export default Homepage;
