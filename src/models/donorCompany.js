const mongoose = require('mongoose');

const donorCompanySchema = new mongoose.Schema({
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

const DonorCompany = mongoose.model('DonorCompany', donorCompanySchema);

module.exports = DonorCompany;
