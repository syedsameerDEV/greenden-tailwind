let sidenav = document.getElementById("sidenav");
let menuicon = document.getElementById("menuicon");
let closenav = document.getElementById("closenav");
menuicon.addEventListener("click", () => {
  sidenav.style.right = 0;
});
closenav.addEventListener("click", () => {
  sidenav.style.right = "-50%";
});

// product search

let product = document.getElementById("product-container");
let search = document.getElementById("search");

let productlist = product.querySelectorAll("div");
console.log(productlist);

search.addEventListener("keyup", () => {
  let enterValue = event.target.value.toUpperCase();
  for (i = 0; i < productlist.length; i++) {
    let productName = productlist[i].querySelector("h1").textContent;
    if(productName.toUpperCase().indexOf(enterValue)<0){
      productlist[i].style.display="none"
    }
    else{
      productlist[i].style.display="block"
    }
  }
});
