let url = "https://dummyjson.com/products?limit=500";
fetch(url)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    data.products.map((el) => {
      // console.log(el.title);

      let outerdiv = document.createElement("div");
      outerdiv.style.border = "2px solid black";
      outerdiv.style.width = "350px";
      outerdiv.style.height = "550px";
      outerdiv.style.margin = "5px";
      outerdiv.style.display = "flex";
      outerdiv.style.flexDirection = "column";
      outerdiv.style.textAlign = "center";
      outerdiv.style.alignItems = "center";
      outerdiv.style.justifyContent = "center";
      outerdiv.style.borderRadius = "20px";
      outerdiv.style.cursor = "pointer";



        outerdiv.style.cursor = "pointer"; 
        outerdiv.style.transition = "all 0.2s ease";  
        outerdiv.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)"; 

        outerdiv.addEventListener("mouseover", () => {
        outerdiv.style.transform = "translateY(-5px) scale(1.02)"; 
        outerdiv.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)"; 
        });

        outerdiv.addEventListener("mouseout", () => {
        outerdiv.style.transform = "translateY(0) scale(1)"; 
        outerdiv.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)"; 
        });
        

        outerdiv.addEventListener("click", (e) => {
        outerdiv.style.transform = "scale(0.96)"; 
    
        setTimeout(() =>{
          localStorage.setItem("productId", el.id);

        window.location.href = "productdetails.html?id="  +el.id;
         },150);
      });



      outerdiv.addEventListener("click", () => {
        window.location.href = `productdetails.html?id=${el.id}`;
      });

      let title = document.createElement("h3");
      title.innerText = el.title;
      title.style.fontSize = "18px";
      title.style.marginTop = "20px";

      let img = document.createElement("img");
      img.src = el.thumbnail;
      img.style.margin="10px";

      let discription = document.createElement("p");
      discription.innerText = el.description;
      discription.style.fontSize = "14px";
      discription.style.margin = "10px";
      discription.style.padding = "10px";
      discription.style.textAlign = "justify";

      let div = document.createElement("div");
      div.style.display = "flex";
      div.style.flexDirection = "row";
      div.style.marginTop = "auto";
      div.style.marginBottom = "25px";

      let price = document.createElement("p");
      price.innerText = `Rs. ${Math.ceil(el.price) * 95}/-`;
      price.style.fontSize = "16px";
      price.style.color = "red";
      price.style.fontFamily = "cursive";
      price.style.textAlign = "center";

      let cart = document.createElement("button");
      cart.innerText = "Add to Cart";
      cart.style.marginLeft = "150px";
      cart.style.backgroundColor = "blue";
      cart.style.color = "white";
      cart.style.border = "none";
      cart.style.borderRadius = "10px";
      cart.style.padding = "10px 10px";


       cart.addEventListener("mouseover",() =>{
          cart.style.transform="scale(1.05)"; 
            
        });

          cart.addEventListener("mouseout",() =>{
          cart.style.transform="scale(1)"; 

        });

        cart.addEventListener("mousedown",() =>{
          cart.style.transform="scale(0.95)";  
        });

          
        cart.addEventListener("mousedown",() =>{
          cart.style.transform="scale(1.05)";
        });


      cart.addEventListener("click", (e) => {
        e.stopPropagation();

        let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

        let exist = cartItems.find((item) => item.id === el.id);

        if (exist) {
          exist.quantity += 1;
        } else {
          el.quantity = 1;
          cartItems.push(el);
        }

        localStorage.setItem("cart", JSON.stringify(cartItems));

        alert("Product Added Successfully");
      });

      let mainbox = document.querySelector("#main-box");
      mainbox.style.display = "grid";
      mainbox.style.gridTemplateColumns ="repeat(auto-fit, minmax(320px, 1fr))";
      mainbox.style.gap = "20px";
      mainbox.style.padding = "20px";
      mainbox.style.justifyItems = "center";
      
      mainbox.appendChild(outerdiv);

      div.appendChild(price);
      div.appendChild(cart);

      outerdiv.appendChild(title);
      outerdiv.appendChild(img);
      outerdiv.appendChild(discription);
      outerdiv.appendChild(div);
      
    });
  })

  .catch((error) => console.log(error));
