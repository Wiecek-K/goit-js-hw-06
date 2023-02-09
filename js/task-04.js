const display = counter.querySelector('#value')
const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')

class watchDog {
  #cntV
  constructor(value) {
    this.#cntV = value
  }
  get cntV() {
    return this.#cntV
  }
  set cntV(nevValue) {
    this.#cntV = nevValue
    display.textContent = this.#cntV
    decrementBtn.disabled = this.#cntV < 1 ? true : false
  }
}
let watchCntV = new watchDog(0)

decrementBtn.addEventListener('click', () => {
  watchCntV.cntV--
})
incrementBtn.addEventListener('click', () => {
  watchCntV.cntV++
})

document.addEventListener('keydown', () => {
  watchCntV.cntV += 3
})
