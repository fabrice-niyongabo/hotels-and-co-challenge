import { ICategory } from "@/app/types";
import React from "react";
import CategoriesCarousel from "./categories-carousel";
import { BiFilter } from "react-icons/bi";
import Loader from "./loader";

interface IProps {
  categories: ICategory[] | undefined;
  isLoading: boolean;
  isError: boolean;
}
function SubHeader({ categories, isLoading }: IProps) {
  return (
    <div className="pt-2">
      {isLoading && <Loader />}
      {categories && (
        <div className="flex justify-between items-center">
          <CategoriesCarousel categories={categories} />
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
