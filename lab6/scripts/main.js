const produtos = [
	{
		"id": 1,
		"title": "Fjallraven - Mochila Foldsack nº 1, acomoda 15 laptops",
		"price": 109.95,
		"description": "Sua mochila perfeita para o uso diário e caminhadas na floresta. Guarde seu laptop (de até 15 polegadas) no compartimento acolchoado.",
		"category": "roupas masculinas",
		"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
		"rating": { "rate": 3.9, "count": 120 }
	},
	{
		"id": 2,
		"title": "Camisetas masculinas casuais premium slim fit",
		"price": 22.3,
		"description": "Estilo justo, manga longa raglan contrastante, carcela Henley com três botões, tecido leve e macio para uso confortável.",
		"category": "roupas masculinas",
		"image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
		"rating": { "rate": 4.1, "count": 259 }
	},
	{
		"id": 3,
		"title": "Jaqueta de algodão masculina",
		"price": 55.99,
		"description": "Ótimos casacos para diversas ocasiões, como trabalho, caminhadas, acampamentos, escaladas, ciclismo e viagens.",
		"category": "roupas masculinas",
		"image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
		"rating": { "rate": 4.7, "count": 500 }
	},
	{
		"id": 4,
		"title": "Casual Slim Fit Masculino",
		"price": 15.99,
		"description": "A cor pode ser ligeiramente diferente entre a tela e a prática.",
		"category": "roupas masculinas",
		"image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
		"rating": { "rate": 2.1, "count": 430 }
	},
	{
		"id": 5,
		"title": "Pulseira de corrente feminina John Hardy Legends Naga",
		"price": 695.0,
		"description": "Inspirada no mítico dragão aquático Naga. Use voltada para dentro para amor e abundância ou para fora para proteção.",
		"category": "joias",
		"image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
		"rating": { "rate": 4.6, "count": 400 }
	},
	{
		"id": 6,
		"title": "Pequeno Micropave de Ouro Maciço",
		"price": 168.0,
		"description": "Satisfação garantida. Devolva ou troque qualquer pedido em até 30 dias.",
		"category": "joias",
		"image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
		"rating": { "rate": 3.9, "count": 70 }
	},
	{
		"id": 7,
		"title": "Princesa banhada a ouro branco",
		"price": 9.99,
		"description": "Anel de noivado solitário com diamantes, presente perfeito para ocasiões especiais.",
		"category": "joias",
		"image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
		"rating": { "rate": 3.0, "count": 400 }
	},
	{
		"id": 8,
		"title": "Coruja perfurada banhada a ouro rosa",
		"price": 10.99,
		"description": "Brincos tipo túnel banhados a ouro rosé. Feitos de aço inoxidável 316L.",
		"category": "joias",
		"image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
		"rating": { "rate": 1.9, "count": 100 }
	},
	{
		"id": 9,
		"title": "Disco rígido externo portátil WD Elements 2TB",
		"price": 64.0,
		"description": "Compatibilidade com USB 3.0 e USB 2.0. Alta capacidade e desempenho.",
		"category": "eletrônicos",
		"image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
		"rating": { "rate": 3.3, "count": 203 }
	},
	{
		"id": 10,
		"title": "SanDisk SSD PLUS 1TB SSD interno - SATA III",
		"price": 109.0,
		"description": "Aumenta a velocidade de inicialização e resposta do sistema.",
		"category": "eletrônicos",
		"image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
		"rating": { "rate": 2.9, "count": 470 }
	},
	{
		"id": 11,
		"title": "SSD Silicon Power 256GB A55",
		"price": 109.0,
		"description": "Velocidades de transferência elevadas com tecnologia NAND 3D.",
		"category": "eletrônicos",
		"image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
		"rating": { "rate": 4.8, "count": 319 }
	},
	{
		"id": 12,
		"title": "WD Gaming Drive 4TB para PS4",
		"price": 114.0,
		"description": "Expanda sua experiência de jogo no PS4, rápido e fácil.",
		"category": "eletrônicos",
		"image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
		"rating": { "rate": 4.8, "count": 400 }
	},
	{
		"id": 13,
		"title": "Acer SB220Q bi 21,5\" Full HD IPS",
		"price": 599.0,
		"description": "Monitor IPS widescreen Full HD 1920x1080.",
		"category": "eletrônicos",
		"image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
		"rating": { "rate": 2.9, "count": 250 }
	},
	{
		"id": 14,
		"title": "Monitor gamer curvo Samsung CHG90 49\"",
		"price": 999.99,
		"description": "Super ultrawide QLED 144Hz com HDR.",
		"category": "eletrônicos",
		"image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
		"rating": { "rate": 2.2, "count": 140 }
	},
	{
		"id": 15,
		"title": "BIYLACLESEN Jaqueta feminina 3 em 1",
		"price": 56.99,
		"description": "Casaco de inverno 3 em 1, removível, quente e confortável.",
		"category": "roupas femininas",
		"image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
		"rating": { "rate": 2.6, "count": 235 }
	},
	{
		"id": 16,
		"title": "Jaqueta feminina de couro sintético",
		"price": 29.95,
		"description": "Material sintético com capuz removível, estilo moderno.",
		"category": "roupas femininas",
		"image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
		"rating": { "rate": 2.9, "count": 340 }
	},
	{
		"id": 17,
		"title": "Jaqueta de chuva feminina corta-vento",
		"price": 39.99,
		"description": "Capa de chuva leve com cordão e bolsos laterais.",
		"category": "roupas femininas",
		"image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
		"rating": { "rate": 3.8, "count": 679 }
	},
	{
		"id": 18,
		"title": "MBJ Feminino Manga Curta Gola Canoa",
		"price": 9.85,
		"description": "95% Rayon, 5% Spandex. Tecido leve e confortável.",
		"category": "roupas femininas",
		"image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
		"rating": { "rate": 4.7, "count": 130 }
	},
	{
		"id": 19,
		"title": "Opna Moisture de manga curta feminina",
		"price": 7.95,
		"description": "100% poliéster, leve e respirável.",
		"category": "roupas femininas",
		"image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
		"rating": { "rate": 4.5, "count": 146 }
	},
	{
		"id": 20,
		"title": "Camiseta feminina DANVOUY casual",
		"price": 12.99,
		"description": "95% algodão, 5% elastano. Casual, confortável e estilosa.",
		"category": "roupas femininas",
		"image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
		"rating": { "rate": 3.6, "count": 145 }
	}
];

