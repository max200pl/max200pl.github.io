import { API_URL } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';
import { ROOT_PRODUCTS } from '../../constants/root';

import './Products.css';

/**
 ** -- при получении данных await getDataApi.getData исп. await значит указываем async render()
 ** -- data.forEach({деструктуризация объекта})
 ** -- формирование URL пути изображения
       --  const imgSrc = path + '/' + 'standard_xLarge' + '.' + extension
 ** -- 
 ** -- 
*/
class Products {
     /*  constructor() {
           this.classNameActive = 'hide';
           this.labelRemove = 'Добавлено в корзину' // удалить с корзины 
           this.labelAdd = 'Оформить' // добавить в корзину
      } */

     async render() {
          const data = await getDataApi.getData(API_URL);
          let htmlCatalog = '';

          data.forEach(({ id, name, img, price }) => {
               // первоначальная установка текста кнопки добавления товара в корзину 
               let activeClass = '';
               let activeText = '';
               // получение количества выбранного товара 
               let countOneProduct = 0 // productsStore[id][2]

               // получить id конкретного товара в localStorage 
               /*   if (productsStore === null) { // если  не пустой объект тогда 
                    activeText = this.labelRemove;
                    activeClass = ' ' + this.classNameActive; // удаляем верхний слой 
               } else {
                    activeText = this.labelAdd;
                    activeClass = ' ';
               }
               */

               htmlCatalog += `    
               <!-- ITEM-Product -->
               <div id="product" class="product">
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
                    <!-- price -->
                    <div class="price">
                         <div class="price__name">
                              ${name}
                         </div>

                         <div class="price__list">
                              <div id="price__discountCost" class="price__discountCost">
                                   <span>2150р</span>
                              </div>
                         </div>

                         <div class="price__cost" id="cost" data-cost="cost">
                              ${price.toLocaleString()} USD
                         </div>
                    </div>
                    <!-- /price -->
                    <!-- card-footer -->
                    <div class="product-footer">
                         <button class="product-footer__buy-btn" data-hide onClick="productsPage.hideLayer(this)">
                             Начать оформление
                         </button>
                         <div class="product-footer__trade">
                              <div class="trade-tuning">
                                   <button id="trade-tuning__buttonCountMinus" value="-" onclick="productsPage.handleSetLocationStorage('${id}', '${name}', '${price}', false);" >
                                        <img class="trade-tuning__delete" src="images/item-card/card-footer/remove.svg" alt="delete">
                                   </button>
                                   <div>
                                        <span id="trade-tuning__countProductNumber"
                                             class="trade-tuning__quantity-sum">${countOneProduct} шт.</span>
                                        <img class="trade-tuning__quantity-load" src="images/item-card/card-footer/spinner.svg" alt="">

                                        <button id="trade-tuning__buttonCountPlus" value="+"
                                             onclick="productsPage.handleSetLocationStorage('${id}', '${name}', '${price}', true);">
                                             <img class="trade-tuning__add" src="images/item-card/card-footer/add.svg" alt="">
                                        </button>

                                        <button class="trade-tuning__buy"
                                             onclick="productsPage.changeContentButton(this, '${id}');">
                                             <span>${activeText}</span>
                                        </button>
                                   </div> 
                              </div> 
                         </div><!-- /card-footer__trade -->
                    </div><!--/card-footer -->
               </div><!-- /ITEM-CARD -->
               `
          });

          const htmlWrapper = `
               <div class= "products__container">
                    <div class="products__cards">
                              ${htmlCatalog}
                    </div>
               </div>  
          `;

          ROOT_PRODUCTS.innerHTML = htmlWrapper;
     }

     /*  render() {
          const productsStore = localStorageUtil.getProducts()
          let htmlCatalog = '';
          //* запись всех товаров в LS при первом запуске 
          localStorageUtil.setProductsInCatalog()

          CATALOG.forEach(({ id, name, img, price }) => { // переберем все объекты каталога и делаем деструктуризацию
             

             

              
               htmlCatalog += `

          });

         

          
     }
 */
     /*  //* метод скрытия кнопки "Начать оформление" по нажатию и сохранения состояния в зависимости от localStorage
      hideLayer(element) {
           element.classList.add(this.classNameActive);
           //element.classList.remove(this.classNameActive);
      }
 
 
      reRenderHeaderCounter() { 
           //* для перезаписи текущего количества товаров корзины [el1....] количество элементов localStorage
           let countProductsStore = localStorageUtil.getCountProducts()
           headerPage.render(countProductsStore);
      }
 
      // * метод для изменения контента карточки если нажата кнопка "Начать оформление"
      changeContentButton(element, id) {
           let products = localStorageUtil.getProducts() // получаем объект в localStorage
           let countPickProduct = 0;
           for (const idEl in products) { // получем ключи объекта id
                if (id === idEl) // получаем ключ выбранного элемента 
                {
                     countPickProduct = products[idEl][2] // получаем количество выбранных товаров 
                     console.log(countPickProduct);
                }
                //* меняем контент кнопки "Оформить" => "Добавлено в корзину"
                if (countPickProduct >= 1) {
                     element.innerHTML = this.labelRemove; //"Добавлено в корзину"
                } if (countPickProduct <= 0) {
                     element.innerHTML = this.labelAdd; //"Оформить"
                }
           }
           //* при нажатии на оформить добавляем новый элемент в localStorage и больше не добавляем 
           // element.innerHTML = pushProduct ? this.labelAdd : this.labelRemove;
      }
 
      //* метод добавления и удаления товаров 
      handleSetLocationStorage(id, name, price, isAdd) {
           isAdd ? localStorageUtil.guessModifyProduct(id, name, price, true) : localStorageUtil.guessModifyProduct(id, name, price, false);
           //* ре рендеринг корзины товаров 
           this.reRenderHeaderCounter()
           //* ре рендеринг количества выбранного товара 
           localStorageUtil.getCountOneProduct(id)
           // localStorageUtil.getProductsFlag()
           //! productsPage.render() нельзя вызывать перезапись всего блока при клике при вызове метода добавления товаров в корзину
      }
 
      */
}
// создаем экземпляр класса 
export default new Products();

