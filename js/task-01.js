const body = document.body
const list = body.querySelector('#categories')
const listItems = [...list.children]
console.log(`Number of categories: ${listItems.length}`)
listItems.forEach((e) => {
  const items = [...e.querySelector('ul').children]
  console.log(
    `Category: ${e.querySelector('h2').textContent} \nElements: ${
      items.length
    }`,
  )
})
