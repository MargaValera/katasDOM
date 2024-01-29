//! Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']

const lugares = document.createElement('ul')
const imprimir = document.querySelector('[data-function="printHere"]')
imprimir.appendChild(lugares)

const printHere = () => {
  for (const place of places) {
    const lugar = document.createElement('li')
    lugar.textContent = place
    lugares.appendChild(lugar)
  }
}
printHere(places)
