class Shopping {
     handleClear() {
          ROOT_SHOPPING.innerHTML = '';
     }

     render() {
          //* получение объекта lS 
          const productsStore = localStorageUtil.getProducts()
          let countProducts = localStorageUtil.getCountOneProduct()
          let htmlCatalog = '';
          let sumCatalog = 0;

          CATALOG.forEach(({ id, name, price }) => { // переберем все объекты каталога и делаем деструктуризацию
               if (productsStore.hasOwnProperty(id)) {
                    //* Выбранные товары 
                    htmlCatalog += `
                         <tr>
                              <td class="shopping-element__name">${name}</td>
                              <td class="shopping-element__price">${price.toLocaleString()} USD</td>
                              <td class="shopping-element__price">${countProducts} Count</td>
                         </tr>
                    `;

                    //* Суммируем в общую стоимость price каждого товара
                    sumCatalog += price;
               };

          }); 



          const html = `
          <div class = "shopping-container">
               <div class="shopping__close" onclick = "shoppingPage.handleClear()"></div>
               <table>
                    ${htmlCatalog}
                    <tr>
                         <td class="shopping-element__name">Сумма товаров:</td>
                         <td class="shopping-element__price">${sumCatalog.toLocaleString()} USD</td>
                    </tr>
               </table>
          </div>

          `;
          ROOT_SHOPPING.innerHTML = html;
     }

}

const shoppingPage = new Shopping();