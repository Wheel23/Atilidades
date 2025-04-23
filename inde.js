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


app.get('/aulas/:id',(req,res) => {
    console.log(req.params.id)
    res.send('dados')
    res.send(bancoDeDados)
})

app.post('/aulas/:id', (req, res) => {
    const dados = req.body
    dados['id'] = bancoDeDados.length +1
    bancoDeDados.push(dados)
    res.status(201)
    res.send('Ok')
    res.send(bancoDeDados)
})

app.put('/aulas/:id', (req,res) => {
    const id = req.params.id
    const usuario = bancoDeDados.find(user => user.id === id)
    if(!usuario){
        res.status(404).json({msg:'usuario nao encontrado!'})
    }
    res.send('ok')
    res.send (bancoDeDados)
})

app.delete('/aulas/:id', (req,res) => {
    const id = req.params.id
    const userIndex = bancoDeDados.findIndex(user => user.id === id)
    if(userIndex = -1){
        res.status(404).json({msg: 'Usuario nao encontrado'})
    }
    bancoDeDados.splice(userIndex, 1)
    res.status(204).send()
    res.send (bancoDeDados)
})


app.listen(PORT, () => {console.log('Servidor Online')})