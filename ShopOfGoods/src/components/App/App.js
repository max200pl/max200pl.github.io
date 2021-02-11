import { API_URL} from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';

import './App.css';
/**
 ** -- импортируем полностью файл import './App.css';
 ** -- создание класса 
 ** -- export по умолчанию (default) значение может быть только одно 
 ** -- при получении данных await getDataApi.getData исп. await значит указываем async render()
 ** -- 
 ** -- 
 ** -- 
 ** -- 
*/

class App {
    async render() {
        const data = await getDataApi.getData(API_URL);
        console.log(data);
    }
}

export default new App();