"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="max-w-5xl p-4 mx-auto md:py-16 sm:px-24">
      <div className="flex flex-col-reverse gap-2 sm:flex-row">
        <div className="flex justify-center sm:min-w-[400px]">
          <Image
            src="/pago.svg"
            alt="imagen-de-compra-realizada"
            width={250}
            height={500}
            className="rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl">¡Gracias por tu compra!</h1>
          <p className="my-3">
            Nos complace informarte que tu pedido ha sido procesado con éxito.
            Apreciamos tu confianza en nosotros y estamos emocionados de que
            hayas elegido nuestros productos.
          </p>
          <p className="my-3">
            Te enviaremos una confirmación a tu correo electrónico con los
            detalles de tu pedido. Si tienes alguna pregunta o necesitas
            asistencia, no dudes en contactarnos. Estamos aquí para ayudarte.
          </p>
          <p className="my-3">
            ¡Esperamos que disfrutes de tu compra y que vuelvas pronto!
          </p>

          <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
