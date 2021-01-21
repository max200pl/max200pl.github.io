class Shopping {
     handleClear() {
          ROOT_SHOPPING.innerHTML = '';
     }

     render() {
          //* получение объекта lS 
          const productsStore = localStorageUtil.getProducts()
          let htmlCatalog = '';
          let sumCatalog = 0;

          CATALOG.forEach(({ id, name, price }) => { // переберем все объекты каталога и делаем деструктуризацию
               //* получение количества выбранного товара 
               let countOneProduct = productsStore[id][2]
             
               if (productsStore.hasOwnProperty(id) && productsStore[id][2]>0) {
                    //* Выбранные товары 
                    htmlCatalog += `
                         <tr class="shopping-element">
                              <td  aria-label="Name product" class="shopping-element__name">${name}</td>
                              <td aria-label="Amount" class="shopping-element__price">${countOneProduct}</td>
                              <td aria-label="Cost" class="shopping-element__price">${price.toLocaleString()} USD</td>
                         </tr>
                    `;

                    //* Суммируем в общую стоимость price каждого товара
                    sumCatalog += price;
               };

          });



          const html = `
          <div class="shopping__background">
               <div class = "shopping-container">
                    <div class = "shopping__header">Корзина товаров</div>
                    <div class="shopping__close" onclick = "shoppingPage.handleClear()"></div>

                    <table>
                         <thead>
                              <th  class="shopping-head__first">Name product</th>
                              <th>Amount</th>
                              <th>Cost</th>
                         </thead>
                         <tbody>
                              ${htmlCatalog}
                
                              <td class="shopping-footer__name" colspan="2">ИТОГО:</td>
                              <td class="shopping-footer__sumPrice">${sumCatalog} USD</td>
                       
                         </tbody>
                    </table>

                    <button class="shopping-footer__buy-btn">
                             Оформить заказ
                    </button>

               </div>
          </div>
          `;
          ROOT_SHOPPING.innerHTML = html;
     }

}

const shoppingPage = new Shopping();