function render(){
     const productsStore = localStorageUtil.getProducts(); // получаем массив с элементами(карточками)
     
     headerPage.render(productsStore.length); // (count) изменяем содержимое корзины в зависимости от localStorage в статике с перезагрузкой страницы 
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
    .catch(error => {
        console.log(error);
    })