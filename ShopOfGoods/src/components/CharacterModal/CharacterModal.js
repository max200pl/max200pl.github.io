import {getDataApi} from '../../utils/getDataApi'
import {ROOT__MODAL} from '../../constants/root'

//import imgClose from './img/close'
import classes from './CharacterModal.css'

/**
 ** -- Вызов метода CharacterModal.render по клику на элемент 
*/

class CharacterModal{
     renderContent(){

           //** пример */
         /*  let htmlContent = '';
          data.forEach(({ id, name, img, price }) => {
               const imgSrc = URL__IMG
               htmlContent = `
                    <li>
                         <img src = "${imgSrc}"/>
                         <span>${name}</span>
                    </li>
               `;

          });
     
          const htmlWrapper = `
            <div class="wrapper">
               <ul>
                    ${htmlContent}
               </ul>
               <button onClick ="modal.innerHTML=''">Закрыть</button>
            </div>
          `;

          ROOT__MODAL.innerHTML = htmlWrapper; 
         */
     }
     renderNotification(){

     }

     async render(id){
          //* пример  */
        /*const data = await getDataApi.getData(id)

          console.log(id);

            data.length?this.renderContent(id):this.renderNotification() 
        */
     }
}

export default new CharacterModal();