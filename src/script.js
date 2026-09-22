function openProduct(id) {
  window.location.href = `product-details.html?id=${id}`;
}

document.addEventListener("DOMContentLoaded", function () {
  function createProductCard(product) {
    return `
            <div
                class="product-card cursor-pointer"
                onclick="openProduct(${product.id})">

                <div class="bg-[#f0f0f0] rounded-2xl overflow-hidden h-[220px]">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="w-full h-full object-contain">

                </div>

                <h3 class="font-semibold text-sm mt-3">
                    ${product.name}
                </h3>

                <div class="flex items-center gap-2 mt-1">

                    <span class="text-yellow-400">
                        ★★★★★
                    </span>

                    <span class="text-gray-500 text-xs">
                        ${product.rating}/5
                    </span>

                </div>

                <div class="flex items-center gap-2 mt-2">

                    <span class="font-bold text-lg">
                        $${product.price}
                    </span>

                    ${
                      product.oldPrice
                        ? `
                            <span class="text-gray-400 line-through text-sm">
                                $${product.oldPrice}
                            </span>
                        `
                        : ""
                    }

                    ${
                      product.discount
                        ? `
                            <span class="bg-red-100 text-red-500 rounded-full px-2 py-1 text-xs">
                                ${product.discount}
                            </span>
                        `
                        : ""
                    }

                </div>

                <button
                    onclick="event.stopPropagation(); addToCart(${product.id})"
                    class="w-full bg-black text-white rounded-full py-5 mt-5">
                    Add to Cart
                </button>

            </div>
        `;
  }

  // NEW ARRIVALS

  const newArrivals = document.getElementById("new-arrivals");

  if (newArrivals) {
    newArrivals.innerHTML = "";

    products.slice(0, 4).forEach(function (product) {
      newArrivals.innerHTML += createProductCard(product);
    });
  }

  // TOP SELLING

  const topSelling = document.getElementById("top-selling");

  if (topSelling) {
    topSelling.innerHTML = "";

    products.slice(4, 8).forEach(function (product) {
      topSelling.innerHTML += createProductCard(product);
    });
  }
});

function openProduct(id) {
  window.location.href = `product-details.html?id=${id}`;
}

const shopBtn = document.getElementById("shopBtn");
const categoryMenu = document.getElementById("categoryMenu");
const arrow = document.getElementById("arrow");

shopBtn.addEventListener("click", function () {
  categoryMenu.classList.toggle("hidden");

  if (categoryMenu.classList.contains("hidden")) {
    arrow.textContent = "⌄";
  } else {
    arrow.textContent = "⌃";
  }
});
