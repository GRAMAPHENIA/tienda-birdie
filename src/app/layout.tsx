import type { Metadata } from "next";

import { Toaster } from "@/components/ui/toaster";

import NavBar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";

import "./globals.css";

import { Zilla_Slab } from "next/font/google";

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Birdie Borda",
  description: "Creado por Birdie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={zilla.className}>
        <NavBar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
