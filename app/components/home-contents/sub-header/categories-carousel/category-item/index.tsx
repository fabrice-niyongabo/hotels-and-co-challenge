import { ICategory } from "@/app/types";
import React from "react";

interface IProps {
  category: ICategory;
  selectedCategory: ICategory | undefined;
  setSelectedCategory: any;
  categoryIndex: number;
}
function CategoryItem({
  category,
  selectedCategory,
  setSelectedCategory,
  categoryIndex,
}: IProps) {
  return (
    <div
      onClick={() => setSelectedCategory(category)}
      className={`flex items-center flex-col justify-center opacity-60 pb-2 hover:cursor-pointer hover:opacity-100 hover:border-b-2 hover:border-b-slate-400 ${
        selectedCategory === undefined && categoryIndex === 0
          ? "border-b-2 border-b-black opacity-100  font-medium"
          : selectedCategory?._id === category._id
          ? "border-b-2 border-b-black opacity-100 font-medium"
          : ""
      }`}
    >
      <img
        src={category.image.secure_url}
        alt={category.name}
        height={24}
        width={24}
      />
      <p className="text-sm text-center">{category.name}</p>
    </div>
  );
}

export default CategoryItem;
