"use client";

import React from "react";
import Carousel from "@itseasy21/react-elastic-carousel";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

function Loader() {
  const loaderData: string[] = new Array(10).fill("placeholder");
  return (
    <div>
      <Carousel
        itemsToShow={8}
        isRTL={false}
        pagination={false}
        enableSwipe={false}
        showArrows={false}
      >
        {loaderData.map((item, index) => (
          <div key={index} className="w-24 text-center">
            <Skeleton circle width={30} height={30} />
            <p>
              <Skeleton />
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Loader;
