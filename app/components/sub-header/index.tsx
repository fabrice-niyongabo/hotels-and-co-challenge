"use client";
import { ICategory } from "@/app/types";
import React from "react";
import CategoriesCarousel from "./categories-carousel";
import { BiFilter } from "react-icons/bi";
import Loader from "./loader";
import { useQuery } from "@tanstack/react-query";

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

function SubHeader() {
  //fetching categories
  const { isError, isLoading, data } = useQuery({
    queryKey: ["categories"],
    queryFn: async (): Promise<ICategory[]> => {
      const data = await fetchCategories();
      return data.categories as ICategory[];
    },
  });

  return (
    <div className="pt-2">
      {isLoading && <Loader />}

      {data && (
        <div className="flex justify-between items-center">
          <CategoriesCarousel categories={data} />
          <div className="hidden md:visible md:ml-5 md:flex md:items-center md:justify-between md:gap-5 md:border-gray-200 md:border md:py-2 md:px-5 md:rounded-lg md:hover:cursor-pointer md:hover:shadow-lg md:select-none">
            <BiFilter className="text-1xl" />
            <p>Filters</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubHeader;
