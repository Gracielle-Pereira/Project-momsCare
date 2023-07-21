const mongoose = require('mongoose');

const motherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  children: [
    {
      name: { type: String, required: true },
      age: { type: Number, required: true },
    },
  ],
});

const Mother = mongoose.model('Mother', motherSchema);

module.exports = Mother;
