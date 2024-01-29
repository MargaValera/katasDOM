//! 1.1 Inserta dinamicamente en un html un div vacio con javascript.

const divv = document.createElement('div')
document.body.appendChild(divv)

//! 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const dib = document.createElement('div')
const pe = document.createElement('p')
dib.appendChild(pe)
document.body.appendChild(dib)

//! 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const dibe = document.createElement('div')

for (let i = 1; i <= 5; i++) {
  const pee = document.createElement('p')
  dib.appendChild(pee)
}
document.body.appendChild(dibe)

//! 1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const pi = document.createElement('p')
pi.textContent = 'Soy dinámico'
document.body.appendChild(pi)

//! 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const hacheDos = document.querySelectorAll('.fn-insert-here')
for (const hacheDo of hacheDos) {
  hacheDo.textContent = 'Wubba Lubba dub dub'
}

//! 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const app = document.createElement('ul')
document.body.appendChild(app)

const print = () => {
  for (const ap of apps) {
    const apli = document.createElement('li')
    apli.textContent = ap
    app.appendChild(apli)
  }
}
print(apps)

//! 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const borrar = document.querySelectorAll('.fn-remove-me')

borrar.forEach((borra) => {
  borra.remove()
})

//! 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.	Recuerda que no solo puedes insertar elementos con .appendChild.

// const parrafo = document.createElement('p')
// parrafo.textContent = 'Voy en medio!'

// const after = document.querySelectorAll('div')[1]
// after.parentNode.insertBefore(parrafo, after)

//? otra manera de hacerlo con el método insertAdjacentHTML:

const primaryDiv = document.querySelector('div')
primaryDiv.insertAdjacentHTML('afterend', '<p>Voy en medio!</p>')

//! 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase	.fn-insert-here

const parra = document.querySelectorAll('.fn-insert-here')

parra.forEach((elemen) => {
  const parr = document.createElement('p')
  parr.textContent = 'Voy dentro!'
  elemen.appendChild(parr)
})
