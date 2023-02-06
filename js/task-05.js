const body = document.body
const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')
input.addEventListener('input', (event) => {
  console.log(input.textContent)
  output.textContent = event.currentTarget.value || 'Anonymous'
})
