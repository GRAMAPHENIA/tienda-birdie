"use client";

import { useRouter } from "next/navigation";

import { ShoppingCart, BaggageClaim } from "lucide-react";
import { Heart } from "lucide-react";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import { useCart } from "@/hooks/use-cart";

import Image from "next/image";

import { Abril_Fatface } from "next/font/google";

const abril_fat = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

const NavBar = () => {
  const router = useRouter();
  const cart = useCart();

  return (
    <div className="flex items-center justify-between p-4 mx-auto sm:max-w-4xl md:max-w-6xl">
      {/* <h1
        className={`${abril_fat.className} sm:text-3xl cursor-pointer `}
        onClick={() => router.push("/")}
      >
        Tienda<span className="font-light text-gray-500"> Birdie</span>{" "}
      </h1> */}
      <Image
        src="/logo.svg"
        alt="Logo de la tienda"
        width={100}
        height={100}
        className={`${abril_fat.className} sm:text-3xl cursor-pointer `}
        onClick={() => router.push("/")}
      />
      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <div className="flex sm:hidden">
        <ItemsMenuMobile />
      </div>
      <div className="flex items-center gap-4 ">
        {cart.items.length === 0 ? (
          <ShoppingCart
            strokeWidth={1}
            className="cursor-pointer"
            onClick={() => router.push("/carro-de-compras")}
          />
        ) : (
          <div
            className="flex gap-1"
            onClick={() => router.push("/carro-de-compras")}
          >
            <BaggageClaim strokeWidth={1} className="cursor-pointer" />
            <span>{cart.items.length}</span>
          </div>
        )}

        <Heart
          strokeWidth={1}
          // className={`cursor-pointer ${lovedItems.length > 0 && "fill-black dark:fill-white"}`}
          className="fill-black dark:fill-white cursor-pointer"
          onClick={() => router.push("/me-gustan")}
        />
      </div>
    </div>
  );
};

export default NavBar;
