class LocalStorageUtil {
     constructor() {
          this.keyName = 'products';// создаем ключ по которому будем обращаться 
          
     }
     //* получение товаров с localStorage
     getProducts() {
          return JSON.parse(localStorage.getItem(this.keyName))
     }

     removeProducts(id){
          // const idItem = id
          const products = this.getProducts()
          let removeProducts = false
          if (products.hasOwnProperty(id)) {
               if(products[id][2]>=1){
                  products[id][2] -= 1;
                  console.log(products[id][2]);
               }
          } 
          localStorage.setItem(this.keyName, JSON.stringify(products)); // преобразуем из объекта назад в строку


     }
     //* Получение количества выбранных товаров 
     getCountProducts(){
          const productsLocalStorage = this.getProducts()
          let getCountProducts = 0
          for (const id in productsLocalStorage) {
               if (productsLocalStorage.hasOwnProperty(id)) {
                    const idStorage = productsLocalStorage[id]; // массивы выбранных товаров 
                    getCountProducts += idStorage[2]
               }
          }
          return getCountProducts // количество подсчитанных товаров 
     }
     //*



     
     //* добавление новых товаров localStorage
     putProducts(id, name, price) { // принимаем id товара с объекта Products
          let products = this.getProducts()||{};//  объект localStorage
          let pushProduct = false;// если значение false  то удалили если true то добавили 
          
          if (products.hasOwnProperty(id)) {
               products[id][2] += 1;
          } else {
               products[id] = [name, price, 0]
               pushProduct = true;// если новый элемент возводим флаг в true 
               console.log(products);
          }
          localStorage.setItem(this.keyName, JSON.stringify(products)); // преобразуем из объекта назад в строку 

          return { pushProduct, products } // возвращаем флаг если элемент добавлен localStorage и новый объект элементов
     }

    
}

const localStorageUtil = new LocalStorageUtil();

