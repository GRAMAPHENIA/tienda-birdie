export function formatPrice(price: number) {
  const priceFormated = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0, // No mostrar decimales si no son necesarios
    maximumFractionDigits: 0, // No mostrar decimales si no son necesarios
  });

  // Verificar si el precio tiene centavos diferentes de cero
  const hasDecimals = price % 1 !== 0;

  // Si tiene centavos, formatear con decimales, si no, sin decimales
  if (hasDecimals) {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  } else {
    return priceFormated.format(price);
  }
}