let carrinho = [];

// uses a consistent localStorage key for the cart
const CART_KEY = 'produtos-selecionados';

// initialises when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
	try {
		const salvo = localStorage.getItem(CART_KEY);
		if (salvo) {
			carrinho = JSON.parse(salvo);
		}
	} catch (e) {
		console.error('Erro ao ler o carrinho do localStorage', e);
		carrinho = [];
	}

	criarProduto();
	atualizarCesto();

});

function criarProduto() {
	// ensure target containers exist for each category
	function ensureSection(parentSelector, id, className) {
		var parent = document.querySelector(parentSelector);
		if (!parent) return null;
		var el = document.getElementById(id);
		if (!el) {
			el = document.createElement('section');
			el.id = id;
			if (className) el.className = className;
			parent.appendChild(el);
		}
		return el;
	}

	var fashionContainer = document.getElementById('product-list') || ensureSection('#fashion', 'product-list', 'products');
	var jewelleryContainer = document.getElementById('jewellery-list') || ensureSection('#jewellery', 'jewellery-list', 'products');
	var techContainer = document.getElementById('tech-list') || ensureSection('#tech', 'tech-list', 'products');

	// puts basket container inside shopping basket page
	var basketSection = document.getElementById('basket');
	var basketContainer = document.getElementById('basket-items');
	
	// log and creates a fallback in document.body of containers
	if (!fashionContainer) fashionContainer = ensureSection('body', 'product-list', 'products');
	if (!jewelleryContainer) jewelleryContainer = ensureSection('body', 'jewellery-list', 'products');
	if (!techContainer) techContainer = ensureSection('body', 'tech-list', 'products');
	if (!basketContainer) basketContainer = ensureSection('body', 'basket-items', 'basket');

	// clear containers
	[fashionContainer, jewelleryContainer, techContainer].forEach(function (c) { if (c) c.innerHTML = ''; });

	// create product article 
	function createProductArticle(produto, i) {
		var art = document.createElement('article');
		art.className = 'product';
		art.innerHTML = `
			<img src="${produto.image}" alt="${produto.title}">
			<h3>${produto.title}</h3>
			<p class="price">Price: ${produto.price.toFixed(2)} €</p>
			<button onclick="adicionar(${i})" class="add-to-cart">add to cart</button>
		`;
		return art;
	}

	// distribute products by category
	produtos.forEach(function (produto, i) {
		var cat = (produto.category || '').toLowerCase();
		var target = fashionContainer; // default
		if (cat.includes('joia') || cat.includes('joias') || cat.includes('jewel') ) {
			target = jewelleryContainer;
		} else if (cat.includes('eletr') || cat.includes('electron') || cat.includes('electro') || cat.includes('eletrônicos') || cat.includes('electronics')) {
			target = techContainer;
		} else if (cat.includes('roup') || cat.includes('roupas') || cat.includes('mascul') || cat.includes('femin')) {
			target = fashionContainer;
		}
		if (!target) target = fashionContainer;
		var article = createProductArticle(produto, i);
		target.appendChild(article);
	});
}


function adicionar(i) {
	carrinho.push(produtos[i]);
	atualizarCesto();
}

function remover(i) {
	carrinho.splice(i, 1);
	atualizarCesto();
}

function atualizarCesto() {
	const sec = document.querySelector('#basket-items')
	
	// clear current contents
	sec.innerHTML = '';
	// initialize total cost
	let total = 0;

	if (carrinho.length === 0) {
		sec.innerHTML = '<p>your shopping cart is empty</p>';
	}

	carrinho.forEach((item, i) => {
		const art = document.createElement('article');
		art.innerHTML = `
			<img src="${item.image}" alt="${item.title}">
			<h3>${item.title}</h3>
			<p>Preço: ${item.price.toFixed(2)} €</p>
			<button onclick="remover(${i})">remove from cart</button>
		`;
		sec.appendChild(art);
		total += item.price;
	});

	// update total display: prefer .total element, otherwise create/update #basket-total
	const totalEl = document.querySelector('.total') || document.getElementById('basket-total');
	if (totalEl) {
		totalEl.textContent = `Total: ${total.toFixed(2)} €`;
	} else {
		// if no .total, create/update #basket-total after the section
		let created = document.getElementById('basket-total');
		if (!created) {
			created = document.createElement('p');
			created.id = 'basket-total';
			sec.insertAdjacentElement('afterend', created);
		}
		created.textContent = `Total: ${total.toFixed(2)} €`;
	}

	try {
		localStorage.setItem(CART_KEY, JSON.stringify(carrinho));
	} catch (e) {
		console.error('Erro ao salvar carrinho no localStorage', e);
	}
}

