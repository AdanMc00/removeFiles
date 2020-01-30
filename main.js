
const fs = require('fs')

function LimpiadorDeArchivos(path = '') {
    if (fs.existsSync(path)) {
        //console.log("inicio")
        fs.readdir(path, (err, files) => {
            if (err) throw err;
            if (files.length > 0) {
                console.log("adentro")
                for (let i = 0; i < files.length; i++) {
                    fs.unlink(`${path}/${files[i]}`, (err) => {
                        if (err) throw err;
                        console.log('file was deleted');
                    })
                }
            } else {
                fs.rmdir(path, {
                    recursive: false
                }, (err) => {
                    if (err) throw err;
                })
            }
        })
    }
}

LimpiadorDeArchivos('prueba')