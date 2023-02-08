const body = document.body
const changeColorBnt = document.querySelector('.change-color')
const colorDisplay = document.querySelector('.color')
const getRandomHexColor = () => '#' + Math.random().toString(16).substr(2, 6)
changeColorBnt.addEventListener('click', () => {
  const currentColor = getRandomHexColor()
  body.style.backgroundColor = currentColor
  colorDisplay.textContent = currentColor
})
