let counterValue = 0

const body = document.body
const counter = document.querySelector('#counter')
const display = counter.querySelector('#value')
const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')
decrementBtn.disabled = true

counter.addEventListener('click', () => {
  decrementBtn.disabled = counterValue < 1 ? true : false
})
decrementBtn.addEventListener('click', () => {
  counterValue--
  //   if (counterValue < 1) {
  //     counterValue = 0
  //   }
  display.textContent = counterValue
})
incrementBtn.addEventListener('click', () => {
  counterValue++
  display.textContent = counterValue
})
