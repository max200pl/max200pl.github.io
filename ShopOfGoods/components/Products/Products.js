class Products {
     constructor() {
          this.classNameActive = 'hide';
          this.labelRemove = 'Добавлено в корзину' // удалить с корзины 
          this.labelAdd = 'Оформить' // добавить в корзину
     }

     //* метод скрытия кнопки "Начать оформление" по нажатию и сохранения состояния в зависимости от localStorage
     hideLayer(element) {
          element.classList.add(this.classNameActive);
     }


     reRenderHeaderCounter() { 
          //* для перезаписи текущего количества товаров корзины [el1....] количество элементов localStorage
          let countProductsStore = localStorageUtil.getCountProducts()
          headerPage.render(countProductsStore);
     }

     reRenderProduct(){
          let productsFlagLS = localStorageUtil.getProductsFlag()
     }

     // * метод для изменения контента карточки если нажата кнопка "Начать оформление"
     changeContentButton(id){

          //* при нажатии на оформить добавляем новый элемент в localStorage и больше не добавляем 
          //* и вызываем функцию рендеринга всех товаров 
          let productsFlagLS = localStorageUtil.getProductsFlag()
          if (productsFlagLS) {
               
          }
        console.log(productsFlagLS);
        console.log(id);
          // element.innerHTML = pushProduct ? this.labelAdd : this.labelRemove;
     }

     //* метод добавления и удаления товаров 
     /**
      * @param {*} id 
      * @param {*} name 
      * @param {*} price 
      * @param {*} action  
      */
     handleSetLocationStorage(id, name, price, isAdd) { 
          isAdd ? localStorageUtil.guessModifyProduct(id, name, price, true) : localStorageUtil.guessModifyProduct(id, name, price, false);
          this.reRenderHeaderCounter()
          this.changeContentButton(id)
          productsPage.render()
     }
     
     render() {
          const productsStore = localStorageUtil.getProducts()
          // console.log(productsStore);
          let htmlCatalog = '';

          CATALOG.forEach(({ id, name, img, price}) => { // переберем все объекты каталога и делаем деструктуризацию
          //* первоначальная установка текста кнопки добавления товара в корзину 
               let activeClass = '';
               let activeText = '';
             
               if (productsStore === null) { // если  не пустой объект тогда 
                    activeText = this.labelRemove;
                    activeClass = ' ' + this.classNameActive; // удаляем верхний слой 

               } else {
                    activeText = this.labelAdd;
                    activeClass = ' ';
               }
          //*
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
                         <button class="card-footer__buy-btn ${activeClass}" onClick="productsPage.hideLayer(this)">
                             Начать оформление 
                         </button>

                         <div class="card-footer__trade">
                              <div class="trade-tuning">
                                   <button id="trade-tuning__buttonCountMinus" value="-" onclick="productsPage.handleSetLocationStorage('${id}', '${name}', '${price}', false);">
                                        <img class="trade-tuning__delete"
                                             src="images/item-card/card-footer/remove.svg" alt="delete">
                                   </button>
                                   <div>
                                        <span id="trade-tuning__countProductNumber"
                                             class="trade-tuning__quantity-sum">1шт.</span>
                                        <img class="trade-tuning__quantity-load"
                                             src="images/item-card/card-footer/spinner.svg" alt="">
                                   </div>

                                   <button id="trade-tuning__buttonCountPlus" value="+" onclick="productsPage.handleSetLocationStorage('${id}', '${name}', '${price}', true);">
                                        <img class="trade-tuning__add"
                                             src="images/item-card/card-footer/add.svg" alt="">
                                   </button>
                              </div>

                              <button class="trade-tuning__buy" onclick="productsPage.handleSetLocationStorage('${id}', '${name}', '${price}', true);">
                                   <span>${activeText}</span>
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

