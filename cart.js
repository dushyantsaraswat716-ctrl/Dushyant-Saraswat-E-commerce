let cartData = JSON.parse(localStorage.getItem("cart")) || [];

let main = document.getElementById("main-box");

main.style.display = "grid";
main.style.gridTemplateColumns = "repeat(auto-fit,minmax(320px,1fr))";
main.style.gap = "20px";
main.style.padding = "20px";
main.style.justifyItems = "center";

// main.style.cursor = "pointer";
// summaryBox.style.transition = "all 0.2s ease";
// main.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";

// main.addEventListener("mouseover", () => {
//   main.style.transform = "translateY(-5px) scale(1.02)";
//   main.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
// });

// main.addEventListener("mouseout", () => {
//   main.style.transform = "translateY(0) scale(1)";
//   main.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
// });

// main.addEventListener("click", (e) => {
//   main.style.transform = "scale(0.96)";
// });

let summaryBox = document.createElement("div");

summaryBox.style.width = "90%";
summaryBox.style.margin = "50px";
summaryBox.style.padding = "20px";
summaryBox.style.background = "white";
summaryBox.style.border = "2px solid black";
summaryBox.style.borderRadius = "15px";
summaryBox.style.display = "flex";
summaryBox.style.justifyContent = "space-between";
summaryBox.style.alignItems = "center";
summaryBox.style.flexWrap = "wrap";

summaryBox.style.cursor = "pointer";
summaryBox.style.transition = "all 0.2s ease";
summaryBox.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";

summaryBox.addEventListener("mouseover", () => {
  summaryBox.style.transform = "translateY(-5px) scale(1.02)";
  summaryBox.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
});

summaryBox.addEventListener("mouseout", () => {
  summaryBox.style.transform = "translateY(0) scale(1)";
  summaryBox.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
});

summaryBox.addEventListener("click", (e) => {
  summaryBox.style.transform = "scale(0.96)";
});

let info = document.createElement("div");

let totalProducts = document.createElement("h2");
let total_price = document.createElement("h2");

total_price.style.color = "red";

info.append(totalProducts, total_price);

let btnDiv = document.createElement("div");
btnDiv.style.display = "flex";
btnDiv.style.gap = "15px";


let buyAll = document.createElement("button");
buyAll.innerText = "Buy All";
buyAll.style.background = "green";
buyAll.style.color = "white";
buyAll.style.padding = "12px 25px";
buyAll.style.border = "none";
buyAll.style.borderRadius = "10px";
buyAll.style.fontSize = "16px";

buyAll.addEventListener("mouseover", () => {
  buyAll.style.transform = "translateY(-5px) scale(1.02)";
  buyAll.style.boxShadow = "0 8px 16px rgba(0,0,0,0.3)";
});

buyAll.addEventListener("mouseout", () => {
  buyAll.style.transform = "translateY(0) scale(1)";
  buyAll.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
});

buyAll.addEventListener("mousedown", () => {
  buyAll.style.transform = "scale(0.96)";
});

let removeAll = document.createElement("button");
removeAll.innerText = "Remove All";
removeAll.style.background = "red";
removeAll.style.color = "white";
removeAll.style.padding = "12px 25px";
removeAll.style.border = "none";
removeAll.style.borderRadius = "10px";
removeAll.style.cursor = "pointer";
removeAll.style.fontSize = "16px";

removeAll.addEventListener("mouseover", () => {
  removeAll.style.transform = "translateY(-5px) scale(1.02)";
  removeAll.style.boxShadow = "0 8px 16px rgba(0,0,0,0.3)";
});

removeAll.addEventListener("mouseout", () => {
  removeAll.style.transform = "translateY(0) scale(1)";
  removeAll.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
});

removeAll.addEventListener("mousedown", () => {
  removeAll.style.transform = "scale(0.96)";
});

btnDiv.append(buyAll, removeAll);

summaryBox.append(info, btnDiv);

document.body.append(summaryBox);

