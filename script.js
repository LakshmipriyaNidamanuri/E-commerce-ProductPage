document.addEventListener("DOMContentLoaded", function() {
    // Cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');

    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productDiv = button.parentElement;
            const productName = productDiv.querySelector('h2').innerText;
            const productPrice = parseFloat(productDiv.querySelector('.product-price').innerText);

            const listItem = document.createElement('li');
            listItem.innerText = productName + " - Rs. " + productPrice.toFixed(2);
            cartList.appendChild(listItem);

            total += productPrice;
            cartTotal.innerText = total.toFixed(2);
        });
    });

    // Image modal functionality
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    document.querySelectorAll(".product-image").forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    const closeModal = document.querySelector(".close");
    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
    });
});
