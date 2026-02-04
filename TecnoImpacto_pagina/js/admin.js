if (localStorage.getItem("isAdmin") !== "true") {
  window.location.href = "/TecnoImpacto_pagina/htmls/login.html";
}
document.getElementById("adminBtn").addEventListener("click", () => {
  window.location.href = "/TecnoImpacto_pagina/htmls/login.html";
});


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