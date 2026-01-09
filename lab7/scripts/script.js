// --- GLOBAL VARIABLES ---
let todosProdutos = [];
// Load cart from LocalStorage or initialize empty array
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];



function obterNomeCategoria(cat) {
    if (cat && typeof cat === 'object' && cat.name) {
        return cat.name;
    }
    return cat;
}

// --- INITIALIZATION ---
// Run this when the page loads
document.addEventListener("DOMContentLoaded", () => {
    carregarDados();
    atualizarCarrinhoVisual();
    
    // Setup event listener for the "New Purchase" button
    document.getElementById("btn-reload").addEventListener("click", () => {
        location.reload();
    });
});

// --- DATA FETCHING ---
function carregarDados() {
    // 1. Fetch Categories
    fetch("https://deisishop.pythonanywhere.com/categories/")
        .then(res => res.json())
        .then(data => {
            const select = document.getElementById("filtro-categoria");
            data.forEach(cat => {
                const opt = document.createElement("option");
                // Use helper to extract the correct name
                const nomeCat = obterNomeCategoria(cat);
                opt.value = nomeCat;
                opt.textContent = nomeCat;
                select.appendChild(opt);
            });
        })
        .catch(err => console.error("Error loading categories:", err));

    // 2. Fetch Products
    fetch("https://deisishop.pythonanywhere.com/products/")
        .then(res => res.json())
        .then(data => {
            todosProdutos = data;
            renderizarProdutos(todosProdutos);
        })
        .catch(err => {
            console.error("Error loading products:", err);
            document.getElementById("lista-produtos").innerHTML = 
                "<p style='color:red; text-align:center;'>Error loading products. API might be down.</p>";
        });
}

// --- RENDER PRODUCTS TO SCREEN ---
function renderizarProdutos(lista) {
    const section = document.getElementById("lista-produtos");
    section.innerHTML = ""; // Clear loading message

    if (!lista || lista.length === 0) {
        section.innerHTML = "<p style='text-align:center; width:100%; grid-column: 1 / -1;'>No products found.</p>";
        return;
    }

    lista.forEach(produto => {
        const article = document.createElement("article");
        const preco = parseFloat(produto.price).toFixed(2);
        
        // Use helper here too, just in case product category is an object
        const catNome = obterNomeCategoria(produto.category);

        article.innerHTML = `
            <img src="${produto.image}" alt="${produto.title}">
            <h3>${produto.title}</h3>
            <p style="font-size:0.8rem; color:#888; background:#eee; display:inline-block; padding:2px 8px; border-radius:4px;">${catNome}</p>
            <p style="font-size:1.2rem; font-weight:bold; color:var(--roxo-claro)">${preco} €</p>
            <button onclick="adicionar(${produto.id})">Add to Cart</button>
        `;
        section.appendChild(article);
    });
}

// --- UNIFIED FILTER SYSTEM ---
function atualizarFiltros() {
    const termo = document.getElementById("filtro-pesquisa").value.toLowerCase();
    const catSelect = document.getElementById("filtro-categoria").value;
    const ordem = document.getElementById("filtro-ordenar").value;

    let filtrados = [...todosProdutos];

    // Filter by Category
    if (catSelect !== "todas") {
        filtrados = filtrados.filter(p => {
            const cName = obterNomeCategoria(p.category); 
            return cName === catSelect;
        });
    }

    // Filter by Search Term
    if (termo) {
        filtrados = filtrados.filter(p => p.title.toLowerCase().includes(termo));
    }

    // Sort by Price
    if (ordem === "crescente") {
        filtrados.sort((a,b) => a.price - b.price);
    } else if (ordem === "decrescente") {
        filtrados.sort((a,b) => b.price - a.price);
    }

    renderizarProdutos(filtrados);
}

// Add event listeners for filters
document.getElementById("filtro-pesquisa").addEventListener("input", atualizarFiltros);
document.getElementById("filtro-categoria").addEventListener("change", atualizarFiltros);
document.getElementById("filtro-ordenar").addEventListener("change", atualizarFiltros);

// --- CART LOGIC ---
function adicionar(id) {
    const prod = todosProdutos.find(p => p.id === id);
    carrinho.push(prod);
    guardarCarrinho();
    atualizarCarrinhoVisual();
}

function remover(index) {
    carrinho.splice(index, 1);
    guardarCarrinho();
    atualizarCarrinhoVisual();
}

function guardarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function atualizarCarrinhoVisual() {
    const container = document.getElementById("carrinho-items");
    const totalElem = document.getElementById("valor-total");
    container.innerHTML = "";
    
    let total = 0;

    if (carrinho.length === 0) {
        container.innerHTML = "<p>The cart is empty.</p>";
    } else {
        carrinho.forEach((prod, index) => {
            total += parseFloat(prod.price);
            
            const div = document.createElement("div");
            div.className = "cart-item";
            div.innerHTML = `
                <span style="font-size:0.9rem">${prod.title}</span>
                <div style="display:flex; align-items:center;">
                    <strong>${parseFloat(prod.price).toFixed(2)} €</strong>
                    <button class="btn-remove" onclick="remover(${index})">×</button>
                </div>
            `;
            container.appendChild(div);
        });
    }
    totalElem.textContent = `Total: ${total.toFixed(2)} €`;
}

// --- CHECKOUT LOGIC ---
document.getElementById("form-checkout").addEventListener("submit", (e) => {
    e.preventDefault();

    if (carrinho.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const dados = {
        products: carrinho.map(p => p.id),
        student: document.getElementById("estudante").checked,
        coupon: document.getElementById("cupao").value,
        name: document.getElementById("nome").value
    };

    // Send POST request to API
    fetch("https://deisishop.pythonanywhere.com/buy/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            alert("Error: " + data.error);
        } else {
            // Success: Hide form, Show invoice
            document.getElementById("step-form").classList.add("hidden");
            document.getElementById("step-fatura").classList.remove("hidden");
            
            // Fill invoice data
            document.getElementById("msg-sucesso").textContent = data.message;
            document.getElementById("ref-pagamento").textContent = data.reference;
            document.getElementById("total-pago").textContent = data.totalCost + " €";

            // Clear cart
            carrinho = [];
            guardarCarrinho();
            atualizarCarrinhoVisual();
        }
    })
    .catch(err => alert("Error connecting to the server."));
});