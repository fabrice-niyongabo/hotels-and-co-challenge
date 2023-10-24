"use client";
import { ICategory } from "@/app/types";
import React from "react";
import Carousel from "@itseasy21/react-elastic-carousel";
import CategoryItem from "./category-item";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

interface IProps {
  categories: ICategory[];
}
function CategoriesCarousel({ categories }: IProps) {
  return (
    <Carousel
      itemsToShow={8}
      isRTL={false}
      pagination={false}
      renderArrow={(props) => (
        <div
          className={`bg-white shadow-md flex items-center justify-center rounded-full h-8 w-8 select-none mt-1 font-semibold hover:shadow-lg hover:cursor-pointer d-blo ${
            props.isEdge ? "hidden" : "block"
          }`}
          onClick={props.onClick}
        >
          {props.type === "PREV" ? <MdNavigateBefore /> : <MdNavigateNext />}
        </div>
      )}
    >
      {categories.map((item) => (
        <CategoryItem key={item._id} category={item} />
      ))}
    </Carousel>
  );
}

export default CategoriesCarousel;
