const form = document.querySelector('.login-form')
let { email, password } = form
//jeśli localStorage nie puste>wrzuc w pole form.email wartosc z userEmail
if (localStorage.getItem('userEmail') !== null) {
  email.value = localStorage.getItem('userEmail')
}
//aktualizacka localStorage userEmail
form.addEventListener('input', (event) => {
  localStorage.setItem('userEmail', email.value)
})
//po submit'cie wyzzeruj dane
form.addEventListener('submit', (e) => {
  localStorage.removeItem('userEmail')
})

form.addEventListener('submit', (event) => {
  event.preventDefault()
  if (!(email.value && password.value)) {
    window.alert('Wszystkie pola muszą być wypełnione')
    return
  }
  const user = { email: email.value, password: password.value }
  form.reset()
  console.log(user)
})
