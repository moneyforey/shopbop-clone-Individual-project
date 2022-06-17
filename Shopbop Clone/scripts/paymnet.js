import navbar from "../components/navbar.js";
import footer from "../components/footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

let total = JSON.parse(localStorage.getItem("TotalPrice"));

let amount = document.getElementById("Amount");
amount.innerText = `$ ${total}`

let btnSV =  document.getElementById("save");
btnSV.addEventListener("click", function(){
    alert("shipping address is saved")
})

let btnPY = document.getElementById("Pay");
btnPY.addEventListener("click",function(){
    alert("Payment Succesfull");
    alert("Your order is placed");

    window.location.href = "index.html";
})


let myCart = JSON.parse(localStorage.getItem("myCart"));
console.log(myCart);
let no = myCart.length;
let cartno = document.getElementById("cartno");
cartno.innerText = no;