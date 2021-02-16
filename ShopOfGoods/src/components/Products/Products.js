import { API_URL } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';
import { ROOT_PRODUCTS } from '../../constants/root';

import CharacterModal from '../CharacterModal'

import Error from '../Error'

import classes from './Products.css';

/**
 ** -- data.forEach({деструктуризация объекта})
 ** -- формирование URL пути изображения
       -- const imgSrc = path + '/' + 'standard_xLarge' + '.' + extension
 ** -- обработка событий в модулях так работает React
       -- inline onClick не навешивают в модульной структуре: функции работают в локальной области модуля 
       -- при работе с addEventListener нужны уже готовые элементы:
          -- создаем элемент - document.createElement('li')
          -- навешиваем класс - li.classList.add(products__item)
          -- навешиваем событие - addEventListener('click', function(){})  
          -- накидываем на узел в HTML -  ROOT__INDEX.appendChild(li);
  ** -- формирования URL при нажатии на products применяя конкатенацию строк (В проекте не используем)
       -- const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS;    
  ** -- добавление data- атрибута для нахождения конкретной карточки и формирования нужных данных 
       -- указываем атрибут в <div data-id = ${id}></div>
       -- при сформировавшимся DOM находим data-id по циклу 
          -- element.dataAttribute('data-id')
  ** -- работа с модулями CSS 
       -- импортируется конкретный объект 
       -- объект присваивается переменной import classes
       -- не используются идентификаторы, и теги для для стилей 
       -- добавляется хэш внутри каждого модуля  { product__container : product__container_ader123 
                                                  product__item:             product__item_ader123}
  ** -- обработка ошибок 
       -- если data true = render Products; data false = render Error 
*/
class Products {
     /*  constructor() {
           this.classNameActive = 'hide';
           this.labelRemove = 'Добавлено в корзину' // удалить с корзины 
           this.labelAdd = 'Оформить' // добавить в корзину
      } */

     renderProducts(data){
          let htmlCatalog = '';

          data.forEach(({ id, name, img, price }) => {
               // первоначальная установка текста кнопки добавления товара в корзину 
               let activeClass = '';
               let activeText = '';
               // получение количества выбранного товара 
               let countOneProduct = 0 // productsStore[id][2]
               
               //const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS;

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
               <div id="product" data-id="${id}" class="${classes.product__item}">
                    <div class=" ${classes.slider}">
                         <div class="${classes.slider__main}">
                              <img class="${classes.slider__img}" src="${img}" alt="">
                              <ul class="${classes.slider__dots}" mb__none">
                                   <li class="${classes.dots__active}"></li>
                                   <li></li>
                                   <li></li>
                              </ul>
                         </div>
                    </div>
                    <!-- price -->
                    <div class=" ${classes.price}">
                         <div class="${classes.price__name}">
                              ${name}
                         </div>
          
                         <div class="${classes.price__list}">
                              <div id="price__discountCost" class="${classes.price__discountCost}">
                                   <span>2150р</span>
                              </div>
                         </div>

                         <div id="cost" class="${classes.price__cost}" data-cost="cost">
                              ${price.toLocaleString()} USD
                         </div>
                    </div>
                    <!-- /price -->
                    <!-- card-footer -->
                    <div class="${classes.product__footer}">
                         <button class=" btn ${classes.product__footer__buyBtn}" data-hide ">
                         <!-- onClick=" productsPage.hideLayer(this) -->
                              Начать оформление
                         </button>
                         <div class="${classes.product__footer__trade}">
                              <div class="${classes.trade__tuning}">
                                   <button id="trade__tuning__buttonCountMinus" class="btn" value="-">
                                        <!-- onclick="productsPage.handleSetLocationStorage('${id}', '${name}', '${price}', false);"-->
                                        <img class="trade__tuning__delete" src="images/item-card/card-footer/remove.svg"
                                             alt="delete">
                                   </button>
                                   <div>
                                        <span id="${classes.trade__tuning__countProductNumber}"
                                             class="${classes.trade__tuning__quantitySum}">${countOneProduct} шт.</span>
                                        <img class="${classes.trade__tuning__quantityLoad}"
                                             src="images/item-card/card-footer/spinner.svg" alt="">
          
                                        <button value="+">
                                             <! -- onclick="productsPage.handleSetLocationStorage('${id}', '${name}', '${price}', true);"
                                                  -->
                                                  <img class="trade__tuning__add" src="images/item-card/card-footer/add.svg"
                                                       alt="">
                                        </button>

                                        <button class="${classes.trade__tuning__buy}">
                                             <!-- onclick="productsPage.changeContentButton(this, '${id}')"; -->
                                             <span>${activeText}</span>
                                        </button>
                                   </div>
                              </div>
                         </div><!-- /card__footer__trade -->
                    </div><!--/card__footer -->
               </div><!-- /ITEM__CARD -->
               `
          });

          const htmlWrapper = `
               <div class= "${classes.products__container}">
                    <div class="${classes.products__cards}">
                              ${htmlCatalog}
                    </div>
               </div>  
          `;

          ROOT_PRODUCTS.innerHTML = htmlWrapper;
     }
     /**
      ** -- при получение асинхронно данных await через метод getDataApi.getData 
            --  исп. await указываем async render()
      ** -- обработка ошибок 
            -- data: 
                    true = render 
                    false = Error.render 
      */
     async render() {
          const data = await getDataApi.getData(API_URL);

          data ? this.renderProducts(data) : Error.render()
     }
     /**
        ** -- Создаем метод eventListener()
            -- находим элемент уже в готовом DOM (.querySelectorAll)
            -- проходим циклом по element (.forEach)
            -- навешиваем событие клика на каждый element (.addEventListener)
            -- import в index.js при готов DOM вызываем Products.eventListener()
        ** -- Вызываем модальное окно CharacterModal по клику элемента 
     */
     eventListener() {
          document.querySelectorAll('#product').forEach(element => {
               const id = element.getAttribute('data-id');
               element.addEventListener('click', () => {
                    CharacterModal.render(id)
               })
          });
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

