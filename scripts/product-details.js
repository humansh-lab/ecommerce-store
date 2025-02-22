// Get the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Fetch product data
fetch('products.json')
    .then(response => response.json())
    .then(products => {
        // Find the product with the matching ID
        const product = products.find(p => p.id == productId);

        // Update the DOM with product details
        if (product) {
            document.getElementById('product-image').src = product.image;
            document.getElementById('product-name').textContent = product.name;
            document.getElementById('product-price').textContent = `${product.price} KWD`;
            document.getElementById('product-description').textContent = product.description;
            document.getElementById('product-brand').textContent = product.brand;
            document.getElementById('product-size').textContent = product.size;
            document.getElementById('product-type').textContent = product.type;
        } else {
            // Handle product not found
            document.querySelector('.product-details').innerHTML = `<h2>Product not found</h2>`;
        }
    })
    .catch(error => console.error('Error loading product details:', error));