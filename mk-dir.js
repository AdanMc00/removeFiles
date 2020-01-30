
const fs = require('fs')

function crearDirectorio (path=''){
fs.mkdir(path, { recursive: true }, (err) => {
    if (err) throw err;
  })
}
crearDirectorio('prueba')