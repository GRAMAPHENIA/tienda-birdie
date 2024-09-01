import { ProductType } from "@/types/product";
// import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import ProductStyleFormat from "@/components/shared/product-style-format";
import ProductImageMiniature from "@/components/shared/product-image-miniature";

interface CartItemProps {
  product: ProductType;
}

const CartItem = (props: { product: any }) => {
  const { product } = props;
  // const router = useRouter();
  const { removeItem } = useCart();

  return (
    <li className="flex py-6 border-b">
      <ProductImageMiniature
        slug={product.attributes.slug}
        url={product.attributes.images.data[0].attributes.url}
      />
      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold text-stone-600 dark:text-stone-400">
            {product.attributes.productName}
          </h2>
          <p className="font-medium">{formatPrice(product.attributes.price)}</p>
          <div className="flex items-center justify-between gap-3 mt-2"></div>
          <ProductStyleFormat
            Style={product.attributes.style}
            format={product.attributes.format}
          />
        </div>
        <div>
          <button
            onClick={() => removeItem(product.id)}
            className={cn(
              "rounded-full flex items-center justify-center text-black hover:text-white dark:hover:text-black bg-white border shadow-md p-3 hover:scale-110 transition"
            )}
          >
            <X size={12} className="text-stone-800" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
