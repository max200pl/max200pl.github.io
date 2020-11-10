class Header {
     render(count) {
          const html = `
               <header class="header">
                    <div class="container container--br-mb__15px">
                         <div class="header__inner">
                              <div class="header__logo">
                                   DreamJob
                              </div>

                              <div class="menu">
                                   <form action="/search/" target="_blank" class="menu-search">
                                        <input class="menu-search__input" type="search" placeholder="Искать..." autofocus>
                                   </form>

                                   <div class="menu-basket">
                                        <span id="total-cart-count" class="menu-basket__badge"> ${count}</span>
                                        <span id="amount" class="menu-basket__amount">4800р</span>
                                   </div>

                                   <div class="menu-leng">
                                        <span id="choice" class="menu-leng__choice">Eng</span>
                              </div>
                         </div>
                    </div>
               </header>
          `;
          ROOT_HEADER.innerHTML = html;
     }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts(); // получаем массив с элементами(карточками)

//* productsStore.length // получаем количество элементов массива 

headerPage.render(productsStore.length);