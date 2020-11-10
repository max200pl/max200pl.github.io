class Products {
     constructor() {
          this.classNameActive = 'hide';
          this.labelAdd = 'Начать оформление' // добавить в корзину
          this.labelRemove = 'Начать оформление' // удалить с корзины 

     }

     handleSetLocationStorage(element, id) { // получение карточек html и id 
          const { pushProducts, products } = localStorageUtil.putProducts(id); // деструктуризация объекта 

          if (pushProducts) {
               element.classList.add(this.classNameActive);
               element.innerHTML = this.labelRemove;
          } else {
               element.classList.remove(this.classNameActive);
               element.innerHTML = this.labelAdd;
          }
          //* для перезаписи текущего количества товаров корзины 
          headerPage.render(products.length);
     }

     render() {
          const productsStore = localStorageUtil.getProducts()
          let htmlCatalog = '';

          CATALOG.forEach(({ id, name, price, img }) => { // переберем все объекты каталога и делаем деструктуризацию
               let activeClass = '';
               let activeText = '';
               if (productsStore.indexOf(id) === -1) { // если id карточки нет в localStorage
                    activeText = this.labelAdd
               } else { // если есть то скрываем верхний слой классом hide
                    activeText = this.labelRemove
                    activeClass = this.classNameHide
               }

               htmlCatalog += `
               <div id="item" class="item-card">
                    <div class="slider">
                         <div class="slider-main">
                              <img class="slider-main__img" src="${img}" alt="">
                              <ul class="slider-dots slider-dots--mb__none ">
                                   <li class="dots-active"></li>
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
                              <div id="price__discountCost" class="price__discountCost">
                                   2150р
                              </div>

                              <div class="price__cost" id="cost" data-cost="cost">
                                   ${price.toLocaleString()} USD
                              </div>
                         </div>
                    </div>

                    <div class="card-footer">
                         <button class="card-footer__buy-btn${activeClass}">
                              ${activeText}
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