import { ICategory } from "@/app/types";
import React from "react";
import CategoriesCarousel from "./categories-carousel";
import { BiFilter } from "react-icons/bi";

interface IProps {
  categories: ICategory[];
}
function CategoryItems({ categories }: IProps) {
  return (
    <div className="flex justify-between items-center pt-2">
      <CategoriesCarousel categories={categories} />
      <div className="ml-5 flex items-center justify-between gap-5 border-gray-200 border   py-2 px-5 rounded-lg hover:cursor-pointer hover:shadow-lg select-none">
        <BiFilter className="text-1xl" />
        <p>Filters</p>
      </div>
    </div>
  );
}

export default CategoryItems;
