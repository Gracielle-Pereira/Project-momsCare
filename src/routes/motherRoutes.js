const express = require('express');
const router = express.Router();
const motherController = require('../controllers/motherController');

// Pré-cadastrar três mães
const preloadedMothers = [
  {
    id: 1,
    name: 'Maria da Silva',
    children: [
      { name: 'Pedro', age: 5 },
      { name: 'Julia', age: 8 },
    ],
  },
  {
    id: 2,
    name: 'Ana Souza',
    children: [
      { name: 'João', age: 4 },
    ],
  },
  {
    id: 3,
    name: 'Carolina Santos',
    children: [
      { name: 'Mariana', age: 6 },
      { name: 'Lucas', age: 10 },
      { name: 'Isabela', age: 12 },
    ],
  },
];

// Rota para listar todas as mães (incluindo as mães pré-cadastradas)
router.get('/', (req, res) => {
  res.json(preloadedMothers);
});

// Rota para buscar mãe pelo ID (não precisamos alterar essa rota)
router.get('/:id', motherController.getMotherById);

// Rota para cadastrar uma nova mãe (não precisamos alterar essa rota)
router.post('/', motherController.createMother);

// Rota para atualizar uma mãe pelo ID (não precisamos alterar essa rota)
router.put('/:id', motherController.updateMother);

// Rota para excluir o cadastro de uma mãe pelo ID (não precisamos alterar essa rota)
router.delete('/:id', motherController.deleteMother);

module.exports = router;
