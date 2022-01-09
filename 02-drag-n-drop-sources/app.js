const item = document.querySelector(".item")
const placeholders = document.querySelectorAll(".placeholder")


item.addEventListener("dragstart", dragstart)
item.addEventListener("dragend", dragend)


for (const placeholder of placeholders) {
     placeholder.addEventListener("dragover", dragover)
     placeholder.addEventListener("dragenter", dragenter)
     placeholder.addEventListener("dragleave", dragleave)
     placeholder.addEventListener("drop", drop) // когда отпустили элемент 
}

function dragstart(event)
{
     console.log('dragstart');
     event.target.classList.add("hold")
     setTimeout(() =>
     { // для того чтобы при перетягивании не скрывалась карточка сразу 
          event.target.classList.add("hide")
     }, 0)
}

function dragend(event)
{
     event.target.className = ("item") // className работает со строчкой 
     // event.target.classList.remove("hold") // classList работает с объектом 
     // event.target.classList.remove("hide")
}

function dragover(event)  // когда элемент находится над областью placeholder 
{
     event.preventDefault()
}

function dragenter(event) // когда элемент заходит на территорию
{
     event.target.classList.add("hovered")
}

function dragleave(event) // перетащили но вышли с области 
{
     event.target.classList.remove("hovered")
}

function drop(event)  // когда отпустили элемент 
{
     event.target.classList.remove("hovered")
     event.target.append(item)
}