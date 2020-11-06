class LocalStorageUtil {
     constructor() {
          this.keyName = 'products';// создаем ключ по которому будем обращаться 
     }
     // создаем новые два метода, для получения списка выбранных продуктов и добавления новых 

     getProducts() {
          // получаем элемент по ключу, если элемент присутствует получаем строку если нет то null 
          const productsLocalStorage = localStorage.getItem(this.keyName);
          if (productsLocalStorage !== null) {
               //если не null то распарим строку и переведем ее в массив 
               return JSON.parse(productsLocalStorage);
          }
          return [];
     }

     putProducts(id) { // принимаем id товара с объекта Products
          let products = this.getProducts();// получаем массив 
          let pushProduct = false;// если значение false  то удалили если true то добавили 
          // проверка повторяющихся элементов массива 
          const index = products.indexOf(id);

          if (index === -1) {
               products.push(id);
               pushProduct = true;// если новый элемент возводим флаг в true 
          } else {
               products.splice(index, 1) // удаляем повторяющийся элемент 
          }

          localStorage.setItem(this.keyName, JSON.stringify(products)); // преобразуем из массива назад в строку 

          return { pushProduct, products }
     }
}

const localStorageUtil = new LocalStorageUtil();

