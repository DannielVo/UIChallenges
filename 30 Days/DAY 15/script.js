// Display data
var mockData = fetch("http://fakestoreapi.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // Init
    var products = document.querySelector(".products");
    products.innerHTML = ``;
    data.forEach((item) => {
      var newProduct = document.createElement("div");
      newProduct.classList.add("product-item");
      newProduct.innerHTML = `
            <img src="${item.image}" alt="" />
            <div class="info">
                <div class="name">${item.title}</div>
                <div class="price">${item.price}</div>
            </div>
      `;

      products.appendChild(newProduct);
    });
  });

// Search
var searchInput = document.querySelector(".search input");
searchInput.addEventListener("input", function (e) {
  let searchInputValue = e.target.value.trim().toLowerCase();
  let listProductDOM = document.querySelectorAll(".product-item");
  listProductDOM.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchInputValue)) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
});
