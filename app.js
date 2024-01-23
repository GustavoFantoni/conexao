const express = require('express');
const app = express();
const User = require('./models/User');

app.use(express.json());

app.get('/', async (req, res) => {
    res.send("Página Inicial");
})
app.post('/cadastrar', async (req, res) => {

    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuario Cadastrado!"
        })
    }).catch(() => { 
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuario não cadastrado com sucesso!"
        })
    })

    res.send("Página Cadastrar");
    
})
app.listen(8080, () => {
    console.log("Server iniciado na porta 8080: http://localhost:8080")
});
