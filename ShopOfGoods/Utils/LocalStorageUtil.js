 class LocalStorageUtil{
      constructor(){
           // задаем новое свойство 
           this.keyName = 'products'
      }
      // создаем новые два метода, для получения списка выбранных продуктов и добавления новых 

      getProducts(){
           // получаем элемент по ключу, если элемент присутствует получаем строку если нет то null 
          const productsLocalStorage = localStorage.getItem(this.keyName)
          if (productsLocalStorage ==! null) {
               //если не null то распарим строку и переведем ее в массив 
               return JSON.parse(productsLocalStorage)
          }
          return [];
      }
      putProducts(id){ // принимаем id товара с объекта Products

      }
 }

 const localStorageUtil = new LocalStorageUtil();

const a =  localStorageUtil.getProducts();
console.log(a);