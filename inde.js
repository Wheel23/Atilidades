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

app.post('/aulas', (req, res) => {
    const dados = req.body
    fs.readFile('bancoDeDados.json','utf-8',(err,data) =>{
        if(err){
        }
        const aulas = JSON.parse(data)
        dados['id'] = aulas.length +1
        aulas.push(dados)
        fs.writeFile('bancoDeDados.json',JSON.stringify(aulas),(err) => {
            if(err){
            res.status(500).json({msg:"Erro no servidor"})
    }
    res.status(201).send(dados)
})
        
    })
})

app.put('/aulas/:id', (req,res) => {
    fs.readFile('bancoDeDados.json', 'utf-8', (err,data) => {
        const aulas = JSON.parse(data)
        const aulaIndex = aulas.findIndex(aula => aula.id == id);
        if(aulaIndex !== -1){
            const dados =  req.body;
            for(key in dados){
                aulas[aulaIndex][key] = dados[key]
            }
            fs.writeFile('bancoDeDados', JSON.stringify(aulas), (err) => {
                if(err){
                    res.status(500).json({msg: 'erro no servidor'})
                }
                res.status(201).json(dados)
            })
        }res.status(404).json({msg: 'Aula não encontrada'})

    })
})
 

app.delete('/aulas/:id', (req,res) => {
   fs.readFile('bancoDeDados', 'utf-8', (err,data) => {
    if(err){
        res.status(500).json({msg: 'erro no servir'})
   }
   const aulas = JSON.parse(data)
   const aulaIndex = aulas.findIndex(aula => aula.id == id);
   if(aulaIndex !== -1){
    aulas.splice(aulaIndex, 1)
    fs.writeFile('bancoDeDados.json', JSON.stringify(aulas), (err) => {
        if(err){
            res.status(500).json({msg:'Erro no servidor'})
        }
        res.status(204).send()
    })
   }else{
    res.status(404).json({msg:"Not Found"})
   }
   })
})


app.listen(PORT, () => {console.log('Servidor Online')})