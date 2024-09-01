// import { Product } from "@/types/product";
// import { Separator } from "@/components/ui/separator";
// import { formatPrice } from "@/lib/formatPrice";
// import { Button } from "@/components/ui/button";
// import { Heart } from "lucide-react";
// import { useCart } from "@/hooks/use-cart";
// import { useLovedProducts } from "@/hooks/use-loved-products";
// // import ProductTasteOrigin from "@/components/shared/product-taste-origin";

// export type InfoProductProps = {
//   product: Product;
// };

// const InfoProduct = (props: InfoProductProps) => {
//   const { product } = props;
//   const { addItem } = useCart();
//   const { addLovedItem, lovedItems } = useLovedProducts();

//   // console.log(lovedItems);

//   return (
//     <div className="p-6">
//       <div className="justify-between mb-3 sm:flex">
//         <h1 className="text-2xl">{product.attributes.productName}</h1>

//         {/* REFACTORIZADO */}

//         {/* <div className="flex items-center justify-between gap-3 mt-3 md:mt-0 md:px-0">
//           <p className="px-2 text-xs py-1 text-white bg-black/50 rounded-full dark:bg-black/50 dark:text-white w-fit border border-white/30">
//             {product.attributes.taste}
//           </p>
//           <p className="px-2 text-xs py-1 bg-stone-50/70 backdrop-blur-lg rounded-full dark:bg-white/95 text-black w-fit border dark:border-white/30">
//             {product.attributes.origin}
//           </p>
//         </div> */}

//         {/* <ProductTasteOrigin
//           origin={product.attributes.origin}
//           taste={product.attributes.taste}
//         /> */}
//       </div>

//       <Separator />
//       <p className="my-3">{product.attributes.description}</p>

//       <Separator />

//       <p className="my-4 text-2xl">{formatPrice(product.attributes.price)}</p>

//       <div className="flex items-center gap-5">
//         <Button className="w-full" onClick={() => addItem(product)}>
//           Comprar
//         </Button>

//         <Heart
//           width={30}
//           strokeWidth={1}
//           className="transition duration-300 cursor-pointer hover:fill-black dark:hover:fill-white"
//           onClick={() => addLovedItem(product)}
//         />
//       </div>
//     </div>
//   );
// };

// export default InfoProduct;

import { useState, useEffect } from "react";
import { Product } from "@/types/product";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";

export type InfoProductProps = {
  product: Product;
};

const InfoProduct = (props: InfoProductProps) => {
  const { product } = props;
  const { addItem } = useCart();
  const { addLovedItem, lovedItems } = useLovedProducts();
  const [isLoved, setIsLoved] = useState(false);

  useEffect(() => {
    const isProductLoved = lovedItems.some((item) => item.id === product.id);
    setIsLoved(isProductLoved);
  }, [lovedItems, product.id]);

  const handleLoveClick = () => {
    if (!isLoved) {
      addLovedItem(product);
    }
    setIsLoved(!isLoved);
  };

  return (
    <div className="p-6">
      <div className="justify-between mb-3 sm:flex">
        <h1 className="text-2xl">{product.attributes.productName}</h1>
        <div className="flex items-center justify-between gap-3 mt-3 md:mt-0 md:px-0">
          <p className="px-2 text-xs py-1 text-white bg-black/50 rounded-full dark:bg-black/50 dark:text-white w-fit border border-white/30">
            {product.attributes.style}
          </p>
          <p className="px-2 text-xs py-1 bg-stone-50/70 backdrop-blur-lg rounded-full dark:bg-white/95 text-black w-fit border dark:border-white/30">
            {product.attributes.format}
          </p>
        </div>
      </div>
      <Separator />
      <p className="my-3">{product.attributes.description}</p>
      <Separator />
      <p className="my-4 text-2xl">{formatPrice(product.attributes.price)}</p>
      <div className="flex items-center gap-5">
        <Button className="w-full" onClick={() => addItem(product)}>
          Comprar
        </Button>
        <Heart
          width={30}
          strokeWidth={1}
          className={`transition duration-300 cursor-pointer ${
            isLoved
              ? "fill-black dark:fill-white"
              : "hover:fill-black dark:hover:fill-white"
          }`}
          onClick={handleLoveClick}
        />
      </div>
    </div>
  );
};

export default InfoProduct;
