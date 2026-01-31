const checkboxes = document.querySelectorAll("input[type=checkbox]");
const menuBtn = document.getElementById("menuBtn");
const filtersPanel = document.getElementById("filtersPanel");

// Evento y animacion del boton de menu
menuBtn.addEventListener("click", () => {
  filtersPanel.classList.toggle("active");
});

menuBtn.addEventListener("click", () => {
  filtersPanel.classList.toggle("active");
  menuBtn.textContent = filtersPanel.classList.contains("active") ? "✖" : "☰";
});

document.addEventListener("click", (e) => {
  if (
    filtersPanel.classList.contains("active") &&
    !filtersPanel.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    filtersPanel.classList.remove("active");
    menuBtn.textContent = "☰";
  }
});

checkboxes.forEach(cb => {
  cb.addEventListener("change", applyFilters);
});

function applyFilters() {
  const colors = getCheckedValues("filter-color");
  const marcas = getCheckedValues("filter-marca");
  const equipos = getCheckedValues("filter-equipo");

  let filtered = products.filter(p =>
    (colors.length === 0 || colors.includes(p.color)) &&
    (marcas.length === 0 || marcas.includes(p.marca)) &&
    (equipos.length === 0 || equipos.includes(p.equipo))
  );

  renderProducts(filtered);
}

function getCheckedValues(className) {
  return [...document.querySelectorAll(`.${className}:checked`)]
    .map(cb => cb.value);
}


function toggleFilters() {
  document.getElementById("filtersPanel").classList.toggle("active");
}
