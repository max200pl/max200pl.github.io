import axios from "axios";

/**
 ** 1) через метод .get() библиотеки axios получим данные с сервера 
 ** 1.1) .get(url) -> вернет promise 
 ** 2) присвоим переменной url по которому будем получать данные 
 ** 3) выведем в консоль 
*/
const url = 'https://gist.githubusercontent.com/max200pl/a9d71924a75c18deed1292d13b42f263/raw/2baff97d55a48b2e58bebc64d45468927aeb54d3/catalog.json';    
const API_KEY = '' // в случае необходимости 
axios.get(url, {
        params: { // объект дополнительных параметров для формирования ключа доступа 
            apikey: API_KEY
        }
    })
    .then(result => console.log(result.data))
    .catch(error => console.log(console.error(error.message)))


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
    })