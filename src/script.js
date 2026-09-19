document.addEventListener("DOMContentLoaded", function () {
  console.log("script.js loaded");

  console.log("Products:", products);

  function createProductCard(product) {
    return `
            <div class="product-card">

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
    onclick="addToCart(${product.id})"
    class="w-full bg-black text-white rounded-full py-5 mt-5
           hover:bg-gray-800
           hover:scale-[1.02]
           active:scale-95
           transition-all duration-200"> Add to Cart

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
  } else {
    console.log("new-arrivals element NOT found");
  }

  // TOP SELLING

  const topSelling = document.getElementById("top-selling");

  if (topSelling) {
    topSelling.innerHTML = "";

    products.slice(4, 8).forEach(function (product) {
      topSelling.innerHTML += createProductCard(product);
    });
  } else {
    console.log("top-selling element NOT found");
  }
});

// products.slice(0, 4).forEach(function (product, index) {
//   newArrivals.innerHTML += `
//         <div
//             style="animation-delay: ${index * 100}ms"
//             class="product-card
//                    opacity-0
//                    animate-[fadeUp_0.6s_ease-out_forwards]">

//             <!-- product content -->

//         </div>
//     `;
// });

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");

    if (mobileMenu.classList.contains("hidden")) {
      menuButton.textContent = "☰";
    } else {
      menuButton.textContent = "✕";
    }
  });
}
