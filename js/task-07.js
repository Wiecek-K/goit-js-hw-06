const body = document.body
const input = body.querySelector('#font-size-control')
const text = body.querySelector('#text')
input.addEventListener('input', (event) => {
  console.log(event.currentTarget.value)
  text.style.fontSize = event.currentTarget.value + 'px'
})
