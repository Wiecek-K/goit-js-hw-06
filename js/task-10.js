const getRandomHexColor = () => '#' + Math.random().toString(16).substr(2, 6)
const getRandomHslColor = () => `hsl(${Math.random() * 360}, 50%, 50%)`
const boxes = document.querySelector('#boxes')
const controls = document.querySelector('#controls')
const amount = controls.querySelector('input')
const boxCreator = controls.querySelector('button[data-create]')
const boxDestroyer = controls.querySelector('button[data-destroy]')

const destroyBoxes = () => (boxes.innerHTML = '')

boxCreator.addEventListener('click', () => {
  for (let i = 0; i < amount.value; i++) {
    const div = document.createElement('div')
    div.style.width = 30 + i * 10 + 'px'
    div.style.height = 30 + i * 10 + 'px'
    div.style.backgroundColor = getRandomHexColor()
    boxes.append(div)
  }
})
boxDestroyer.addEventListener('click', () => destroyBoxes())
