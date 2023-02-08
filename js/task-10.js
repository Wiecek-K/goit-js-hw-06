const getRandomHexColor = () => '#' + Math.random().toString(16).substr(2, 6)
const getRandomHslColor = () => `hsl(${Math.random() * 360}, 50%, 50%)`
const boxes = document.querySelector('#boxes')
const controls = document.querySelector('#controls')
const amount = controls.querySelector('input')
const boxCreator = controls.querySelector('button[data-create]')
const boxDestroyer = controls.querySelector('button[data-destroy]')

const destroyBoxes = () => (boxes.innerHTML = '')
let boxCnt = 0

boxCreator.addEventListener('click', () => {
  for (let i = 0; i < amount.value; i++) {
    const div = document.createElement('div')
    div.style.width = boxCnt * 10 + 30 + 'px'
    div.style.height = boxCnt * 10 + 30 + 'px'
    div.style.backgroundColor = getRandomHexColor()
    boxes.append(div)
    boxCnt++
  }
})
boxDestroyer.addEventListener('click', () => {
  destroyBoxes()
  boxCnt = 0
})
