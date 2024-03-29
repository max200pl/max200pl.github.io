class LocalStorageUtil {
     constructor() {
          this.keyName = 'products';// создаем ключ по которому будем обращаться 
     }
     //* получение товаров с localStorage
     getProducts() {
          return JSON.parse(localStorage.getItem(this.keyName))
     }
     //* 

     setProductsInCatalog(){
          const products = this.getProducts()
          CATALOG.forEach(({ id, name, price }) => { // переберем все объекты каталога и делаем деструктуризацию
               //* запись в ls всех товаров каталога 
               products[id] = [name, price, 0]
          })
          localStorage.setItem(this.keyName, JSON.stringify(products)); 
     }

     /*      //* Проверка localStorage на наличие элементов 
          getProductsFlag() {
               //* Возводим Флаг в true что в local Storage есть хотя бы один элемент 
               //* Если выбранного товара или любого товара в localStorage нет flag false 
               const productsLocalStorage = this.getProducts()
               let countProductsStore = this.getCountProducts()
               let flagContainStore = false // корзина пуста
     
               if(countProductsStore === 0){ // если корзина содержит 0 элементов 
                    // перебираем весь объект и удаляем все элементы объекта
                    for (const member in productsLocalStorage) delete productsLocalStorage[member];
                    flagContainStore = false
               }else{
                    return flagContainStore = true // корзина содержит элементы 
                    //return countProductsStore
               }
               localStorage.setItem(this.keyName, JSON.stringify(productsLocalStorage)); 
               //console.log(flagContainStore);
               return flagContainStore
          } 
     */


     //* Получение количества выбранных товаров 
     getCountProducts() {
          const productsLocalStorage = this.getProducts()

          // устанавливать счётчик товаров в корзине по умолчанию в ноль
          let getCountProducts = 0

          for (const id in productsLocalStorage) {
               if (productsLocalStorage.hasOwnProperty(id)) {
                    const idStorage = productsLocalStorage[id]; // массивы выбранных товаров 
                    getCountProducts += idStorage[2]
               }
          }
          return getCountProducts // количество подсчитанных товаров 
     }

     //* Получение количества вобранного товара 
     getCountOneProduct(id) {
          const productsLocalStorage = this.getProducts()
          //* найти выбранный элемент в объекте 
          for (const idItems in productsLocalStorage) {
               //* получить именно то id по которому нажали 
               if (idItems === id) {
                    //* получить количество выбранного товара 
                    const countOneProduct = productsLocalStorage[id][2]
                    console.log(countOneProduct, id);
                    return countOneProduct

               }

          }

     }

     //* Если нажали на кнопку Оформить добавляем пустой элемент в localStorage 


     //* Если товара в localStorage есть 
     //* Тогда меняем скрываем верхний слой кнопки "Начать оформление"
     //* Меняем на кнопе надпись Оформить => в корзине 


     /**
      * @param {Number} id 
      * @param {String} name 
      * @param {Number} price 
      * @param {boolean} action - инкремент или декремент счётчика корзины
      */
     guessModifyProduct(id, name, price, action) {
          let products = this.getProducts() || {}; // объект localStorage
          if (products.hasOwnProperty(id)) { // если id содержится в localStorage
               if (action) // TRUE нажата кнопка добавить товар в корзину 
                    products[id][2] += 1;
               else  // FALSE нажата кнопка удалить с корзины 
                    if (products[id][2] >= 1)
                         products[id][2] -= 1;
                    else
                         return;
          } else { // если нет элемента создаем новый элемент 
               products[id] = [name, price, 1]
          }
          localStorage.setItem(this.keyName, JSON.stringify(products)); // преобразуем из объекта назад в строку
     }
}

const localStorageUtil = new LocalStorageUtil();

