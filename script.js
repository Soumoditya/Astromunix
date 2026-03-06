let cart=[]
let currency="INR"

function setCurrency(c){
currency=c
updateTotal()
}

function addPlan(price){
cart=[]
cart.push({name:"Base Reading",price})
updateCart()
}

function addAddon(name,price){
cart.push({name,price})
updateCart()
}

function updateCart(){

let list=document.getElementById("cartItems")
list.innerHTML=""

cart.forEach(i=>{
let div=document.createElement("div")
div.innerText=i.name+" - "+format(i.price)
list.appendChild(div)
})

updateTotal()

}

function updateTotal(){

let total=0
cart.forEach(i=> total+=i.price)

document.getElementById("total").innerText=
"Total: "+format(total)

}

function format(p){

if(currency==="USD"){

let usd=(p*2/83).toFixed(2)
return "$"+usd

}

return "₹"+p

}

function checkout(){

let total=0
cart.forEach(i=> total+=i.price)

let upi=`upi://pay?pa=soumodityapramanik-1@okicici&pn=Astromuni&am=${total}&cu=INR`

window.location.href=upi

}

document.getElementById("orderForm")
.addEventListener("submit",function(e){

e.preventDefault()

alert("Order submitted. Send payment screenshot to astroxmuni@gmail.com")

})
