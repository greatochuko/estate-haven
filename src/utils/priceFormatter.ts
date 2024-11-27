export function formatPrice(price: number) {
  let suffix = "";
  let formattedPrice = price;
  if (formattedPrice / 1000000000000 >= 1) {
    suffix = "t";
    formattedPrice = Number((formattedPrice / 1000000000000).toFixed(1));
    return formattedPrice + suffix;
  }

  if (formattedPrice / 1000000000 >= 1) {
    suffix = "b";
    formattedPrice = Number((formattedPrice / 1000000000).toFixed(1));
    return formattedPrice + suffix;
  }

  if (formattedPrice / 1000000 >= 1) {
    suffix = "m";
    formattedPrice = Number((formattedPrice / 1000000).toFixed(1));
    return formattedPrice + suffix;
  }

  return price.toLocaleString();
}
