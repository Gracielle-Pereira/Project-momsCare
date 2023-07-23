const mongoose = require('mongoose');

const childcareSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Childcare = mongoose.model('Childcare', childcareSchema);

module.exports = Childcare;
