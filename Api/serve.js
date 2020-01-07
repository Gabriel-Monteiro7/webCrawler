const express = require('express');
const app = express();

const rotas = require("./rotas");

app.use('/',rotas);

const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log("Conectado");
    
})