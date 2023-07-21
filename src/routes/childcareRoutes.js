// childcareRoutes.js

const express = require('express');
const router = express.Router();

// Rota fictícia para listar todas as instituições gratuitas
router.get('/institutions', (req, res) => {
  const institutions = [
    {
      id: 1,
      name: 'Creche Feliz',
      address: 'Rua das Crianças, 123',
      phone: '(11) 1234-5678'
    },
    {
      id: 2,
      name: 'Cuidando Juntos',
      address: 'Av. dos Pequeninos, 456',
      phone: '(11) 9876-5432'
    },
    // Mais instituições fictícias...
  ];
  res.json(institutions);
});

// Rota fictícia para listar todos os projetos do governo
router.get('/government-projects', (req, res) => {
  const governmentProjects = [
    {
      id: 1,
      name: 'Projeto Mães Estudantes',
      description: 'Apoio às mães estudantes com cuidado infantil gratuito',
      contact: 'projeto-maes-estudantes@gov.br'
    },
    {
      id: 2,
      name: 'Criança Segura',
      description: 'Projeto de segurança infantil nas escolas',
      contact: 'crianca-segura@gov.br'
    },
    // Mais projetos fictícios...
  ];
  res.json(governmentProjects);
});

module.exports = router;