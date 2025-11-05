/*--- variables ---*/

const CART_KEY = "produtos-selecionados"; // localStorage key
let carrinho = [];                        // shopping cart array
let produtos = [];                        // all fetched products
const API_BASE = "https://deisishop.pythonanywhere.com";
const PRODUCTS_URL = `${API_BASE}/products/`;

/* ==========================================================
   STARTUP
   ========================================================== */
window.addEventListener("DOMContentLoaded", async () => {
  // loads basket from localStorage
  try {
    const saved = localStorage.getItem(CART_KEY);
    if (saved) carrinho = JSON.parse(saved);
  } catch {
    carrinho = [];
  }

  // filter bars for each page 
  criarFiltros("tshirts");
  criarFiltros("socks");
  criarFiltros("mugs");

  // get product list 
  await fetchProducts();

  // put in correct sections
  criarProduto(produtos);

  // update basket
  atualizarCesto();

  // DEISI student checkbox 
  const basketInner = document.querySelector("#basket .inner-container");
  if (basketInner) {
    const studentBox = document.createElement("div");
    studentBox.className = "student-check";
    studentBox.innerHTML = `
      <label>
        <input type="checkbox" id="student-checkbox" />
        Are you a DEISI student?
      </label>
      <p class="discount-msg"></p>
    `;
    basketInner.appendChild(studentBox);
    document
      .querySelector("#student-checkbox")
      ?.addEventListener("change", atualizarCesto);
  }
});


/* ==========================================================
   FILTER BAR 
   ========================================================== */
function criarFiltros(sectionId) {
  const page = document.querySelector(`#${sectionId} .page-container`);
  if (!page) return;

  // for that page
  const filterBar = document.createElement("div");
  filterBar.className = "filter-bar";
  filterBar.innerHTML = `
    <input type="text" id="search-${sectionId}" placeholder="Search product..." />
    <select id="sort-${sectionId}">
      <option value="default">Order by price</option>
      <option value="price-asc">Price ↑</option>
      <option value="price-desc">Price ↓</option>
    </select>
  `;
  page.prepend(filterBar);

  // events happen only for that section
  document
    .querySelector(`#search-${sectionId}`)
    ?.addEventListener("input", () => aplicarFiltros(sectionId));
  document
    .querySelector(`#sort-${sectionId}`)
    ?.addEventListener("change", () => aplicarFiltros(sectionId));
}


/* ==========================================================
   FETCH PRODUCTS FROM API
   ========================================================== */
async function fetchProducts() {
  try {
    const res = await fetch(PRODUCTS_URL);
    if (!res.ok) throw new Error(res.statusText);
    produtos = await res.json();
  } catch (e) {
    console.error("Error fetching products:", e);
  }
}


/* ==========================================================
   PRODUCT CARDS 
   ========================================================== */
function criarProduto(lista, sectionId = "all") {
  // containers
  const tshirtContainer = document.getElementById("tshirt-list");
  const sockContainer = document.getElementById("sock-list");
  const mugContainer = document.getElementById("mug-list");

  // only clears section that needs updating
  if (sectionId === "tshirts") tshirtContainer.innerHTML = "";
  else if (sectionId === "socks") sockContainer.innerHTML = "";
  else if (sectionId === "mugs") mugContainer.innerHTML = "";
  else [tshirtContainer, sockContainer, mugContainer].forEach(c => (c.innerHTML = ""));

  // loops through all products in list and places them
  lista.forEach((produto) => {
    const art = document.createElement("article");
    art.className = "product";
    art.innerHTML = `
      <img src="${produto.image}" alt="${produto.title}">
      <h3>${produto.title}</h3>
      <p class="price">€ ${produto.price.toFixed(2)}</p>
      <button class="add-to-cart" data-id="${produto.id}">add to cart</button>
    `;

    const cat = produto.category?.toLowerCase() || "";

    // sorting logic
    if (cat.includes("shirt") && (sectionId === "tshirts" || sectionId === "all")) {
      tshirtContainer.appendChild(art);
    } else if (cat.includes("meia") && (sectionId === "socks" || sectionId === "all")) {
      sockContainer.appendChild(art);
    } else if (cat.includes("caneca") && (sectionId === "mugs" || sectionId === "all")) {
      mugContainer.appendChild(art);
    }
  });

  // event listeners for add to cart buttons
  document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", e => {
      const id = Number(e.target.dataset.id);
      adicionar(id);
    });
  });
}


/* ==========================================================
   FILTER & SORT - PAGE SPECIFIC 
   ========================================================== */
function aplicarFiltros(sectionId) {
  // search and sort inputs for specific section
  const searchInput = document.querySelector(`#search-${sectionId}`);
  const sortSelect = document.querySelector(`#sort-${sectionId}`);

  const search = searchInput?.value.toLowerCase() || "";
  const sort = sortSelect?.value || "default";

  // only products that belong to this page
  let filtrados = produtos.filter(p => {
    const cat = p.category?.toLowerCase() || "";
    if (sectionId === "tshirts" && cat.includes("shirt")) return true;
    if (sectionId === "socks" && cat.includes("meia")) return true;
    if (sectionId === "mugs" && cat.includes("caneca")) return true;
    return false;
  });

  // apply search filter
  if (search) {
    filtrados = filtrados.filter(p =>
      p.title.toLowerCase().includes(search)
    );
  }

  // apply sorting
  if (sort === "price-asc") filtrados.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") filtrados.sort((a, b) => b.price - a.price);

  // rebuild section
  criarProduto(filtrados, sectionId);
}



/* ==========================================================
   CART MANAGEMENT
   ========================================================== */
function adicionar(id) {
  const produto = produtos.find(p => p.id === id);
  if (!produto) return;
  const found = carrinho.find(i => i.id === id);
  if (found) found.quantidade = (found.quantidade || 1) + 1;
  else carrinho.push({ ...produto, quantidade: 1 });
  atualizarCesto();
}

function remover(id) {
  const idx = carrinho.findIndex(i => i.id === id);
  if (idx === -1) return;
  carrinho[idx].quantidade--;
  if (carrinho[idx].quantidade <= 0) carrinho.splice(idx, 1);
  atualizarCesto();
}

function atualizarCesto() {
  const sec = document.querySelector("#basket-items");
  if (!sec) return;
  sec.innerHTML = "";
  let total = 0;

  if (carrinho.length === 0) {
    sec.innerHTML = "<p>Your shopping cart is empty.</p>";
  }

  carrinho.forEach(item => {
    total += item.price * (item.quantidade || 1);
    const art = document.createElement("article");
    art.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>€ ${(item.price * item.quantidade).toFixed(2)} (${item.quantidade}x)</p>
      <button onclick="remover(${item.id})">-</button>
      <button onclick="adicionar(${item.id})">+</button>
    `;
    sec.appendChild(art);
  });

  // apply DEISI student discount if checkbox is checked
    const student = document.querySelector("#student-checkbox");
    const discountMsg = document.querySelector(".discount-msg");
    if (student && student.checked) {
        total *= 0.75; // 25% off
        if (discountMsg) discountMsg.textContent = "25% DEISI student discount applied!";
        } else if (discountMsg) {
            discountMsg.textContent = "";
  }

  let totalEl = document.getElementById("basket-total");
  if (!totalEl) {
    totalEl = document.createElement("p");
    totalEl.id = "basket-total";
    sec.insertAdjacentElement("afterend", totalEl);
  }
  totalEl.textContent = `Total: € ${total.toFixed(2)}`;

  try {
    localStorage.setItem(CART_KEY, JSON.stringify(carrinho));
  } catch (e) {
    console.error("Error saving cart:", e);
  }
}