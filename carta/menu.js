function generarMenu(categoria, containerId) {
  const container = document.getElementById(containerId);
  container.classList.remove('fade-in'); // Eliminar la clase de desvanecimiento al iniciar

  // Añadir clase de desvanecimiento
  container.classList.add('fade-out');

  // Esperar que el desvanecimiento se complete antes de limpiar el contenido
  setTimeout(() => {
      container.innerHTML = ''; // Limpiar el contenido previo

      // Verificar si la categoría existe en menuItems
      if (menuItems[categoria]) {
          menuItems[categoria].forEach(item => {
              const div = document.createElement('div');
              div.className = 'col-md-6';

              // Generar alérgenos dinámicamente usando el objeto alergenosIcons
              const alergenosHTML = item.alergenos ? item.alergenos.map(alergeno => {
                  const iconUrl = alergenosIcons[alergeno];
                  return iconUrl ? `<img loading="lazy" class="alergeno-icon" data-alergeno="${alergeno}" src="${iconUrl}" alt="${alergeno}">` : '';
              }).join('') : '';

              div.innerHTML = `
                  <div class="box">
                      <div class="single_menu">
                          <div class="food-img">
                              <img loading="lazy" src="${item.img}" alt="${item.nombre}">
                          </div>
                          <div class="menu_content">
                              <div class="top-names">
                                  <p class="nombre">${item.nombre}</p>
                                  <div class="alergenos">
                                      ${alergenosHTML}
                                  </div>
                              </div>
                              <div class="low-content">
                                  <p>${item.descripcion}</p>
                                  <span>${item.precio}</span>
                              </div>
                          </div>
                      </div>
                  </div>`;

              container.appendChild(div);
          });
      } else {
          console.warn(`La categoría "${categoria}" no existe en menuItems.`);
      }

      // Esperar un tiempo antes de mostrar el nuevo contenido
      setTimeout(() => {
          container.classList.remove('fade-out'); // Eliminar clase de desvanecimiento
          container.classList.add('fade-in'); // Agregar clase para mostrar el contenido
      }, 50); // Tiempo muy corto para iniciar la animación

      // Agregar evento click a cada imagen de alérgeno
      document.querySelectorAll('.alergeno-icon').forEach(img => {
          img.addEventListener('click', (e) => {
              mostrarTooltip(e.target);
          });
      });
  }, 500); // Tiempo de duración de la animación de desvanecimiento
}

// Generar el contenido al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  generarMenu('entrantes', 'entrantes-content');
  generarMenu('platos', 'platos-content');
  generarMenu('menu', 'menu-content');
  generarMenu('postres', 'postres-content');
  generarMenu('bebidas', 'bebidas-content');
  generarMenu('cervezas', 'cervezas-content');
  generarMenu('cocteles', 'cocteles-content');
  generarMenu('vinos', 'vinos-content');
});