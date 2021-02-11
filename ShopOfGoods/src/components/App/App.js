
import Products from '../Products';
import './App.css';

/**
 ** -- export по умолчанию (default) значение может быть только одно 
 ** -- импортируем экземпляр класса Products
 ** -- импортируем полностью файл import './App.css';
 ** -- асинхронно вызываем в компоненте Products метод рендер 
 ** -- в App.js промежуточный компонент для рендеринга всех компонентов 
 ** -- в App.css основные стили приложения 

*/

class App {
    async render() {
        await Products.render()
    }

}

export default new App();