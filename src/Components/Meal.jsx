import React, { useEffect, useState } from "react";
import RecipeIndex from "./RecipeIndex";
import MealItem from "./MealItem";

const Meal = () => {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
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

  // const handleSearch = () => {
  //   // Here, you can implement the logic to read the entered text
  //   setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}
  //   `);
  // };

  const handleSearch = (e) => {
    // Check if the pressed key is Enter (key code 13)
    if (e.key === "Enter") {
      // Call the handleSearch function when Enter key is pressed
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}
      `);
    }
  };

  return (
    <div className="main">
      <div className="heading">
        <h1>Search Your Food Recipe</h1>
        <h4>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
          voluptate distinctio iste.
        </h4>
      </div>
      <div className="searchBox">
        <input
          type="search"
          placeholder="Search for meal"
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
