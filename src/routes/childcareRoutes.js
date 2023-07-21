// childcareRoutes.js

const express = require('express');
const router = express.Router();

// Rota fictícia com listasde instituições gratuitas, se der tempo buscar instituições reais, olhar também se pode.
router.get('/institutions', (req, res) => {
  const institutions = [
    {
      id: 1,
      name: 'Creche Feliz',
      address: 'Rua blablabla, 123',
      phone: '(31) 1234-5678'
    },
    {
      id: 2,
      name: 'Cuidando Juntos',
      address: 'Av. dos Pinheiros, 321',
      phone: '(31) 8765-4321'
    },
    // Mais instituições fictícias...
  ];
  res.json(institutions);
});

// Rota fictícia onde listo os projetos do governo, se der tempo buscar projetos reais
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
    // se der tempo cadastrar mais projetos
  ];
  res.json(governmentProjects);
});

module.exports = router;