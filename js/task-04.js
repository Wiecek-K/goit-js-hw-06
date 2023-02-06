let counterValue = 0

const body = document.body
const counter = document.querySelector('#counter')
const buttons = counter.querySelectorAll('button')
const display = counter.querySelector('#value')
const decrementBtn = buttons[0]
const incrementBtn = buttons[1]
decrementBtn.addEventListener('click', () => {
  counterValue--
  display.textContent = counterValue
})
incrementBtn.addEventListener('click', () => {
  counterValue++
  display.textContent = counterValue
})
