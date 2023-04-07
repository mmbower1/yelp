import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Campground from "../../components/campground/Campground";
import Spinner from "../../components/spinner/Spinner";
// import e from "express";

const Campgrounds = () => {
  const [campgrounds, setCampgrounds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

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

  const postCampground = async (e) => {
    e.preventDefault();
    const body = JSON.stringify({ title, location });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.post("/campgrounds", body, config);
  };

  return (
    <Fragment>
      <Link to="/">Go back</Link>
      <form id="post-campground" onSubmit={postCampground}>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          name="location"
          placeholder="location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />
        <button>Add campground</button>
      </form>
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
