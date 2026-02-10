document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("productList");

  const products = JSON.parse(localStorage.getItem("products")) || [];

  renderProducts(products);

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
});
