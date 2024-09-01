/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Key } from "react";

interface CarouselProductProps {
  images: {
    data: {
      id: number;
      attributes: {
        url: string;
      };
    }[];
  };
}

const CarouselProduct = (props: { images: any }) => {
  const { images } = props;

  // console.log(images);

  return (
    <div className="px-16">
      <Carousel>
        <CarouselContent>
          {images.data.map(
            (image: {
              id: Key | null | undefined;
              attributes: { url: any };
            }) => (
              <CarouselItem key={image.id}>
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`}
                  alt="Imagen del producto"
                  className="rounded-lg p-2 border "
                />
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
