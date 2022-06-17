import navbar from "../components/navbar.js";
import footer from "../components/footer.js";
import Product from "../components/product.js"


document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

let myCart = JSON.parse(localStorage.getItem("myCart"));
console.log(myCart);
let no = myCart.length;
let cartno = document.getElementById("cartno");
cartno.innerText = no;


let b1 = document.getElementById("wn2");

function append(){
    Product.forEach(el => {
        let div = document.createElement('div');

    let image = document.createElement("img");
    image.src = el.image;

    let name = document.createElement("h6")
    name.innerText = el.name;

    let cat = document.createElement('p');
    cat.innerText = el.cat;

    let price = document.createElement('p');
    price.innerText = `$${el.price}`;

    div.append(image,name,cat,price);
    b1.append(div);
    });
}
append();