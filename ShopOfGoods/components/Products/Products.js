class Products {
     constructor() {
          this.classNameActive = 'hide';
          this.labelAdd = 'Начать оформление' // добавить в корзину
          this.labelRemove = 'Начать оформление' // удалить с корзины 

     }
     //* метод для изменения контента карточки если нажата кнопка "Начать оформление"
     handleSetLocationStorage(element, id) { // получение карточек html и id 
          console.log(element, id);
          const { pushProducts, products } = localStorageUtil.putProducts(id); // деструктуризация возвращаемого объекта с метода putProducts

          if (pushProducts) { // если новый элемент то
               element.classList.add(this.classNameActive); // изменяем его класс 
               element.innerHTML = this.labelRemove; // изменяем его текст 
          } else {
               element.classList.remove(this.classNameActive); // удаляем его класс 
               element.innerHTML = this.labelAdd; // изменяем его текст на исходный 
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
                    activeText = this.labelAdd;
               } else { // если есть то скрываем верхний слой классом hide
                    activeClass = ' '+this.classNameActive; // для корректного добавления класса 
                    activeText = this.labelRemove;
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
                         <button class="card-footer__buy-btn${activeClass}" onClick = "productsPage.handleSetLocationStorage(this, '${id}');">
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