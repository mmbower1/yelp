import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Campground from "../../components/campground/Campground";
import Spinner from "../../components/spinner/Spinner";

const Campgrounds = () => {
  const [campgrounds, setCampgrounds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCampgrounds();
  }, []);

  const fetchCampgrounds = async () => {
    const response = await fetch("/campgrounds");
    const data = await response.json();
    setCampgrounds(data);
    setIsLoading(false);
    console.log(data);
  };

  return (
    <Fragment>
      <Link to="/">Go back</Link>
      {isLoading ? (
        <Spinner />
      ) : (
        campgrounds.map((campground, i) => (
          <Campground
            key={i}
            id={campground._id}
            title={campground.title}
            price={campground.price}
            description={campground.description}
            location={campground.location}
          />
        ))
      )}
    </Fragment>
  );
};

export default Campgrounds;
