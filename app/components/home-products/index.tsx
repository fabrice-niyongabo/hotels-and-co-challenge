"use client";

import { IProduct } from "@/app/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import Loader from "./loader";
import ProductItem from "./product-item";

// const fetchProducts = async (slug: string | null) => {
const fetchProducts = async (slug: string | null, page: number) => {
  const url = slug
    ? "https://airbnb-dgyy.onrender.com/api/products?cat=" +
      slug +
      "&page=" +
      page
    : "https://airbnb-dgyy.onrender.com/api/products?cat=default&page=" + page;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Something went wrong while fetching the products");
  }
  const data = await response.json();
  return data;
};

interface IPage {
  products: IProduct[];
}

function HomeProducts() {
  const searchParams = useSearchParams();
  const categorySlug: string | null = searchParams.get("cat");

  // const { isError, isLoading, data } = useQuery({
  //   queryKey: ["products", categorySlug],
  //   queryFn: async (): Promise<IProduct[]> => {
  //     const data = await fetchProducts(categorySlug);
  //     return data.products as IProduct[];
  //   },
  // });

  const queryKey = ["products", categorySlug];
  const {
    isError,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
  } = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) => fetchProducts(categorySlug, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      // console.log({ lastPage, allPages, lastPageParam, allPageParams });
      return lastPage.products.length === 0 ? undefined : lastPageParam + 1;
    },
  });

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="pt-5">
      {isLoading && <Loader />}
      {data?.pages && (
        <div className="grid  grid-cols-1 lg:grid-cols-4 gap-4">
          {data.pages.map((page: IPage) =>
            page.products.map((item) => (
              <ProductItem key={item._id} product={item} />
            ))
          )}
        </div>
      )}
      {isFetchingNextPage && <Loader />}
      {hasNextPage && !isLoading && !isFetchingNextPage && (
        <div className="p-10 text-center">
          <button
            onClick={() => fetchNextPage()}
            className="bg-slate-900 hover:bg-slate-950 text-white px-5 py-3 rounded-lg outline-none"
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
}

export default HomeProducts;
