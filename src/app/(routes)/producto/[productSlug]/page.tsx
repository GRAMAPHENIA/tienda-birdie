"use client";

import { useGetProductBySlug } from "@/api/GetProductBySlug";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";

import SkeletonProduct from "./components/skeleton-product";
import CarouselProduct from "./components/carousel-product";
import InfoProduct from "./components/info-product";

export default function Page() {
  const params = useParams();
  const { productSlug } = params;
  // console.log(productSlug)

  const { result }: ResponseType = useGetProductBySlug(productSlug);
  // console.log(result)

  if (result === null) {
    return <SkeletonProduct />;
  }

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:p-24">
      <div className="grid sm:grid-cols-2">
        <div>
          <CarouselProduct
            images={result[0].attributes.images}
          ></CarouselProduct>
        </div>

        <div className="sm:px-12">
          <InfoProduct product={result[0]} />
        </div>
      </div>
    </div>
  );
}
