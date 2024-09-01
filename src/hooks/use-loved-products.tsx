import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/types/product";
import { toast } from "@/components/ui/use-toast";

interface UseLovedProductType {
  lovedItems: Product[];
  addLovedItem: (data: Product) => void;
  removeLovedItem: (id: number) => void;
}

export const useLovedProducts = create<UseLovedProductType>()(
  persist(
    (set, get) => ({
      lovedItems: [],
      addLovedItem: (data: Product) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find(
          (item) => item.id === data.id
        );

        if (existingItem) {
          return toast({
            title: "El producto ya existe en la lista 💔",
            variant: "destructive",
          });
        }

        set({
          lovedItems: [...currentLovedItems, data],
        });
        toast({
          title: "Producto añadido a la lista ❤️",
        });
      },
      removeLovedItem: (id: number) => {
        set({
          lovedItems: get().lovedItems.filter((item) => item.id !== id),
        });
        toast({
          title: "Producto eliminado de la lista 🖤",
        });
      },
    }),
    {
      name: "loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
