const productId = new URLSearchParams(window.location.search).get("id");
const product = products.find((item) => item.id === Number(productId));

const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
};

if (!product) {
  document.body.innerHTML = `
    <div class="text-center py-20">
      <h1 class="text-2xl font-bold">Product not found</h1>
      <a href="index.html" class="inline-block mt-5 bg-black text-white px-6 py-3 rounded-full">Back to Shop</a>
    </div>`;
} else {
  document.title = product.name;
  setText("productName", product.name);
  setText("productPrice", `$${product.price}`);
  setText("oldPrice", product.oldPrice ? `$${product.oldPrice}` : "");
  setText("discount", product.discount || "");
  setText("productRating", `${product.rating}/5`);
  setText("productDescription", product.description || "This product is made with high quality materials.");
  setText("detailsText", product.description || "A stylish and comfortable product designed for everyday use.");
  setText("reviewCount", `(${product.reviews || 0})`);

  const image = document.getElementById("productImage");
  if (image) {
    image.src = product.image;
    image.alt = product.name;
  }

  const colorContainer = document.getElementById("colors");
  if (colorContainer && Array.isArray(product.colors)) {
    colorContainer.replaceChildren();
    product.colors.forEach((color) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "w-7 h-7 rounded-full border-2 border-white ring-1 ring-gray-300";
      button.style.backgroundColor = color;
      colorContainer.appendChild(button);
    });
  }
}

const tabButtons = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTab = document.getElementById(button.dataset.tab);
    if (!selectedTab) return;
    tabContents.forEach((tab) => tab.classList.add("hidden"));
    tabButtons.forEach((tabButton) => {
      tabButton.classList.remove("border-b-2", "border-black", "font-medium");
      tabButton.classList.add("text-gray-500");
    });
    selectedTab.classList.remove("hidden");
    button.classList.add("border-b-2", "border-black", "font-medium");
    button.classList.remove("text-gray-500");
  });
});

const sizeButtons = document.querySelectorAll(".size");
sizeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sizeButtons.forEach((sizeButton) => {
      sizeButton.classList.remove("bg-black", "text-white");
      sizeButton.classList.add("bg-gray-100");
    });
    button.classList.remove("bg-gray-100");
    button.classList.add("bg-black", "text-white");
  });
});

const quantity = document.getElementById("quantity");
const updateQuantity = (change) => {
  if (!quantity) return;
  const currentQuantity = Number(quantity.textContent) || 1;
  quantity.textContent = Math.max(1, currentQuantity + change);
};

const qtyMinus = document.getElementById("qtyMinus");
const qtyPlus = document.getElementById("qtyPlus");
if (qtyMinus) qtyMinus.addEventListener("click", () => updateQuantity(-1));
if (qtyPlus) qtyPlus.addEventListener("click", () => updateQuantity(1));

const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thanks for subscribing to our newsletter!");
    newsletterForm.reset();
  });
}
