if (localStorage.getItem("isAdmin") !== "true") {
  window.location.href = "/TecnoImpacto_pagina/htmls/login.html";
}
document.getElementById("adminBtn").addEventListener("click", () => {
  window.location.href = "/TecnoImpacto_pagina/htmls/login.html";
});


function addProduct() {
  const products = getProducts();
  const product = {  
  id: Date.now(),
    name: name.value,
    color: color.value,
    marca: marca.value,
    equipo: equipo.value,
    tipo: tipo.value,
    stock: stock.value,
    image: image.value
  };

  products.push(product);
  saveProducts(products);
  alert("Producto agregado");
}