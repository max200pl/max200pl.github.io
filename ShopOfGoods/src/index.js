
import {API_URL} from './constants/api';      // import URL git gist 
import "regenerator-runtime/runtime.js";      // import настраиваем асинхронные функции для axios
import {getDataApi} from './utils/getDataApi' // import метода экземпляра класса new GetDataApi()

(async () => { // await response server
    const data = getDataApi.getData(API_URL); // return promise 
    console.log(data);
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