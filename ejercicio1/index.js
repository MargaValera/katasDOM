//! 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const button = document.querySelector('.showme')
console.log(button)

//! 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const huno = document.querySelector('#pillado')
console.log(huno)

//! 1.3 Usa querySelector para mostrar por consola todos los p

const pes = document.querySelectorAll('p')
for (const pe of pes) {
  console.log(pe.textContent)
}

//! 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const pokemons = document.querySelectorAll('.pokemon')
pokemons.forEach((pokemon) => {
  console.log(pokemon.textContent)
})

//! 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const heros = document.querySelectorAll('[data-function="testMe"]')
heros.forEach((hero) => {
  console.log(hero.textContent)
})

//! 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

console.log(heros[2].textContent)
