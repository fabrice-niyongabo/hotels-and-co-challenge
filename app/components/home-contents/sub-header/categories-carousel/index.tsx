"use client";
import { ICategory } from "@/app/types";
import React from "react";
import Carousel from "@itseasy21/react-elastic-carousel";
import CategoryItem from "./category-item";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

interface IProps {
  categories: ICategory[];
  selectedCategory: ICategory | undefined;
  setSelectedCategory: any;
}
function CategoriesCarousel({
  categories,
  selectedCategory,
  setSelectedCategory,
}: IProps) {
  return (
    <Carousel
      itemsToShow={8}
      isRTL={false}
      pagination={false}
      enableSwipe={false}
      renderArrow={(props) => (
        <div
          // className={`bg-white shadow-md flex items-center justify-center rounded-full h-8 w-8 select-none mt-1 font-semibold hover:shadow-lg hover:cursor-pointer ${
          className={`bg-white shadow-md flex items-center justify-center rounded-full h-8 w-8 select-none mt-1 font-semibold hover:shadow-lg ${
            props.isEdge
              ? "cursor-not-allowed opacity-70"
              : "cursor-pointer opacity-1"
          }`}
          onClick={props.isEdge ? undefined : props.onClick}
        >
          {props.type === "PREV" ? <MdNavigateBefore /> : <MdNavigateNext />}
        </div>
      )}
    >
      {categories.map((item, index) => (
        <CategoryItem
          key={item._id}
          category={item}
          categoryIndex={index}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </Carousel>
  );
}

export default CategoriesCarousel;
