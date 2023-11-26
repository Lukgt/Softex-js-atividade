const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'seu_banco_de_dados'
});

// Tentativa de conexão com o banco de dados
connection.connect((e) => {
  if (e) {
    console.error('Erro ao conectar ao banco de dados:', e.message);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados!');
  }
});

connection.end();
