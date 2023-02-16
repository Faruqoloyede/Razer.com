let cart = document.querySelector(".cart");
let shopping = document.querySelector(".shopping");
let shopping2 = document.querySelector(".shopping2");

let display = 0;

const nav = document.querySelector(".menu-nav");
const menu = document.querySelector("#menu-icon");

// cart icon to display cart

shopping.addEventListener("click", ()=>{
    if(display == 1){
        cart.style.display = 'block';
        display = 0;
    } else {
        cart.style.display = 'none';
        display = 1;
    }
});

shopping2.addEventListener("click", ()=>{
    if(display == 1){
        cart.style.display = 'block';
        display = 0;
    } else {
        cart.style.display = 'none';
        display = 1;
    }
});


// menu-bar when click
menu.addEventListener("click", ()=>{
    menu.classList.toggle("bx-box")
    nav.classList.toggle("active");
})