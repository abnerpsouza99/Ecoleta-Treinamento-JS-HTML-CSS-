// Importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose() // Para gerar mensagens do console

// Criar o objeto que irá operar no Banco de Dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// Utilizar o objeto de BdD para nossas operações
db.serialize(() => {
    // Criar tabelas
//    db.run(`
//        CREATE TABLE IF NOT EXISTS places (
//            id INTEGER PRIMARY KEY AUTOINCREMENT,
//            name TEXT,
//            image TEXT,
//            address TEXT,
//            address2 TEXT,
//            state TEXT,
//            city TEXT,
//            items TEXT
//        );
//    `) // ` para poder quebrar linha
//    
 //   // Inserir dados nas tabelas
//    const query = `
//        INSERT INTO places (
//        image,
//        name,
//        address,
//        address2,
//        state,
//        city,
//        items
 //   ) VALUES (?,?,?,?,?,?,?);
 //   
 //   `
  //  const values = [
 //       "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
 //       "Papersider",
 //       "Guilherme Gemballa, Jardim América",
 //       "Nº 260",
  //      "Santa Catarina",
  //      "Rio do Sul",
   //     "Resíduos Eletrônicos, Lâmpadas"
  //  ]
//
//    function afterInsertData(err){
//        if(err){
 //           return console.log(err)
  //      }else{
  //          console.log("Cadastrado com sucesso!")
  //          console.log(this)          
  //      }
  //  }
  //  db.run(query, values, afterInsertData)

    // Consultar dados  da tabela

  //  db.all(`SELECT * FROM places`, function(err, rows){
  //      if(err){
  //          return console.log(err)
  //      }
   //     console.log("Registros")
    //    console.log(rows)
   // })
    // Deletar dados da tabela

//    db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
//        if(err){
//            return console.log(err)
//       }
//    
//       console.log("Registro deletado com sucesso!")
//       })
})
