import { ICategory } from "@/app/types";
import React from "react";
import CategoriesCarousel from "./categories-carousel";

interface IProps {
  categories: ICategory[];
}
function CategoryItems({ categories }: IProps) {
  return (
    <div className="flex justify-between items-center">
      <CategoriesCarousel categories={categories} />
      <div>CategoryItems {categories.length}</div>
    </div>
  );
}

export default CategoryItems;
