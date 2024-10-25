const mongoose = require('mongoose');

const authCodeSchema = new mongoose.Schema({
  code: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  // 필요시 필드 추가 가능
});

module.exports = mongoose.model('AuthCode', authCodeSchema, 'auth_codes');