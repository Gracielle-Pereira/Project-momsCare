require('dotenv').config();
const express = require('express');
const connectDB = require('./src/database/connection');
const motherRoutes = require('./src/routes/motherRoutes');
const childcareRoutes = require('./src/routes/childcareRoutes');
const donorCompaniesRoutes = require('./src/routes/donorCompaniesRoutes');
const swaggerUi = require('swagger-ui-express');


// Inicializar o servidor Express
const app = express();

// Conectar ao banco de dados MongoDB
const DB_PORT = process.env.DB_PORT;
app.listen(DB_PORT, () => console.log(`Listening on port: ${DB_PORT}`));

// Configurar middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configurar a documentação do Swagger
const swaggerFile = require('../MomsCare/swagger/swagger_output.json')

app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Definir as rotas da API
app.use('/mothers', motherRoutes);
app.use('/childcare', childcareRoutes); // Rotas para as instituições gratuitas e projetos do governo
app.use('/donor-companies', donorCompaniesRoutes); // Rota para as empresas doadoras

// Rota de teste
app.get('/', (req, res) => {
  res.send('Bem-vindo à API MomsCare');
});

// Porta do servidor
const PORT = process.env.PORT || 5000;

// Inicializar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
