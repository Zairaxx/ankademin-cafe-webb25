//1
let h1 = document.querySelector("#namn");

h1.innerText = "Ankademin Café";

//2
document.querySelector("#slogan").innerText = "Stockholms no.1 coding café!"

//3

document.body.style.background = "peachpuff";

//4

let prices = document.querySelectorAll(".pris");

prices.forEach((pris) => {
    pris.innerText = "19kr";
})

//5
prices[2].innerText = "15kr";


//6
let lastProduct = document.querySelector(".produkt:last-of-type");
console.log(lastProduct);

lastProduct.innerHTML = "Yoghurt - <span class='pris'>20 kr</span>"

//7

let h3 = document.createElement("h3");
h3.textContent = "Öppettider: Alla dagar kl 18-21"

let website = document.querySelector("#website");

//8

let p = document.createElement("p");
p.textContent = "Till Ankademin Café är alla välkomna att sitta och koda och ta en mysig fika!";

website.append(h3,p);

//9

let allParagraphs = document.querySelectorAll("p");

allParagraphs.forEach(p => {
    p.style.color = "darkred";
})