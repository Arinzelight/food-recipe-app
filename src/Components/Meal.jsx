import React, { useEffect, useState } from "react";
import RecipeIndex from "./RecipeIndex";
import MealItem from "./MealItem";

const Meal = () => {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=l"
  );
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);

  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };

  const handleSearch = (e) => {
    // Check if the pressed key is Enter (key code 13)
    if (e.key === "Enter") {
      // setUrl to searched name when Enter key is pressed
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}
      `);
    }
  };

  return (
    <div className="main">
      <div className="heading">
        <h1>Search Your Food Recipe</h1>
        <h4>
          Navigate recipes effortlessly with our user-friendly interface.
          Explore categories, search dishes, and discover culinary adventures
          with ease
        </h4>
      </div>
      <div className="searchBox">
        <input
          type="search"
          placeholder="Search..."
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleSearch}
        />
      </div>

      <div className="indexContainer">
        <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
      </div>
      <div className="container">
        {show ? <MealItem data={item} /> : "Meal Not Found"}
      </div>
    </div>
  );
};

export default Meal;
