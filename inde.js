const express = require('express')


const app = express()
const PORT = 8000
app.use(express.json())

const bancoDeDados = [
    {
        id:1,
        professor:'Ramon',
        Turma:'3B',
        Area:'Tecnico em desenvolvimento de sistemas'
    }
]
app.get('/aulas',(req,res) => {
    res.status(200).send(bancoDeDados)
})


app.get('/aulas:id',(req,res) => {
    console.log(req.params.id)
    res.send('qualquer coisa')
})

app.post('/aulas', (req, res) => {
    const dados = req.body
    dados['id'] = bancoDeDados.length +1
    bancoDeDados.push(dados)
    res.status(201)
})


app.listen(PORT, () => {console.log('Servidor Online')})