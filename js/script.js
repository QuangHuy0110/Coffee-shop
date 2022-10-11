let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};
const dataItem = [
  {
    productImg: "../images/cart-item-1.png",
    productName: "Arabica ",
    productDescription:
      "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptatibus Qui Ea Ullam",
    productPrice: "180",
  },
  {
    productImg: "../images/cart-item-2.png",
    productName: "Robusta",
    productDescription:
      "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptatibus Qui Ea Ullam",
    productPrice: "799",
  },
  {
    productImg: "../images/cart-item-3.png",
    productName: "Vietnamese coffee",
    productDescription:
      "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptatibus Qui Ea Ullam",
    productPrice: "539",
  },
];
const productList = document.querySelector(".product-list");
productList.innerHTML = dataItem
  .map(
    (item) =>
      `<div class="list-item">
      <div class="product-image">
        <img src="${item.productImg}" alt="">
      </div>
      <div class="product-info">
          <h3 class="item-name">${item.productName}</h3>
          <p class="item-description">${item.productDescription}</p>
          <p class='default'>Price: <span class="price-default">${item.productPrice}</span></p> 
        
      </div>
      <div class="item-quantity">
        <button class="minus">-</button>
        <span class="quantity">1</span>
        <button class="plus">+</button>
      </div>
      <div class="price">
        <h3> <span>$</span><span class="item-price">${item.productPrice}</span></h3>
      </div>
  </div>`
  )
  .join("");
  let total = document.querySelector('.total')
  total.innerHTML =`<h2>Total:$<span class="total-price">1518</span></h2>`
  const minus = document.querySelectorAll('.minus')
  const plus = document.querySelectorAll('.plus')
  const quantitys = document.querySelectorAll('.quantity')
  const defaultPrice = document.querySelectorAll('.price-default')
  const itemPrice = document.querySelectorAll('.item-price')
  let totalPrice = document.querySelector('.total-price')

  for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", () => {
      let quantity = parseInt(quantitys[i].innerHTML);
      let price = parseInt(defaultPrice[i].innerHTML);
      console.log(defaultPrice[i].innerHTML);
      console.log(typeof(quantity,price));
      if (quantity > 1) {
        quantity--;
        quantitys[i].innerHTML = quantity;
        itemPrice[i].innerHTML = quantity * price;
        console.log(typeof(itemPrice[i]));
        totalItem();
      }
    });
  }
  
  // Click add item
  for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", () => {
      let quantity = parseInt(quantitys[i].innerHTML);
      let price = parseInt(defaultPrice[i].innerHTML);
      console.log(price);
      if(quantity){
        quantity++;
        quantitys[i].innerHTML = quantity;
        itemPrice[i].innerHTML = quantity * price;
        totalItem();
      }
    });
  }
  
  const totalItem = () => {
    totalPriceFinal = 0;
    for (i = 0; i < itemPrice.length; i++) {
      totalPriceFinal += parseInt(itemPrice[i].innerHTML);
    }
    totalPrice.innerHTML = totalPriceFinal;
  };
