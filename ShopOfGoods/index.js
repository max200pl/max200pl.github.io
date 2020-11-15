function render(){
     const productsStore = localStorageUtil.getProducts(); // получаем массив с элементами(карточками)
     
     headerPage.render(productsStore.length); // (count) изменяем содержимое корзины в зависимости от localStorage в статике с перезагрузкой страницы 
     productsPage.render()
}

let CATALOG = [];
//https://api.myjson.com/bins/esicc
fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        render();
    })
    .catch(error => {
        console.log(error);
    })