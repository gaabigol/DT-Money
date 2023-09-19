export const dateFormatter = new Intl.DateTimeFormat("pt-PT");

export const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "EUR",
});
