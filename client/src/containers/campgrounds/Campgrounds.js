import { title } from "process";
import React from "react";

const Campgrounds = ({ campground }) => {
  return (
    <div>
      <h1>{campground.title}</h1>
      <h2>{campground.location}</h2>
    </div>
  );
};

export default Campgrounds;
