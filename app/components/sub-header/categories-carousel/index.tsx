"use client";
import { ICategory } from "@/app/types";
import React from "react";
import Carousel from "@itseasy21/react-elastic-carousel";
import CategoryItem from "./category-item";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { isMobile } from "react-device-detect";

interface IProps {
  categories: ICategory[];
}
function CategoriesCarousel({ categories }: IProps) {
  return (
    <Carousel
      itemsToShow={isMobile ? 4 : 9}
      isRTL={false}
      pagination={false}
      enableSwipe={isMobile ? true : false}
      showArrows={isMobile ? false : true}
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
        <CategoryItem key={item._id} category={item} categoryIndex={index} />
      ))}
    </Carousel>
  );
}

export default CategoriesCarousel;
