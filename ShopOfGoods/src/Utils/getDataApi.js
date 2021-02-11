import axios from 'axios';
import { API_KEY } from '../constants/api';

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
                params: {
                    apikey: API_KEY
                }
            });

            return response.data
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }
}

export const getDataApi = new GetDataApi();