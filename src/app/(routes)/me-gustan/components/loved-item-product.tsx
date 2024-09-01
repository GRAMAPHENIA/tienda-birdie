/* eslint-disable @next/next/no-img-element */
import { Product } from "@/types/product";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface LovedItemProductProps {
  product: Product;
}

const LovedItemProduct = (props: LovedItemProductProps) => {
  const { product } = props;
  // const router = useRouter();
  const { removeLovedItem } = useLovedProducts();
  const { addItem } = useCart();

  const addToCheckout = () => {
    addItem(product);
    removeLovedItem(product.id);
  };

  return (
    <li className="flex py-6 border-b">
      <div className="flex justify-between flex-1 px-6">
        <div>
          <h1 className="text-lg font-semibold text-stone-700 dark:text-stone-500">
            {product.attributes.productName}
          </h1>

          <Button className="mt-5 rounded-full" onClick={addToCheckout}>
            Añadir al carrito
          </Button>
        </div>
        <div>
          <Button
            className={cn(
              "rounded-full flex items-center justify-center text-black hover:text-white dark:hover:text-black bg-white border shadow-md p-3 hover:scale-110 transition"
            )}
          >
            <X
              size={15}
              onClick={() => removeLovedItem(product.id)}
              className="text-stone-800"
            />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default LovedItemProduct;
