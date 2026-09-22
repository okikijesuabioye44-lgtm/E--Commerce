const products = [
  {
    id: 1,

    name: "T-shirt with Tape Details",
    image: "./Image/image 7-Photoroom.png",
    price: 120,
    rating: 4.5,
    reviews: 45,
    description:
      "This stylish t-shirt is made from soft and comfortable fabric. Perfect for everyday wear.",
    colors: ["#3d4035", "#344f4c", "#30344f"],
    category: "T-shirts",
  },

  {
    id: 2,
    name: "Skinny Fit Jeans",
    image: "./Image/image 8-Photoroom.png",
    price: 240,
    oldPrice: 260,
    discount: "-20%",
    rating: 3.5,
    category: "Jeans",
  },

  {
    id: 3,
    name: "Checkered Shirt",
    image: "./Image/image 9-Photoroom.png",
    price: 180,
    rating: 4.5,
    category: "Shirts",
  },

  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    image: "./Image/image 10-Photoroom.png",
    price: 130,
    oldPrice: 160,
    discount: "-30%",
    rating: 4.5,
    category: "T-shirts",
  },

  {
    id: 5,
    name: "Vertical Striped Shirt",
    image: "./Image/image 7 (1)-Photoroom.png",
    price: 212,
    oldPrice: 232,
    discount: "-20%",
    rating: 5.0,
    category: "Shirts",
  },

  {
    id: 6,
    name: "Courage Graphic T-shirt",
    image: "./Image/image 8 (1)-Photoroom.png",
    price: 145,
    rating: 4.0,
    category: "T-shirts",
  },

  {
    id: 7,
    name: "Loose Fit Bermuda Shorts",
    image: "./Image/image 9 (1)-Photoroom.png",
    price: 80,
    rating: 3.0,
    category: "Shorts",
  },

  {
    id: 8,
    name: "Faded Skinny Jeans",
    image: "./Image/image 10 (1)-Photoroom.png",
    price: 210,
    rating: 4.5,
    category: "Jeans",
  },
];

// card.addEventListener("click", () => {
//   window.location.href = `product details.html?id=${product.id}`;
// });

// function showTab(id, button) {
//   document
//     .querySelectorAll(".tab-content")
//     .forEach((x) => x.classList.add("hidden"));

//   document
//     .querySelectorAll(".tab")
//     .forEach((x) =>
//       x.classList.remove("border-b-2", "border-black", "font-medium"),
//     );

//   document.getElementById(id).classList.remove("hidden");

//   button.classList.add("border-b-2", "border-black", "font-medium");
// }
