import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// components
import Campground from "../../components/campground/Campground";
import Spinner from "../../components/spinner/Spinner";

const CampgroundID = ({ id, match }) => {
  const [campground, setCampground] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const c = campground.map((i) => i.id === match.params.id);
  console.log(c);

  useEffect(() => {
    fetchCampground();
  }, []);

  const fetchCampground = async (id) => {
    const response = await fetch(`/campgrounds/${id}`);
    const data = await response.json();
    setCampground(data);
    setIsLoading(false);
  };

  return (
    <Fragment>
      <Link to="/">Go back</Link>
      {isLoading ? <Spinner /> : <Campground />}
      <Link to={`/campgrounds/${id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to={`/campgrounds`}>
        <button>Delete</button>
      </Link>
    </Fragment>
  );
};

export default CampgroundID;
