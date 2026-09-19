import { pool } from "./banco/conexao.js";
async function buscarUsuarios(){
  
    const sql = `SELECT * FROM usuarios;`
    
    try {
        // Executar a consulta
        const [rows, fields] = await pool.query(sql);
        return rows
      } catch (err) {
        return err.message
      }
}

export {buscarUsuarios}

