const body = document.body
const input = body.querySelector('#validation-input')
input.addEventListener('input', (event) => {
  if (event.currentTarget.value.length === input.dataset.length - 0) {
    input.classList.add('valid')
    input.classList.remove('invalid')
  } else {
    input.classList.add('invalid')
    input.classList.remove('valid')
  }
})
