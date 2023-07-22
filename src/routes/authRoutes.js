const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Importe o modelo de usuário (supondo que você já criou um modelo para usuários)
const User = require('../models/user');

// Importe o middleware de autenticação
const authMiddleware = require('./');

// Rota para registro de novos usuários
router.post('/register', async (req, res) => {
  // ... código para registro de usuários ...
});

// Rota para login dos usuários
router.post('/login', async (req, res) => {
  // ... código para login de usuários ...
});

// Exemplo de rota protegida por autenticação
router.get('/protected', authMiddleware, (req, res) => {
  // Se o middleware de autenticação passou, o usuário está autenticado
  // e você pode acessar os dados do usuário através de req.user
  res.json({ message: 'Rota protegida. Acesso autorizado.', user: req.user });
});

module.exports = router;
