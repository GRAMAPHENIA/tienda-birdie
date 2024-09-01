import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent>
        <Link href="/categories/web-development" className="block">
          Desarrollo Web
        </Link>
        <Link href="/categories/illustrations" className="block">
          Ilustraciones
        </Link>
        <Link href="/categories/3d-modeling" className="block">
          3D
        </Link>
        <Link href="/categories/music" className="block">
          Música
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default ItemsMenuMobile;
