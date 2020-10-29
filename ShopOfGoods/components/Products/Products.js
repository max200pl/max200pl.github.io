class Products{
     render(){ 
          let htmlCatalog = '';
          CATALOG.forEach(({id, name, price, img})=>{ // переберем все объекты каталога и делаем деструктуризацию
               htmlCatalog += `
               <div id="item" class="item-card">
                    <div class="slider">
                         <div class="slider-main">
                              <img class="slider-main__img" src="${img}" alt="">
                              <ul class="slider-dots slider-dots--mb__none ">
                                   <li class="dots-activ"></li>
                                   <li></li>
                                   <li></li>
                              </ul>
                         </div>
                    </div>

                    <div class="price">
                         <div class="price__name">
                              ${name}
                         </div>

                         <div class="price__list">
                              <div id="price__discountСost" class="price__discountСost">
                                   2150р
                              </div>

                              <div class="price__cost" id="cost" data-cost="cost">
                                   ${price.toLocaleString()} USD
                              </div>
                         </div>
                    </div>

                    <div class="card-footer">
                         <button class="card-footer__buy-btn" data-hide data-id="1">
                              Начать оформление
                         </button>

                         <div class="card-footer__trade">
                              <div class="trade-tuning">
                                   <button id="trade-tuning__buttonCountMinus" value="-">
                                        <img class="trade-tuning__delete"
                                             src="images/item-card/card-footer/remove.svg" alt="delete">
                                   </button>
                                   <div>
                                        <span id="trade-tuning__countProductNumber"
                                             class="trade-tuning__quantity-sum">1шт.</span>
                                        <img class="trade-tuning__quantity-load"
                                             src="images/item-card/card-footer/spinner.svg" alt="">
                                   </div>

                                   <button id="trade-tuning__buttonCountPlus" value="+">
                                        <img class="trade-tuning__add"
                                             src="images/item-card/card-footer/add.svg" alt="">
                                   </button>
                              </div>

                              <button class="trade-tuning__buy">
                                   <span>Оформить</span>
                              </button>
                         </div>
                    </div>
               </div>
               <!-- /item-card 1 -->
               `
          });

          const html = `
               <div class="cards">
               ${htmlCatalog}
               </div>
          `;

          ROOT_PRODUCTS.innerHTML = html // добавляем разметку html в переменную 
     }
}
// создаем экземпляр класса 
const productsPage = new Products();
productsPage.render()