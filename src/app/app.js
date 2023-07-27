const express = require('express');
const connectDB = require('../database/connection');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const app = express();

// Configurar middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configurar a documentação do Swagger
const swaggerFile = require(path.join(__dirname, '..', 'swagger', 'swagger_output.json'));
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Definir as rotas da API
const motherRoutes = require('../routes/motherRoutes');
const childcareRoutes = require('../routes/childcareRoutes');
const donorCompaniesRoutes = require('../routes/donorCompaniesRoutes');
const authRoutes = require('../routes/authRoutes'); // Importe o arquivo authRoutes.js

app.use('/mothers', motherRoutes);
app.use('/childcare', childcareRoutes);
app.use('/donor-companies', donorCompaniesRoutes);

// Adicione as rotas de autenticação
app.use('/auth', authRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.send('Bem-vindo à API MomsCare');
});

module.exports = app;
