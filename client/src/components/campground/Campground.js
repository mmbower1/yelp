import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Campground = ({ id, title, price, description, location }) => {
  return (
    <Fragment>
      <Link to={`/campgrounds/${id}`}>
        <ul>
          {" "}
          <span>{title}</span>
          <span>{price}</span>
          <span>{description}</span>
          <span>{location}</span>
        </ul>
      </Link>
    </Fragment>
  );
};

export default Campground;
