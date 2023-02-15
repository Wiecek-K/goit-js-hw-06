const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]
const body = document.body
const list = body.querySelector('#ingredients')
ingredients.forEach((e) => {
  const listItem = document.createElement('li')
  listItem.classList.add('item')
  listItem.textContent = e
  list.append(listItem)
})
