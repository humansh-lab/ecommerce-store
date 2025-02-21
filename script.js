// Initialize cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add item to cart
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Function to update cart count
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Function to display cart items
function displayCartItems() {
    let cartContainer = document.getElementById('cart-items');
    if (!cartContainer) return;
    
    cartContainer.innerHTML = "";
    cart.forEach((item, index) => {
        let div = document.createElement('div');
        div.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartContainer.appendChild(div);
    });
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
}

// Function to proceed to checkout
function checkout() {
    alert("Proceeding to checkout...");
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    displayCartItems();
});
document.addEventListener("DOMContentLoaded", () => {
    let cartCount = 0;
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            cartCount++;
            document.getElementById("cart-count").innerText = cartCount;
            alert("Item added to cart!");
        });
    });
});
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change slide every 4 seconds
}

// Change slides manually
function changeSlide(n) {
    slideIndex += n;
    let slides = document.querySelectorAll(".slide");
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Touch Swipe Support for Mobile Users
let startX = 0;
document.querySelector(".slideshow-container").addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

document.querySelector(".slideshow-container").addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
        changeSlide(1); // Swipe left
    } else if (endX - startX > 50) {
        changeSlide(-1); // Swipe right
    }
});
