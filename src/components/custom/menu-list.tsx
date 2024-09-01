"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-light">
                     Tienda<span className="font-bold"> Birdie</span>
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Productos artesanales y recursos creativos para expresar
                      tu estilo único.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/about" title="Nuestra Historia">
                Conoce más sobre nuestra pasión por el arte y la creatividad.
              </ListItem>

              <ListItem href="/philosophy" title="Filosofía de Diseño">
                Entérate de los principios que guían nuestro proceso creativo.
              </ListItem>

              <ListItem href="/craftsmanship" title="Artesanía y Calidad">
                Descubre nuestro compromiso con la calidad y el detalle en cada
                producto.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {products.map((product) => (
                <ListItem
                  key={product.title}
                  title={product.title}
                  href={product.href}
                >
                  {product.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {services.map((service) => (
                <ListItem
                  key={service.title}
                  title={service.title}
                  href={service.href}
                >
                  {service.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contacto
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const products: { title: string; href: string; description: string }[] = [
  {
    title: "Bordados Personalizados",
    href: "/products/custom-embroidery",
    description:
      "Diseños únicos y personalizados en bordados de alta calidad para todas tus necesidades.",
  },
  {
    title: "Ilustraciones Exclusivas",
    href: "/products/exclusive-illustrations",
    description:
      "Arte original y personalizado que le dará vida a tus proyectos y espacios.",
  },
  {
    title: "Agendas y Anotadores",
    href: "/products/planners-notebooks",
    description:
      "Agendas y anotadores con diseño artístico para organizar tu día a día con estilo.",
  },
  {
    title: "Diseño Gráfico",
    href: "/products/graphic-design",
    description:
      "Servicios de diseño gráfico para crear marcas, logotipos, y más.",
  },
  {
    title: "Recursos Digitales",
    href: "/products/digital-resources",
    description:
      "Colección de recursos gráficos y plantillas digitales para impulsar tu creatividad.",
  },
];

const services: { title: string; href: string; description: string }[] = [
  {
    title: "Asesoría de Diseño",
    href: "/services/design-consulting",
    description:
      "Te ayudamos a conceptualizar y desarrollar ideas creativas para tu marca o proyecto.",
  },
  {
    title: "Talleres Creativos",
    href: "/services/creative-workshops",
    description:
      "Participa en nuestros talleres y aprende nuevas técnicas de ilustración y bordado.",
  },
  {
    title: "Personalización de Productos",
    href: "/services/product-customization",
    description:
      "Ofrecemos servicios de personalización para crear productos únicos según tus especificaciones.",
  },
  {
    title: "Colaboraciones Artísticas",
    href: "/services/artistic-collaborations",
    description:
      "Colabora con nosotros en proyectos artísticos y de diseño únicos.",
  },
];

export default MenuList;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
