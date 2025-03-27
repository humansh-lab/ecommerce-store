document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Product Data
    const products = [
        {
            id: 1,
            name: 'Chanel No. 5',
            price: '$150',
            desc: 'A timeless scent with floral aldehyde notes.',
            brand: 'Chanel',
            size: '100ml',
            type: 'Perfume',
            image: 'images/chanel-no5.jpg'
        },
        {
            id: 2,
            name: 'Gucci Bloom',
            price: '$180',
            desc: 'A floral fragrance inspired by blooming gardens.',
            brand: 'Gucci',
            size: '50ml',
            type: 'Perfume',
            image: 'images/gucci-bloom.jpg'
        }
    ];

    // Product Details
    if (window.location.pathname.includes('product.html')) {
        const params = new URLSearchParams(window.location.search);
        const id = parseInt(params.get('id'));
        const product = products.find(p => p.id === id);

        if (product) {
            document.getElementById('product-image').src = product.image;
            document.getElementById('product-name').textContent = product.name;
            document.getElementById('product-price').textContent = product.price;
            document.getElementById('product-desc').textContent = product.desc;
            document.getElementById('product-brand').textContent = product.brand;
            document.getElementById('product-size').textContent = product.size;
            document.getElementById('product-type').textContent = product.type;
            window.currentProduct = product; // Store for cart
        }
    }

    // Cart Logic
    if (window.location.pathname.includes('cart.html')) {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const cartItems = document.getElementById('cart-items');
        cart.forEach(item => {
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p>${item.price}</p>
                </div>
            `;
            cartItems.appendChild(div);
        });
    }
});

// Add to Cart Function
function addToCart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(window.currentProduct);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
}