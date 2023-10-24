import React from "react";
import CategoryItems from "./category-items";

async function Categories() {
  const response = await fetch(
    "https://airbnb-dgyy.onrender.com/api/categories"
  );
  if (!response.ok) {
    throw new Error(
      "Something went wrong while fetching the categories" + response
    );
  }
  const data = await response.json();
  return (
    <div>
      <CategoryItems categories={data.categories} />
    </div>
  );
}

export default Categories;
