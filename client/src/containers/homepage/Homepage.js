import React, { useState } from "react";
import { useEffect } from "react";

const Homepage = () => {
  const [campgrounds, setCampgrounds] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    fetchCampgrounds();
  }, []);

  const fetchCampgrounds = async () => {
    const response = await fetch("/campgrounds");
    const data = await response.json();
    setCampgrounds(data);
  };

  return (
    <div>
      <h1>All Campgrounds</h1>
      <h3>{}</h3>
    </div>
  );
};

export default Homepage;
