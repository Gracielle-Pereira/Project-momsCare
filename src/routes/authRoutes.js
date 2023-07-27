const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Importe o middleware de autenticação
const authMiddleware = require('../JWT/authMiddleware')

// Importe o modelo de usuário (supondo que você já criou um modelo para usuários)
const User = require('../models/user');

// Rota para registro de novos usuários
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Verifique se o usuário já existe com o mesmo email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Usuário já existe com esse email' });
    }

    // Crie um novo usuário
    const user = new User({ username, email, password });
    await user.save();

    // Retorne os dados do usuário recém-criado
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar usuário' });
  }
});

// Rota para login dos usuários
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Verifique se o usuário existe com o email fornecido
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    // Verifique a senha do usuário
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Senha inválida' });
    }

    // Gere um token de autenticação
    const token = jwt.sign({ userId: user._id }, 'sua_chave_secreta');

    // Retorne o token de autenticação
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao realizar login' });
  }
});

// Exemplo de rota protegida por autenticação
router.get('/protected', authMiddleware, (req, res) => {
  // Se o middleware de autenticação passou, o usuário está autenticado
  // e você pode acessar os dados do usuário através de req.user
  res.json({ message: 'Rota protegida. Acesso autorizado.', user: req.user });
});

module.exports = router;
