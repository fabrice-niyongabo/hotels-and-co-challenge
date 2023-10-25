"use client";

import { IProduct } from "@/app/types";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import Loader from "./loader";
import ProductItem from "./product-item";

const fetchProducts = async (slug: string | null) => {
  const url = slug
    ? "https://airbnb-dgyy.onrender.com/api/products?cat=" + slug + "&page=1"
    : "https://airbnb-dgyy.onrender.com/api/products?cat=default&page=1";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Something went wrong while fetching the products");
  }
  const data = await response.json();
  return data;
};

function HomeProducts() {
  const searchParams = useSearchParams();
  const categorySlug: string | null = searchParams.get("cat");

  const { isError, isLoading, data } = useQuery({
    queryKey: ["products", categorySlug],
    queryFn: async (): Promise<IProduct[]> => {
      const data = await fetchProducts(categorySlug);
      return data.products as IProduct[];
    },
  });

  return (
    <div className="pt-5">
      {isLoading && <Loader />}
      {data && (
        <div className="grid  grid-cols-1 lg:grid-cols-4 gap-4">
          {data.map((item) => (
            <ProductItem key={item._id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomeProducts;
