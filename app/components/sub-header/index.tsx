"use client";
import { ICategory } from "@/app/types";
import React from "react";
import CategoriesCarousel from "./categories-carousel";
import { BiFilter } from "react-icons/bi";
import Loader from "./loader";
import { useQuery } from "@tanstack/react-query";
import { AlertDialog } from "@radix-ui/themes";

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
          <div className="ml-5 flex items-center justify-between gap-5 border-gray-200 border   py-2 px-5 rounded-lg hover:cursor-pointer hover:shadow-lg select-none">
            <BiFilter className="text-1xl" />
            <p>Filters</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubHeader;
