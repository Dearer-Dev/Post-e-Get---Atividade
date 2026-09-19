import { pool } from "./banco/conexao.js"; // Não esqueça de importar o pool

async function cadastrarUsuario(infos) {
    // SQL ajustado para receber apenas nome e idade
    const sql = `INSERT INTO usuarios (nome, idade) VALUES (?, ?)`;
    
    // Pegando apenas as duas primeiras informações do array
    const valores = [infos[0], infos[1]];

    try {
        // O pool.query faz a inserção e gerencia a conexão sozinho
        const [results] = await pool.query(sql, valores);
        
        return { message: 'Você foi cadastrado!' };
    } catch (error) {
        console.error("Erro ao cadastrar cliente:", error);
        return error.message;
    }
}

export { cadastrarUsuario };