const checkboxes = document.querySelectorAll("input[type=checkbox]");

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
