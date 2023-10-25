"use client";

import { useState } from "react";
import { IProduct } from "@/app/types";
import { FaStar } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import { BiHeart } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

interface IProps {
  product: IProduct;
}
function ProductItem({ product }: IProps) {
  const [showControls, setShowControls] = useState(false);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div
      className="relative mb-3 md:mb-0"
      onMouseOver={() => {
        setShowControls(true);
      }}
      onMouseLeave={() => {
        setShowControls(false);
      }}
    >
      <Carousel responsive={responsive} showDots arrows={showControls}>
        {product.images.map((item, index) => (
          <Link href={`/rooms/${product._id}`} key={index}>
            <Image
              src={item.secure_url}
              alt={product.name}
              className="w-full h-60 md:h-64 rounded-xl"
            />
          </Link>
        ))}
      </Carousel>
      <Link href={`/rooms/${product._id}`}>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm font-medium">{product.address}</p>
          <div className="flex items-center justify-center ml-3">
            <FaStar /> <p className="m-0 pl-1">{product.ratings}</p>
          </div>
        </div>
        <p className="m-0 p-0 text-sm text-gray-400">
          {new Date(product.createdAt).toDateString()}
        </p>
        <p className="text-black text-sm font-semibold">
          ${product.price} night
        </p>

        <div className="absolute top-2 right-2">
          <div className="bg-neutral-700 p-1 rounded-full hover:cursor-pointer hover:bg-neutral-950 transition-all duration-700">
            <BiHeart className="text-3xl text-white" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
