const mongoose = require('mongoose');

const motherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  children: {
    type: Number, // Alterado para Number
    required: true,
  },
});

const Mother = mongoose.model('Mother', motherSchema);

module.exports = Mother;
