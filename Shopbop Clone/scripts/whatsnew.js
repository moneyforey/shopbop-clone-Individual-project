import navbar from "../components/navbar.js";
import footer from "../components/footer.js";
import Products from "../components/product.js";


document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
console.log(Products);


let container = document.getElementById("container");


    Products.forEach(el => {
        let div = document.createElement("div");
        

        let image = document.createElement("img");
        image.src = el.image;

        let name = document.createElement("h3");
        name.innerText = el.name;

        let cat = document.createElement("p");
        cat.innerText = el.cat;

        let price = document.createElement("p");
        price.innerText = `$ ${el.price}`;

        let heart = document.createElement("div");
        heart.innerHTML = `<i class="fa-solid fa-heart" id="wish" ></i>`;
        heart.setAttribute("id","heartwish")

        div.append(image,name,cat,price,heart);
        container.append(div);
        div.addEventListener("click", function(){
            addTocart(el);
        });
        
    });
    let total = 0;
    let myCart = JSON.parse(localStorage.getItem("myCart")) || [];
    function addTocart(el){
        
         myCart.push(el)
        localStorage.setItem("myCart", JSON.stringify(myCart));
        window.location.href = "cart.html";
        Total();
    }

    function Total(){
         for(let i=0;i<myCart.length;i++){
            total += myCart[i].price;
         }

         console.log(total);
         localStorage.setItem("total",JSON.stringify(total))
    }



let no = myCart.length;
let cartno = document.getElementById("cartno");
cartno.innerText = no;
    





