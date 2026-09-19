import 'dotenv/config';
import  express  from "express";
import { testarConexao } from "./src/DAO/banco/conexao.js";
import { buscarUsuarios } from "./src/DAO/get.js";
import { cadastrarUsuario } from './src/DAO/post.js';

const app = express()

app.use(express.json())

app.listen(3000, async ()=> {
    testarConexao()
    console.log("Servidor rodando na porta: 3000");
});

app.get("/usuarios", async (req,res) =>{
    let usuarios = await buscarUsuarios()
    res.json(usuarios)
})

app.post("/cadastrarUsuario", async (req, res) =>{
    let {nome, idade} = req.body

    const infos = [nome, idade]

    let resultado = await cadastrarUsuario(infos)
    res.json(resultado)
})