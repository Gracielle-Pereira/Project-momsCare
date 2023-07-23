const app = require('./src/app/app');
const connectDB = require('./src/database/connection');
require('dotenv').config();

// Conectar ao banco de dados MongoDB
connectDB()
  .then(() => {
    // Definir a porta do servidor
    const PORT = process.env.PORT || 3000;

    // Inicializar o servidor após a conexão com o banco de dados
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Erro ao conectar ao MongoDB:', error.message);
    process.exit(1);
  });
