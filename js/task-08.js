const form = document.querySelector('.login-form')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const {
    elements: { email, password },
  } = event.currentTarget
  if (!(email.value && password.value)) {
    window.alert('Wszystkie pola muszą być wypełnione')
    return
  }
  const user = { email: email.value, password: password.value }
  form.reset()
  console.log(user)
})
