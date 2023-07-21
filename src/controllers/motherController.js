const Mother = require('../models/mother');

const motherController = {};

motherController.getAllMothers = async (req, res) => {
  try {
    const mothers = await Mother.find();
    res.json(mothers);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar as mães' });
  }
};

motherController.createMother = async (req, res) => {
  const { name, children } = req.body;

  try {
    const mother = new Mother({ name, children });
    await mother.save();
    res.status(201).json(mother);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar a mãe' });
  }
};

motherController.updateMother = async (req, res) => {
  const { id } = req.params;
  const { name, children } = req.body;

  try {
    const updatedMother = await Mother.findByIdAndUpdate(
      id,
      { name, children },
      { new: true }
    );
    res.json(updatedMother);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar a mãe' });
  }
};

motherController.deleteMother = async (req, res) => {
  const { id } = req.params;

  try {
    await Mother.findByIdAndDelete(id);
    res.json({ message: 'Mãe deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar a mãe' });
  }
};

module.exports = motherController;
