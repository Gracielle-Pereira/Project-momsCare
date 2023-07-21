const express = require('express');
const router = express.Router();
const motherController = require('./src/controllers/montherController');

// Rota para listar todas as mães
router.get('/', motherController.getAllMothers);

// Rota para buscar mãe pelo ID
router.get('/:id', motherController.getMotherById);

// Rota para cadastrar uma nova mãe
router.post('/', motherController.createMother);

// Rota para atualizar uma mãe pelo ID
router.put('/:id', motherController.updateMother);

// Rota para excluir o cadastro de uma mãe pelo ID
router.delete('/:id', motherController.deleteMother);

module.exports = router;