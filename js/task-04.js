let counterValue = 0
const body = document.body
const counter = document.querySelector('#counter')
const display = counter.querySelector('#value')
const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')
if (counterValue < 1) {
  console.log(21)
}
decrementBtn.addEventListener('click', () => {
  counterValue--
  display.textContent = counterValue
})
incrementBtn.addEventListener('click', () => {
  counterValue++
  display.textContent = counterValue
})
