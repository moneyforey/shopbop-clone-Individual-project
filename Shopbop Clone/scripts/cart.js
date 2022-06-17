import navbar from "../components/navbar.js";
import footer from "../components/footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

let myCart = JSON.parse(localStorage.getItem("myCart")) || [];
let container = document.getElementById("container");
let total = 0;
function append(){
    myCart.forEach(el => {
        let div = document.createElement("div");
       
    
        let image = document.createElement("img");
        image.src = el.image;
    
        let div1 = document.createElement('div');
    
        let name = document.createElement("h3");
        name.innerText = el.name;
    
        let cat = document.createElement("p");
        cat.innerText = el.cat;
    
        let price = document.createElement("p");
        price.innerText = `$ ${el.price}`;
        total += el.price;
    
        let btn = document.createElement('button');
        btn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
       btn.style.color = "white";
       btn.style.backgroundColor = "#989898"
        btn.style.borderRadius = "50px";
        btn.style.border = "none";
        btn.addEventListener("click", function(){
          RemoveProduct(el);
          window.location.reload();
        })
    
        div1.append(name,cat,price,btn);
       
    
        div.append(image,div1);
        div.setAttribute("id","c1");
        container.append(div);
       
        
    });
}



let container1 = document.getElementById("paymentdetails1");

// let total = JSON.parse(localStorage.getItem("total"));
console.log(total);
let no = myCart.length;
function append1(){
    container1.innerHTML = null;
    let div = document.createElement("div");
    
    let h = document.createElement('h3');
    h.innerText = "Order Summery";

    let li = document.createElement('table');
    li.innerHTML = ` <tr>
    <td>Product (${no})</td>
    <td>${total}</td>
</tr>
<tr>
    <td>Shipping & Handle</td>
    <td>FREE</td>
</tr>`

div.append(h,li)
container1.append(div);
}





function RemoveProduct(el){
   console.log(el);
   myCart.splice(el,1);
   console.log(myCart);

   localStorage.setItem("myCart",JSON.stringify(myCart));
   append1();
   append();
} 

append();

append1();


let cartno = document.getElementById("cartno");
cartno.innerText = no;

let subtotal = document.getElementById("subtotal");
subtotal.innerText = `$ ${total}`


document.getElementById("checkout").addEventListener("click", function(){
    localStorage.setItem("TotalPrice",JSON.stringify(total));
    window.location.href = "payment.html";
})
