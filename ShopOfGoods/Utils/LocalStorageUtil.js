class LocalStorageUtil {
     constructor() {
          this.keyName = 'products';// создаем ключ по которому будем обращаться 
          
     }
     //* получение товаров с localStorage
     getProducts() {
          return JSON.parse(localStorage.getItem(this.keyName))
     }

     //* Получение количества выбранных товаров 
     getCountProducts(){
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

     /**
      * 
      * @param {Number} id 
      * @param {String} name 
      * @param {Number} price 
      * @param {boolean} action - инкремент или декремент счётчика корзины
      */
     guessModifyProduct(id, name, price, action) {
          let products = this.getProducts() || {}; // объект localStorage
          let pushProductFlag = false;

          // this code is shit
          if (products.hasOwnProperty(id)) {
               if (action)
                    products[id][2] += 1;
               else 
                    if (products[id][2] > 0)
                         products[id][2] -= 1;
                    else
                         return;
               
          } else {
               products[id] = [name, price, 1]
               pushProductFlag = true; // если новый элемент возводим флаг в true 
          }

          localStorage.setItem(this.keyName, JSON.stringify(products)); // преобразуем из объекта назад в строку
          return { pushProductFlag, products } // возвращаем флаг если элемент добавлен localStorage и новый объект элементов

     }   
}

const localStorageUtil = new LocalStorageUtil();

