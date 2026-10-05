function order(name, price) {
  const phone = "6285215059711";
  const text = `Hi Mademoiselle Knit 🤎%0AI want to order:%0A${encodeURIComponent(name)}%0APrice: ${encodeURIComponent(price)}%0A`;
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank", "noopener");
}
