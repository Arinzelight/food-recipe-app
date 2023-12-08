import React from "react";

const MealItem = ({ data }) => {
  console.log(data);
  let num = 0;
  return (
    <>
      {!data
        ? "Meal Not Found"
        : data.map((item) => {
            return (
              <div className="card" key={num++}>
                <img src={item.strMealThumb} alt="" />
                <h3>{item.strMeal}</h3>
              </div>
            );
          })}
    </>
  );
};

export default MealItem;
