let products = [
    { id: 1, name: 'Coleção Dead by Daylight', price: 79.99, image: 'img/yt.dbd.webp' },
    { id: 2, name: 'Coleção Five Nights at Freddy', price: 119.99, image: 'img/yt.fnaf.jpg' },
    { id: 3, name: 'Coleção The Boys', price: 59.99, image: 'img/yt.the_boys.jpg' },
    { id: 4, name: 'Coleção Minecraft', price: 59.99, image: 'img/yt.minecraft.jpg' },
    { id: 5, name: 'Mega Pack Minecraft', price: 149.99, image: 'img/yt.mine_super-pack.webp' },
    { id: 6, name: 'Pelúcias Slime Rancher', price: 44.99, image: 'img/yt.slime.jpg' },
    //add mais produtos 
];

let cart = [];

function renderProducts(){
    let productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
    products.forEach((product) =>
    {
        let productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML =`
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button>Adicionar ao carrinho</button>        
        `;
        productDiv.querySelector('button').addEventListener('click', () => addToCart(product.id));
        productGrid.appendChild(productDiv);
    })
}

function addToCart(productId){
    let product = products.find((product) => product.id === productId);
    cart.push(product);
    renderCart();
}

function renderCart(){
    let cartTable = document.querySelector('.cart table tbody');
    cartTable.innerHTML = '';
    cart.forEach((product) => {
        let cartRow = document.createElement('tr');
        cartRow.innerHTML = `
        <td>${product.name}</td>
        <td>1</td>
        <td>${product.price}</td>
        <td>${product.price}</td>
        `;
        cartTable.appendChild(cartRow);
    });
    updateTotal();
}

function updateTotal(){
    let total = cart.reduce((acc, product) => acc + product.price, 0);
    document.getElementById('total').textContent =`$${total.toFixed(2)}`;
}

let currentProduct = 0;
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

document.getElementById('checkout').addEventListener('click', () => {
    if(cart.length === 0){
        alert('Seu carrinho está vazio!')
    } else
    {
        alert('Pedido realizado com sucesso!')
        cart = [];
        renderCart();
    }
});

renderProducts();








