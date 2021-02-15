import {ROOT_INDEX} from '../../constants/root'

import classes from './Error.css'

/**
 ** -- Вывод ошибки при не корректной работе APP
       -- Если сервер будет не доступен 
 ** -- 
*/
class Error{
     render(){
          const html =`
               <div  class = "${classes.error__container}">
                    <div class = "${classes.error__message}">
                         <h3>Что то пошло не так!</h3>
                         <p>Попробуйте зайти позже</p>
                    </div>
               </div>
          `;
          ROOT_INDEX.innerHTML = html
     }
}

export default new Error();