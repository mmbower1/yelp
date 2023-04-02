import React, { useEffect, useState } from "react";

const Campground = ({ title, price, description, location }) => {
  return (
    <div>
      <li>
        {" "}
        <span>{title}</span>
        <span>{price}</span>
        <span>{description}</span>
        <span>{location}</span>
      </li>
    </div>
  );
};

export default Campground;