function display() {
  main.innerHTML = "";

  let totalPrice = 0;
  let totalProduct = 0;

  if (cartData.length === 0) {
    let empty = document.createElement("h1");
    empty.innerText = "Cart is Empty";
    empty.style.marginTop = "100px";

    main.appendChild(empty);

    totalProducts.innerText = "Total Products : 0";
    total_price.innerText = "Total Price : RS. 0";

    return;
  }

  cartData.forEach((el, index) => {
    totalProduct += el.quantity;
    totalPrice += Math.ceil(el.price) * 95 * el.quantity;

    let outer = document.createElement("div");

    outer.style.border = "2px solid black";
    outer.style.width = "350px";
    outer.style.height = "500px";
    outer.style.background = "wheat";
    outer.style.borderRadius = "20px";
    outer.style.display = "flex";
    outer.style.flexDirection = "column";
    outer.style.alignItems = "center";
    outer.style.justifyContent = "center";
    outer.style.cursor = "pointer";

    outer.addEventListener("click", () => {
      window.location.href = `productdetails.html?id=${el.id}`;
    });

    let title = document.createElement("h3");
    title.innerText = el.title;

    let img = document.createElement("img");
    img.src = el.thumbnail;
    img.style.width = "200px";
    img.style.height = "200px";

    let des = document.createElement("p");
    des.innerText = el.description;
    des.style.padding = "10px";
    des.style.textAlign = "justify";
    des.style.margin = "20px 0px";

    let qty = document.createElement("h3");
    qty.innerText = `Quantity : ${el.quantity}`;

    let price = document.createElement("h2");
    price.innerText = `Rs. ${Math.ceil(el.price) * 95 * el.quantity} /-`;
    price.style.color = "red";

    let buttonDiv = document.createElement("div");
    buttonDiv.style.display = "flex";
    buttonDiv.style.gap = "10px";
    buttonDiv.style.marginTop = "10px";

    let buy = document.createElement("button");
    buy.innerText = "Buy";
    buy.style.background = "green";
    buy.style.color = "white";
    buy.style.padding = "10px 30px";
    buy.style.border = "none";
    buy.style.borderRadius = "10px";
    buy.style.marginTop = "20px";
    buy.style.marginRight = "150px";

    buy.addEventListener("mouseover", () => {
      buy.style.transform = "translateY(-5px) scale(1.02)";
      buy.style.boxShadow = "0 8px 16px rgba(0,0,0,0.3)";
    });

    buy.addEventListener("mouseout", () => {
      buy.style.transform = "translateY(0) scale(1)";
      buy.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    });

    buy.addEventListener("mousedown", () => {
      buy.style.transform = "scale(0.96)";
    });

    buy.addEventListener("click", (e) => {
      e.stopPropagation();

      alert("Order Placed Successfully");
    });

    let remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.style.background = "red";
    remove.style.color = "white";
    remove.style.padding = "10px 20px";
    remove.style.border = "none";
    remove.style.borderRadius = "10px";
    remove.style.marginTop = "20px";

    remove.addEventListener("mouseover", () => {
      remove.style.transform = "translateY(-5px) scale(1.02)";
      remove.style.boxShadow = "0 8px 16px rgba(0,0,0,0.3)";
    });

    remove.addEventListener("mouseout", () => {
      remove.style.transform = "translateY(0) scale(1)";
      remove.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    });

    remove.addEventListener("mousedown", () => {
      remove.style.transform = "scale(0.96)";
    });

    remove.addEventListener("click", (e) => {
      e.stopPropagation();

      cartData.splice(index, 1);

      localStorage.setItem("cart", JSON.stringify(cartData));

      display();
    });

    buttonDiv.append(buy, remove);

    outer.append(title, img, des, qty, price, buttonDiv);

    main.appendChild(outer);
  });

  totalProducts.innerText = `Total Products : ${totalProduct}`;
  total_price.innerText = `Total Price : Rs. ${totalPrice} /-`;
}

display();

buyAll.addEventListener("click", () => {
  if (cartData.length === 0) {
    alert("Cart is Empty");
    return;
  }

  alert("All Products Purchased Successfully");

  localStorage.removeItem("cart");

  cartData = [];

  display();
});

removeAll.addEventListener("click", () => {
  if (cartData.length === 0) {
    alert("Cart is Already Empty");
    return;
  }

  localStorage.removeItem("cart");

  cartData = [];

  display();
});
