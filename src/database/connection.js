const mongoose = require('mongoose');

const connectionString = process.env.DB_CONNECTION_STRING;

const connectDB = async () => {
  try {
    if (!connectionString) {
      throw new Error('A variável de ambiente DB_CONNECTION_STRING não foi definida.');
    }

    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
