
import "regenerator-runtime/runtime.js";      // import настраиваем асинхронные функции для axios
import App from './components/App'
import Products from './components/Products'

/**
 ** -- App.render() асинхронная функция чтобы дождаться ее исп. ключевое слово await
 ** -- 
 */
(async () => { 

    await App.render(); // await response server
    Products.eventListener(); //обработка события на элемент ".product__item"
    
})();


/*

function render(){
    const productsStore = localStorageUtil.getCountProducts(); // получаем массив с элементами(карточками)
    headerPage.render(productsStore); // (count) изменяем содержимое корзины в зависимости от localStorage в статике с перезагрузкой страницы
    productsPage.render()
}

spinnerPage.render()

let CATALOG = [];
//https://api.myjson.com/bins/esicc
fetch('server/catalog.json')
    .then(res => res.json()) // получаем в формате json
    .then(body => {  // получем body
        CATALOG = body; // записываем в переменную CATALOG

        setTimeout(() => { // для проверки корректной работы spinner
            spinnerPage.handleClear() // после загрузки в CATALOG удаляем спиннер
            render(); // рисуем полученный результат
        }, 1000);
    })
    .catch(()=> {
        spinnerPage.handleClear() // удаляем спиннер
        errorPage.render();
    }) */