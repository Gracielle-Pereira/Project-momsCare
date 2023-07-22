// motherController.js
const Mother = require('../models/mother');

const motherController = {};

// Função para listar todas as mães
motherController.getAllMothers = async (req, res) => {
  try {
    const mothers = await Mother.find();
    res.json(mothers);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar as mães' });
  }
};

// Função para buscar uma mãe pelo ID
motherController.getMotherById = async (req, res) => {
  try {
    const { id } = req.params;
    const mother = await Mother.findById(id);
    if (!mother) {
      return res.status(404).json({ error: 'Mãe não encontrada' });
    }
    res.json(mother);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar a mãe' });
  }
};

// Função para cadastrar uma nova mãe
motherController.createMother = async (req, res) => {
  try {
    const { name, children } = req.body;
    const mother = new Mother({ name, children });
    await mother.save();
    res.status(201).json(mother);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar a mãe' });
  }
};

// Função para atualizar uma mãe pelo ID
motherController.updateMother = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, children } = req.body;
    const updatedMother = await Mother.findByIdAndUpdate(id, { name, children }, { new: true });
    if (!updatedMother) {
      return res.status(404).json({ error: 'Mãe não encontrada' });
    }
    res.json(updatedMother);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar a mãe' });
  }
};

// Função para excluir uma mãe pelo ID
motherController.deleteMother = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMother = await Mother.findByIdAndDelete(id);
    if (!deletedMother) {
      return res.status(404).json({ error: 'Mãe não encontrada' });
    }
    res.json({ message: 'Mãe deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir a mãe' });
  }
};

module.exports = motherController;