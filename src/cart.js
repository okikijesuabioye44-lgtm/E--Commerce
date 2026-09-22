// cart.js

// Get saved cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ============
// SAVE CART
// ============

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ===============================
// ADD TO CART
// ===============================

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);

  if (!product) {
    console.log("Product not found:", productId);
    return;
  }

  const existingProduct = cart.find((item) => item.id === productId);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  saveCart();

  updateCartCount();

  console.log("Added to cart:", product.name);
}

// ===============================
// REMOVE FROM CART
// ===============================

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);

  saveCart();

  displayCart();
}

// ===============================
// INCREASE QUANTITY
// ===============================

function increaseQuantity(productId) {
  const product = cart.find((item) => item.id === productId);

  if (!product) return;

  product.quantity += 1;

  saveCart();

  displayCart();
}

// ===============================
// DECREASE QUANTITY
// ===============================

function decreaseQuantity(productId) {
  const product = cart.find((item) => item.id === productId);

  if (!product) return;

  if (product.quantity > 1) {
    product.quantity -= 1;
  } else {
    cart = cart.filter((item) => item.id !== productId);
  }

  saveCart();

  displayCart();
}

// ===============================
// DISPLAY CART
// ===============================

function displayCart() {
  const cartItems = document.getElementById("cartItems");

  if (!cartItems) return;

  cartItems.innerHTML = "";

  // EMPTY CART

  if (cart.length === 0) {
    cartItems.innerHTML = `
            <div class="p-10 text-center">

                <div class="text-5xl mb-4">
                    🛒
                </div>

                <h2 class="font-bold text-xl">
                    Your cart is empty
                </h2>

                <p class="text-gray-500 mt-2">
                    Add products from the homepage.
                </p>

                <a
                    href="./index.html"
                    class="inline-block
                           bg-black
                           text-white
                           rounded-full
                           px-6 py-3
                           mt-5">

                    Continue Shopping

                </a>

            </div>
        `;

    updateSummary();

    return;
  }

  // DISPLAY CART PRODUCTS

  cart.forEach((product) => {
    cartItems.innerHTML += `

            <div
                class="flex gap-4
                       p-4
                       border-b
                       border-gray-200">

                <!-- PRODUCT IMAGE -->

                <div
                    class="w-20 h-20
                           bg-gray-100
                           rounded-lg
                           overflow-hidden
                           flex-shrink-0">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="w-full h-full
                               object-contain">

                </div>


                <!-- PRODUCT INFORMATION -->

                <div class="flex-1">

                    <div
                        class="flex
                               justify-between
                               items-start">

                        <h3 class="font-bold">
                            ${product.name}
                        </h3>

                        <button
                            onclick="removeFromCart(${product.id})"
                            class="text-red-500">

                          ❌

                        </button>

                    </div>


                    <p
                        class="text-xs
                               text-gray-500">

                        Size:
                        ${product.size || "Large"}

                    </p>


                    <p
                        class="text-xs
                               text-gray-500">

                        Color:
                        ${product.color || "White"}

                    </p>


                    <div
                        class="flex
                               justify-between
                               items-center
                               mt-3">

                        <p class="font-bold">
                            $${product.price}
                        </p>


                        <!-- QUANTITY -->

                        <div
                            class="flex
                                   items-center
                                   gap-4
                                   bg-gray-100
                                   rounded-full
                                   px-4 py-2">

                            <button
                                onclick="decreaseQuantity(${product.id})"
                                class="font-bold">

                                −

                            </button>

                            <span>
                                ${product.quantity}
                            </span>

                            <button
                                onclick="increaseQuantity(${product.id})"
                                class="font-bold">

                                +

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        `;
  });

  updateCartCount();
  updateSummary();
}

// ===============================
// CART COUNT
// ===============================

function updateCartCount() {
  const cartCount = document.getElementById("cartCount");

  if (!cartCount) return;

  const count = cart.reduce((total, product) => total + product.quantity, 0);

  cartCount.textContent = count;
}

// ===============================
// ORDER SUMMARY
// ===============================

function updateSummary() {
  const subtotal = cart.reduce(
    (total, product) => total + Number(product.price) * product.quantity,
    0,
  );

  const discount = subtotal * 0.2;

  const delivery = cart.length > 0 ? 15 : 0;

  const total = subtotal - discount + delivery;

  const subtotalElement = document.getElementById("subtotal");

  const discountElement = document.getElementById("discount");

  const deliveryElement = document.getElementById("delivery");

  const totalElement = document.getElementById("total");

  if (subtotalElement) {
    subtotalElement.textContent = `$${subtotal}`;
  }

  if (discountElement) {
    discountElement.textContent = `-$${discount.toFixed(0)}`;
  }

  if (deliveryElement) {
    deliveryElement.textContent = `$${delivery}`;
  }

  if (totalElement) {
    totalElement.textContent = `$${total.toFixed(0)}`;
  }
}

// ===============================
// LOAD CART PAGE
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  displayCart();

  updateCartCount();
});

function updateCartCount() {
  const cartCount = document.getElementById("cartCount");

  if (!cartCount) return;

  const count = cart.reduce((total, product) => total + product.quantity, 0);

  cartCount.textContent = count;

  cartCount.classList.remove("animate-bounce");

  void cartCount.offsetWidth;

  cartCount.classList.add("animate-bounce");
}
