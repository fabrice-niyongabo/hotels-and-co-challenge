"use client";

import { ICategory } from "@/app/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import Image from "next/image";

interface IProps {
  category: ICategory;
  categoryIndex: number;
}
function CategoryItem({ category, categoryIndex }: IProps) {
  const searchParams = useSearchParams();
  const categorySlug: string | null = searchParams.get("cat");
  return (
    <Link href={`/?cat=${category.slug}`}>
      <div
        className={`flex items-center flex-col justify-center  pb-2 hover:cursor-pointer hover:opacity-100 hover:border-b-2 ${
          categorySlug === null && categoryIndex === 0
            ? "border-b-2 border-b-black opacity-100  font-medium"
            : categorySlug === category.slug
            ? "border-b-2 border-b-black opacity-100 font-medium"
            : "opacity-60"
        }`}
      >
        <Image
          src={category.image.secure_url}
          alt={category.name}
          height={24}
          width={24}
        />
        <p className="text-sm text-center">{category.name}</p>
      </div>
    </Link>
  );
}

export default CategoryItem;
