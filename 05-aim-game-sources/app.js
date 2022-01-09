const startBtn = document.querySelector("#start")
const timeList = document.querySelector("#time-list")
const screens = document.querySelectorAll(".screen")
const timeEl = document.querySelector("#time")
const board = document.querySelector('#board')
let time = 0 // таймеры игры 
let score = 0 // счет игры 

startBtn.addEventListener('click', (event) =>
{
     event.preventDefault();
     screens[0].classList.add('up')
})

timeList.addEventListener("click", (event) =>
{
     // делегирование событий 
     if (event.target.classList.contains("time-btn")) {
          time = parseInt(event.target.getAttribute('data-time'))
          screens[1].classList.add('up')
          startGame()
     }
})

board.addEventListener('click', (event) =>
{
     if (event.target.classList.contains('circle')) {
          score++
          event.target.remove()
          creatRandomCircle()
     }
})

function startGame()
{
     setInterval(decreeseTime, 1000)
     setTime(time)
     creatRandomCircle()
}

function setTime(value)
{
     timeEl.innerHTML = `00: ${value}`
}

function decreeseTime()
{
     if (time === 0) {
          finishGame()

     } else {
          let current = --time
          if (current < 10) {
               current = `0${current}`
          }

          setTime(current)
     }
}

function finishGame()
{
     timeEl.parentNode.classList.add("hide")
     board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
}

function getRandomColor()
{
     const colors = ["red", "blue", "white", "green"]
     return colors[Math.floor(Math.random() * colors.length)]
}

function creatRandomCircle()
{
     let randomColor = getRandomColor()
     const circle = document.createElement('div')
     const size = getRandomNumber(10, 60)
     const { width, height } = board.getBoundingClientRect() // object координаты поля со значениями доски 
     const x = getRandomNumber(0, width - size);
     const y = getRandomNumber(0, height - size);
     circle.classList.add("circle")
     circle.style.background = `linear-gradient(90deg, ${randomColor} 0%, ${randomColor} 47%, ${randomColor} 100%)`
     circle.style.width = `${size}px`
     circle.style.height = `${size}px`
     circle.style.top = `${y}px`
     circle.style.left = `${x}px`

     board.append(circle)
}

function getRandomNumber(min, max)
{
     return Math.round(Math.random() * (max - min) + min)
}

function winTheGame()
{
     function kill()
     {
          const circle = document.querySelector(".circle")
          if (circle) {
               circle.click()
          }
     }

     setInterval(kill, 75)
}

