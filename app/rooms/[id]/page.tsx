"use client";

import { useState } from "react";
import { IProduct } from "@/app/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import Loader from "./loader";
import { FaStar } from "react-icons/fa";
import { GoShare } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import ImagesModal from "./images-modal";
import HACContainer from "@/app/components/hac-container";

const fetchRooms = async (id: string) => {
  const response = await fetch(
    "https://airbnb-dgyy.onrender.com/api/products/" + id
  );
  if (!response.ok) {
    throw new Error("Something went wrong while fetching the products");
  }
  const data = await response.json();
  return data;
};

function RoomPage() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const { isError, isLoading, data } = useQuery({
    queryKey: ["singleproduct", id],
    queryFn: async (): Promise<IProduct> => {
      const data = await fetchRooms(id as string);
      return data.product as IProduct;
    },
  });

  return (
    <HACContainer>
      <div className="pt-3">
        {isLoading && <Loader />}
        {data && (
          <>
            <h2 className="text-3xl">{data.name}</h2>
            <div className="flex align-center justify-between mt-1">
              <div className="flex align-center justify-between">
                <div className="flex justify-center items-center">
                  <FaStar /> <p>{data.ratings}</p>
                </div>
                <div className="px-2">.</div>
                <p className="underline">{data.address}</p>
              </div>
              <div className="flex align-center justify-between gap-4">
                <div className="flex justify-center underline items-center gap-1 hover:cursor-pointer hover:text-red-500">
                  <GoShare /> <p className="text-sm font-medium">Share</p>
                </div>
                <div className="flex justify-center underline items-center gap-1 hover:cursor-pointer hover:text-red-500">
                  <AiOutlineHeart /> <p className="text-sm font-medium">Save</p>
                </div>
              </div>
            </div>
            <div className="grid  grid-cols-2 gap-4 mt-5">
              <div
                className="hover:cursor-pointer hover:opacity-90"
                onClick={() => setShowModal(true)}
              >
                <img
                  src={data.images[0].secure_url}
                  alt={data.name}
                  className="rounded-2xl h-96 w-full"
                />
              </div>
              <div className="grid  grid-cols-2 gap-4 relative">
                {/* four images section */}
                {data.images.slice(1, 5).map((img, index) => (
                  <div
                    key={index}
                    className="hover:cursor-pointer hover:opacity-90"
                    onClick={() => setShowModal(true)}
                  >
                    <img
                      src={img.secure_url}
                      alt={data.name}
                      className="w-full h-44"
                    />
                  </div>
                ))}

                <div className="absolute bottom-5 right-5">
                  <button
                    className="bg-white py-1 px-3 rounded-md flex items-center justify-center"
                    style={{ border: "1px solid #000" }}
                    onClick={() => setShowModal(true)}
                  >
                    <CgMenuGridO /> <p className="pl-2 m-0">show all photos</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid  grid-cols-2 gap-4 mt-5">
              <div>
                <div className="border-b-2 pb-2">
                  <h3 className="text-2xl">{data.category.name}</h3>
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
            <ImagesModal
              product={data}
              setShowModal={setShowModal}
              showModal={showModal}
            />
          </>
        )}
      </div>
    </HACContainer>
  );
}

export default RoomPage;
