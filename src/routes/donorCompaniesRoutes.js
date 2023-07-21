const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

// Array para armazenar as empresas/pessoas doadoras, 
let donorCompanies = [
  {
    id: 1,
    name: 'Empresa ABC',
    phone: '111111111',
    email: 'empresaabc@example.com',
    donationType: 'Bolsa de estudos',
  },
  {
    id: 2,
    name: 'pessoa XYZ',
    phone: '222222222',
    email: 'pessoa@example.com',
    donationType: 'Empréstimo de notebook',
  },
  {
    id: 3,
    name: 'Empresa 123',
    phone: '333333333',
    email: 'empresa123@example.com',
    donationType: 'Contrato de estágio',
  },
];

// Rota para listar todas as empresas ou pessoas que farão doações
router.get('/', (req, res) => {
  res.json(donorCompanies);
});

// Rota para cadastrar uma nova empresa ou pessoa doadora
router.post('/', (req, res) => {
  const { name, phone, email, donationType } = req.body;

  if (!name || !phone || !email || !donationType) {
    return res.status(400).json({ error: 'Por favor, preencha todos os campos obrigatórios.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    return res.status(400).json({ error: 'Por favor, forneça um email válido.' });
  }

  // Gerador ID único para a nova empresa ou pessoa 
  const newId = donorCompanies.length > 0 ? donorCompanies[donorCompanies.length - 1].id + 1 : 1;

  // Aqui crio o objeto da nova empresa doadora
  const newDonorCompany = {
    id: newId,
    name,
    phone,
    email,
    donationType,
  };

  // Aqui adiciona a nova empresa doadora no array
  donorCompanies.push(newDonorCompany);

  // Aqui retorne a empresa doadora recém-cadastrada como resposta
  res.status(201).json(newDonorCompany);
});

module.exports = router;