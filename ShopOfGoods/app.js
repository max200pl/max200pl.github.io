//=====Hover effect
//* hide button "Начать оформление" click (data-hide)

document.addEventListener('click', function (event) {
     if (event.target.dataset.hide != undefined) { // .dataset.hide - дата атрибут с именем hide 
          event.target.style.display = 'none';
          let parent = event.target.parentNode.parentNode // получение родителя 
          let priceCost = parent.getElementsByClassName("price__cost")[0]
          let cost = priceCost.innerText
          console.log(cost);
     }
})
//===== Counter Product

let buttonCountPlus = document.getElementById("trade-tuning__buttonCountPlus")

//let attribute  = document.getAttribute('[data-item]')


buttonCountPlus.addEventListener('click', function (event) {


})

// нужно повесить обработчик на 
//item.addEventListener

// при нажатии на данный блок считать class="price__cost"
// занести в переменную calculation

//let calculate = document.getElementById()
//let count = document.getElementById()

//calculation = document.getElementById()

//  document.getElementById("")














