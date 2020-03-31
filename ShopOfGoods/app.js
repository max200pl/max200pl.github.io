//=====Hover effect

const discount = document.getElementById("price__discountСost");
const buyBtn = document.getElementById("card-footer__buy-btn");


buyBtn.addEventListener("mouseover", function () {
     discount.style.display = "block";
}, false);


buyBtn.addEventListener("mouseout", function () {
     discount.style.display = "";

}, false);






