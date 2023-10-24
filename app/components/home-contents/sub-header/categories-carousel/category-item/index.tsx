import { ICategory } from "@/app/types";
import React from "react";

interface IProps {
  category: ICategory;
}
function CategoryItem({ category }: IProps) {
  return (
    <div className="flex items-center flex-col justify-center">
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
