//! 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const btnToClick = document.getElementById('btnToClick')
btnToClick.addEventListener('click', function (event) {
  console.log('Evento del click', event)
})

//! 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const inputElement = document.getElementsByClassName('focus')[0]
inputElement.addEventListener('focus', function () {
  console.log(`el valor del elemento es: ${inputElement.value}`)
})

//! 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const valorInput = document.getElementsByClassName('value')[0]
valorInput.addEventListener('click', function () {
  console.log(`el valor del input es: ${valorInput.value}`)
})
