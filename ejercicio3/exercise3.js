//! 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

const list = document.createElement('ul')
list.id = 'listCountrie'
document.body.appendChild(list)

const printHTML = () => {
  for (const countrie of countries) {
    const oneCountrie = document.createElement('li')
    oneCountrie.textContent = countrie
    list.appendChild(oneCountrie)
  }
}
printHTML(countries)

//! 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const deleteElement = document.querySelector('.fn-remove-me')
if (deleteElement) {
  deleteElement.remove()
}

//! 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

const coches = document.createElement('ul')
divprintHere = document.querySelector('[data-function="printHere"]')
divprintHere.appendChild(coches)

const carList = () => {
  for (const car of cars) {
    const oneCar = document.createElement('li')
    oneCar.textContent = car
    coches.appendChild(oneCar)
  }
}
carList(cars)

//! 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

const countriess = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },

  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

const container = document.createElement('div')
document.body.appendChild(container)
container.className = 'div-container'

for (const country of countriess) {
  const newDiv = document.createElement('div')
  const titleH = document.createElement('h4')
  titleH.textContent = country.title
  const imgElement = document.createElement('img')
  imgElement.src = country.imgUrl
  imgElement.alt = country.title

  const addButton = document.createElement('button')
  addButton.textContent = 'Eliminar objeto'

  addButton.addEventListener('click', () => {
    newDiv.remove()
  })

  newDiv.appendChild(titleH)
  newDiv.appendChild(imgElement)
  newDiv.appendChild(addButton)
  container.appendChild(newDiv)
}

//! 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
// ? creado, funciona:
// const addButton = document.createElement('button')
// addButton.textContent = 'Eliminar objeto'

// addButton.addEventListener('click', () => {
//   const divs = document.querySelectorAll('div')
//   const lastDiv = divs[divs.length - 1]
//   if (lastDiv) {
//     lastDiv.remove()
//   }
// })

// document.body.appendChild(addButton)

//! 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
// ? realizado dentro del mismo bucle
