// Datos del menú 
const menuData = {
  'Hamburguesas': [
    { name: 'Hamburguesa Especial', description: 'Lechuga, tomate, hamburguesa casera, jamón y queso', price: 8000 },
    { name: 'Hamburguesa Completa', description: 'Lechuga, tomate, hamburguesa casera, jamón, queso y huevo', price: 9000 },
    { name: 'Hamburguesa Far West', description: 'Lechuga, tomate, hamburguesa casera doble, doble jamón, doble queso, doble huevo, cheddar', price: 15000 }
  ],
  'Lomos': [
    { name: 'Lomo Especial', description: 'Lechuga, tomate, carne de lomo, queso, jamón', price: 15000 },
    { name: 'Lomo Completo', description: 'Lechuga, tomate, carne de lomo, queso, jamón, huevo', price: 16000 },
    { name: 'Lomo Farwest', description: 'Lechuga, tomate, carne de lomo, queso, jamón, huevo, panceta, verduras asadas, queso cheddar', price: 18000 }
  ],
  'Pachatas': [
    { name: 'Pachata Especial', description: 'Lechuga, tomate, carne de lomo, jamón y queso', price: 15000 },
    { name: 'Pachata Completa', description: 'Lechuga, tomate, carne de lomo, jamón, queso y huevo', price: 16000 },
    { name: 'Pachata Far West', description: 'Lechuga, tomate, carne de lomo, jamón, queso, huevo, morrón asado, panceta y cheddar', price: 18000 }
  ],
  'Sándwiches y Tostados': [
    { name: 'Barroluco', description: 'Pan de miga, jamón, queso, huevo, lechuga, tomate y carne de lomo (para 2 personas)', price: 23000 },
    { name: 'Tostado Triple', description: 'Pan de miga, jamón y queso tostado', price: 8000 },
    { name: 'Tostado Americano Triple', description: 'Pan de miga, jamón, queso, lechuga y tomate', price: 9000 }
  ],
  'Papas Fritas': [
    { name: 'Fritas Chicas', description: 'Un clásico, 1 o 2 personas (solo para la mesa)', price: 7000 },
    { name: 'Fritas Muy Grandes', description: 'Muuuuuuuuuy grandes !!! 4 o 5 personas', price: 9000 },
    { name: 'Frita Far West Grande', description: 'Frita, jamón, queso, cheddar, provenzal, mayo casera, 2 huevos fritos', price: 9000 },
    { name: 'Frita Far West Muy Grandes', description: 'Frita, jamón, queso, cheddar, provenzal, mayo casera, 4 huevos fritos', price: 12000 }
  ],
  'Salchipapas': [
    { name: 'Salchipapas Muy Grandes', description: 'Fritas, salchichas, jamón, queso, mayo casera y ketchup', price: 12000 }
  ]
};

// Función para cargar el menú de comida
function loadMenu() {
  const menuList = document.getElementById("menu-list");
  const loading = document.getElementById("menu-loading");

  if (!menuList) return;

  // Limpiar cualquier contenido previo
  menuList.innerHTML = "";

  // Iterar sobre las categorías del menú
  for (const categoryName in menuData) {
    const categoryProducts = menuData[categoryName];

    // Crear un título para la categoría
    const categoryTitle = document.createElement("h3");
    categoryTitle.className = "menu-category";
    categoryTitle.textContent = categoryName;
    menuList.appendChild(categoryTitle);

    // Crear contenedor de productos de la categoría
    const categoryContainer = document.createElement("div");
    categoryContainer.className = "menu-category-container";

    // Crear tarjetas de productos
    categoryProducts.forEach(product => {
      const productCard = createProductCard(product);
      categoryContainer.appendChild(productCard);
    });

    menuList.appendChild(categoryContainer);
  }

  if (loading) loading.style.display = "none";
}

// Función para crear una tarjeta de producto
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "menu-card";

  const name = document.createElement("h4");
  name.className = "menu-item-name";
  name.textContent = product.name;

  const description = document.createElement("p");
  description.className = "menu-item-desc";
  description.textContent = product.description;

  const price = document.createElement("span");
  price.className = "menu-item-price";
  price.textContent = `$${product.price.toLocaleString('es-AR')}`;

  card.appendChild(name);
  card.appendChild(description);
  card.appendChild(price);

  return card;
}

// Función para el menú hamburguesa (móvil)
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav a');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
      menuToggle.setAttribute('aria-expanded', !expanded);
    });

    // Cerrar el menú al hacer clic en un enlace
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  loadMenu();
  initMobileMenu();
});
