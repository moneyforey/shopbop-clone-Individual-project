import navbar from "../components/navbar.js";
import footer from "../components/footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

let myCart = JSON.parse(localStorage.getItem("myCart"));
console.log(myCart);
let no = myCart.length;
let cartno = document.getElementById("cartno");
cartno.innerText = no;



