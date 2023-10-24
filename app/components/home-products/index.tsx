"use client";

import { ICategory } from "@/app/types";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

function HomeProducts() {
  const searchParams = useSearchParams();
  const categorySlug: string | null = searchParams.get("cat");

  return <>products</>;
}

export default HomeProducts;
