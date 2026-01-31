let products = JSON.parse(localStorage.getItem("products")) || [
  {
    id: 1,
    name: "Rolex Chocolate",
    color: "blanco",
    marca: "New Era",
    equipo: "Dodgers",
    tipo: "gorra",
    image: "images/Relojs/Reloj-9.webp"
  }
];

const productList = document.getElementById("productList");

function renderProducts(list) {
  productList.innerHTML = "";
  list.forEach(p => {
    productList.innerHTML += `
      <div class="product">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>${p.marca} · ${p.equipo}</p>
      </div>
    `;
  });
}

renderProducts(products);
