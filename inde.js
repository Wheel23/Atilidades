const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 8000
app.use(express.json())


app.get('/aulas',(req,res) => {
    fs.readFile('bancoDeDados.json', 'utf-8', (err, data)=>{
        if(err){
            res.status(500).json({msg:"erro no servidor"})
        }
        res.status(200).json(JSON.parse(data))
    })
})

app.get('/aulas/:id',(req,res) => {
    const id = req.params.id
    fs.readFile('bancoDeDados.json', 'utf-8', (err, data)=>{
        if(err){
            res.status(500).json({msg:"erro no servidor"})
        }
        const usuarios = JSON.parse(data)
        const user = usuarios.find(user => user.id == id)
        if(user){
            res.status(200).json(user)
        }
        res.status(404).json({msg:'Usuario Nao encontrado!'})
    })
})

app.post('/aulas/:id', (req, res) => {
    const dados = req.body
    fs.readFile('bancoDeDados.json','utf-8',(err,data) =>{
        if(err){
        }
        const aulas = JSON.parse(data)
        dados['id'] = aulas.length +1
        aulas.push(dados)
        fs.writeFile('bancoDeDados.json',aulas,(err) => {
            res.status(500).json({msg:"Erro no servidor"})
        })
        res.status(201).send(dados)
        console.log(aulas)
    })
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