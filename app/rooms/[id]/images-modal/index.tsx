import { IProduct } from "@/app/types";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GoShare } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import { returnImageDimensions } from "@/app/util/returnImageDimensions";

interface Iprops {
  product: IProduct;
  showModal: boolean;
  setShowModal: any;
}

function ImagesModal({ product, showModal, setShowModal }: Iprops) {
  return (
    <div
      className={`fixed w-full h-full left-0 bg-white z-1 transition-all duration-1000 ${
        showModal ? "bottom-0" : "-bottom-full"
      }`}
    >
      {/* {showModal && ( */}
      <div className="p-5">
        <div className="flex items-center justify-between py-3 md:p-3">
          <div
            onClick={() => setShowModal(false)}
            className="p-1 bg-gray-300 rounded-full md:bg-transparent md:hover:bg-gray-300 hover:cursor-pointer transition-all duration-300"
          >
            <IoIosArrowBack className="text-2xl" />
          </div>
          <div className="flex align-center justify-between gap-4">
            <div className="flex justify-center items-center gap-1 underline hover:cursor-pointer hover:text-red-500">
              <GoShare /> <p className="text-sm font-medium">Share</p>
            </div>
            <div className="flex justify-center items-center gap-1 hover:cursor-pointer hover:text-red-500">
              <AiOutlineHeart /> <p className="text-sm font-medium">Save</p>
            </div>
          </div>
        </div>
        <div className="w-full overflow-y-auto h-screen">
          <div className="py-16">
            {product.images.map((image, index) => (
              <div className="w-full md:w-1/2  mx-auto mb-3" key={index}>
                <Image
                  src={image.secure_url}
                  alt=""
                  className="max-w-full rounded-md"
                  width={
                    image.width !== 0
                      ? image.width
                      : returnImageDimensions(image.secure_url, "width")
                  }
                  height={
                    image.height !== 0
                      ? image.height
                      : returnImageDimensions(image.secure_url, "height")
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

export default ImagesModal;
