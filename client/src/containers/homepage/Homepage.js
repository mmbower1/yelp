import React, { useState } from "react";
import { useEffect } from "react";

import Campground from "../../components/campground/Campground";
import Spinner from "../../components/spinner/Spinner";

const Homepage = () => {
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
    <div>
      <h1>All Campgrounds</h1>
      <span>
        {campgrounds.map((campground, i) => (
          <Campground
            key={i}
            title={campground.title}
            price={campground.price}
            description={campground.description}
            location={campground.location}
          />
        ))}
      </span>
      {/* <Spinner /> */}
    </div>
  );
};

export default Homepage;
