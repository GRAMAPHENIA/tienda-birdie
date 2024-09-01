/* eslint-disable @next/next/no-img-element */
"use client";

import useGetFeaturedProducts from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import { Product } from "@/types/product";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

import { Card, CardContent } from "./ui/card";

import SkeletonSchema from "./skeletonSchema";
import IconButton from "./icon-button";

import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";

import { Abril_Fatface } from "next/font/google";

const abril_fat = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

const FeaturedProducts = () => {
  const { result, loading }: ResponseType = useGetFeaturedProducts();
  const router = useRouter();
  const { addItem } = useCart();

  return (
    <div>
      <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
        <h1 className={`${abril_fat.className} mb-10 text-5xl font-bold`}>
          Productos que <span className="text-stone-500">destacan</span>
        </h1>
        <Carousel>
          <CarouselContent>
            {loading && <SkeletonSchema grid={3} />}
            {result !== null &&
              result.map((product: Product) => {
                const { attributes, id } = product;
                const { slug, images, productName, style, format } = attributes;

                return (
                  <CarouselItem
                    key={id}
                    className="md:basis-1/2 lg:basis-1/3 group"
                  >
                    <div className="p-1">
                      <Card className="pb-4 border dark:border-gray-300/20 shadow-none rounded-lg bg-gray-50 dark:bg-stone-800/10 dark:shadow-md overflow-hidden">
                        <CardContent className="relative flex items-center justify-center bg-[#ffffff] ">
                          <img
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images.data[0].attributes.url}`}
                            alt="Image featured"
                          />
                          <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5 ">
                            <div className="flex justify-center gap-x-6 text-white">
                              <IconButton
                                onClick={() => router.push(`producto/${slug}`)}
                                icon={<Expand size={15} />}
                                className="text-gray-600 border-gray-500"
                              />
                              <IconButton
                                onClick={() => addItem(product)}
                                icon={<ShoppingCart size={15} />}
                                className="text-gray-600 border-none"
                              />
                            </div>
                          </div>
                        </CardContent>
                        <div className=" flex justify-between gap-4 px-8 mt-4">
                          <h3 className="text-lg font-bold">{productName}</h3>
                          <div className="flex justify-between gap-2">
                            <p className="bg-stone-200 border rounded-full px-4">
                              {style}
                            </p>
                            <p className="bg-gray-200 border rounded-full px-4">
                              {format}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedProducts;
