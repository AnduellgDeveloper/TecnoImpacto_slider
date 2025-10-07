// Función para alternar entre tema claro y oscuro
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const currentIcon = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-theme')) {
        currentIcon.textContent = '☀️'; // Cambia a ícono de sol para tema claro
    } else {
        currentIcon.textContent = '🌙'; // Cambia a ícono de luna para tema oscuro
    }
}

// Función para mostrar u ocultar el dropdown de cada sección
function toggleDropdown(section) {
    const dropdown = document.getElementById(`${section}-dropdown`);
    const isVisible = dropdown.style.display === 'block';
    // Ocultar todos los dropdowns
    document.querySelectorAll('.dropdown-content').forEach(drop => drop.style.display = 'none');
    // Mostrar el dropdown actual
    dropdown.style.display = isVisible ? 'none' : 'block';
}

// Función para cambiar la imagen del producto en el carrusel
function updateProductImage(category, productId) {
    const productImage = document.getElementById('product-image');

    // Simulación de imágenes diferentes para cada categoría
    if (category === 'gorras') {
        productImage.src = productId === 1 ? 'gorra_deportiva.jpg' : 'gorra_beisbol.jpg';
    } else if (category === 'relojes') {
        productImage.src = productId === 1 ? 'reloj_deportivo.jpg' : 'reloj_pulsera.jpg';
    } else if (category === 'forros') {
        productImage.src = productId === 1 ? 'forro_fino.jpg' : 'forro_protector.jpg';
    } else if (category === 'gafas') {
        productImage.src = productId === 1 ? 'gafas_sol.jpg' : 'gafas_lectura.jpg';
    }
}
