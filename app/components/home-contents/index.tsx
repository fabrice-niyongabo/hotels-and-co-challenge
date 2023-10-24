"use client";

import { ICategory } from "@/app/types";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import SubHeader from "./sub-header";

const fetchCategories = async () => {
  const response = await fetch(
    "https://airbnb-dgyy.onrender.com/api/categories"
  );
  if (!response.ok) {
    throw new Error("Something went wrong while fetching the categories");
  }
  const data = await response.json();
  return data;
};

function HomeContents() {
  const [selectedCategory, setSelectedCategory] = useState();

  //fetching categories
  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: async (): Promise<ICategory[]> => {
      const data = await fetchCategories();
      return data.categories as ICategory[];
    },
  });

  return (
    <>
      <SubHeader
        isLoading={categoriesQuery.isLoading}
        isError={categoriesQuery.isError}
        categories={categoriesQuery.data}
      />
    </>
  );
}

export default HomeContents;
