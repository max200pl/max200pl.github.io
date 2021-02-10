import axios from "axios";
import "regenerator-runtime/runtime.js";
const url = 'https://gist.githubusercontent.com/max200pl/a9d71924a75c18deed1292d13b42f263/raw/2baff97d55a48b2e58bebc64d45468927aeb54d3/catalog.json';
const API_KEY = '' // в случае необходимости 

/**
 ** 1) 
 ** 1.1) 
 ** 2) 
 ** 3) выведем в консоль 
*/

/**
 ** -- создаем класс который будет возвращать данные с сервера 
 ** -- в class GetDataApi, прописываем конструкцию try{} catch{} для обработки ошибок 
 ** -- в try{} создаем переменную для данных с сервера 
 ** -- прописываем ключевое слово await для ожидания получения данных
 ** -- возвращаем полученные данные через метод .get() 
        --через метод .get() библиотеки axios получим данные с сервера 
        -- .get(url) -> вернет promise 
        --присвоим переменной url c git - gist по которому будем получать данные 
 ** -- создаем экземпляр класса через new
 ** -- вызываем метод getDataApi и передаем URL сервера 
 ** -- настраиваем асинхронные функции для axios
 **     6.1 импортируем regenerator-runtime 
 ** -- создаем самовзрывающуюся асинхронную функцию (async()=>{})()
 ** -- ожидаем данные с сервера через конструкцию async 
 */

class GetDataApi {
    async getData(url) {
        try {
            const response = await axios.get(url, {
                params: { // объект дополнительных параметров для формирования ключа доступа 
                    apikey: API_KEY
                }
            })
            return response.data
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }
}

const getDataApi = new GetDataApi();


(async () => { // await response server
    const data = getDataApi.getData(url); // return promise 
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