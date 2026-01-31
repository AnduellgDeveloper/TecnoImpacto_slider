if (localStorage.getItem("auth") !== "true") {
  window.location.href = "login.html";
}

function addProduct() {
  const product = {
    id: Date.now(),
    name: name.value,
    color: color.value,
    marca: marca.value,
    tipo: tipo.value,
    image: image.value
  };

  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  alert("Producto agregado");
}