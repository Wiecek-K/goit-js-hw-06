let counterValue = 0
const body = document.body
const counter = document.querySelector('#counter')
const display = counter.querySelector('#value')
const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')
// const buttons = counter.querySelectorAll('button')
// const decrementBtn = buttons[0]
// const incrementBtn = buttons[1]
decrementBtn.addEventListener('click', () => {
  counterValue--
  display.textContent = counterValue
})
incrementBtn.addEventListener('click', () => {
  counterValue++
  display.textContent = counterValue
})
