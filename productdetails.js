let id = localStorage.getItem("productId");

let url = `https://dummyjson.com/products/${id}`;

fetch(url)
.then(res => res.json())
.then(product => {

    let main = document.getElementById("main-box");

    main.style.display = "flex";
    main.style.justifyContent = "center";
    main.style.alignItems = "center";
    main.style.padding = "30px";

    let card = document.createElement("div");

    card.style.width = "900px";
    card.style.display = "flex";
    card.style.gap = "30px";
    card.style.border = "2px solid black";
    card.style.borderRadius = "20px";
    card.style.background = "wheat";
    card.style.padding = "20px";

    let img = document.createElement("img");
    img.src = product.thumbnail;
    img.style.width = "350px";
    img.style.height = "350px";

    let right = document.createElement("div");

    let title = document.createElement("h1");
    title.innerText = product.title;

    let brand = document.createElement("h2");
    brand.innerText = "Brand : " + product.brand;

    let category = document.createElement("h3");
    category.innerText = "Category : " + product.category

    let price = document.createElement("h2");
    price.innerText = "Price : ₹ " + (Math.ceil(product.price) * 95);
    price.style.color = "red";

    let desc = document.createElement("p");
    desc.innerText = product.description;
    desc.style.marginTop = "20px";
    desc.style.lineHeight = "25px";

    let btn = document.createElement("button");
    btn.innerText = "Add To Cart";
    btn.style.marginTop = "20px";
    btn.style.background = "green";
    btn.style.color = "white";
    btn.style.padding = "12px 25px";
    btn.style.border = "none";
    btn.style.borderRadius = "10px";
    btn.style.cursor = "pointer";

    btn.addEventListener("click", () => {

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        let exist = cart.find(item => item.id == product.id);

        if(exist){

            exist.quantity++;

        }else{

            product.quantity = 1;
            cart.push(product);

        }

        localStorage.setItem("cart",JSON.stringify(cart));

        alert("Product Added Successfully");

    });

    right.append(
        title,
        brand,
        category,
        price,
        desc,
        btn
    );

    card.append(img,right);

    main.append(card);

});