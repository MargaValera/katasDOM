//! Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

const disc = document.createElement('ul')
document.body.appendChild(disc)

const insert = () => {
  for (const album of albums) {
    const albu = document.createElement('li')
    albu.textContent = album
    disc.appendChild(albu)
  }
}
insert(albums)
