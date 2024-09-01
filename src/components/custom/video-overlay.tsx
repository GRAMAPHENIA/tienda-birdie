// src/components/ui/VideoOverlay.tsx
import React from "react";
import { Button } from "../ui/button";

import { Abril_Fatface } from "next/font/google";
import Image from "next/image";

const abril_fat = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

const VideoOverlay: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden shadow-md">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1
          className={`${abril_fat.className}  text-4xl md:text-6xl lg:text-9xl font-bold opacity-80`}
        >
          Tienda Birdie
        </h1>

        <p className=" text-lg md:text-xl lg:text-2xl w-[560px]">
          Ilustraciones personalizadas y diseño creativo para dar vida a tus
          ideas.
        </p>
        <Button className="mt-12 text-gray-100">Saber Más</Button>
      </div>
    </div>
  );
};

export default VideoOverlay;
