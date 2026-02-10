function getProducts() {
  const stored = JSON.parse(localStorage.getItem("products"));

  if (!stored || stored.length === 0) {
    localStorage.setItem("products", JSON.stringify(BASE_PRODUCTS));
    return BASE_PRODUCTS;
  }

  let merged = [...stored];

  BASE_PRODUCTS.forEach(base => {
    if (!merged.find(p => p.id === base.id)) {
      merged.push(base);
    }
  });

  localStorage.setItem("products", JSON.stringify(merged));
  return merged;
}

const products = getProducts();
renderProducts(products);
