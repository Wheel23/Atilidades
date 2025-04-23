const fs = require('fs')


console.log('antes')
//fs.readFile('./teste.txt', 'utf-8', (err,data) => {
    
    if(err){
        console.log(err)
    }
    console.log(data)
//})

//console.log('depois')

//const texto = 'teste 12345'
//fs.writeFile('texto.txt', texto, (err) => {
//console.log(err)
//})

const textso = 'adadwaddasd'
fs.appendFile('texto.txt', textso, (err)=> {
    if(err){
        console.log(err)
    }
    console.log('durante')
})

console.log('depois')

const texxsto = 'adawwwwww'

console.log('Antes')
