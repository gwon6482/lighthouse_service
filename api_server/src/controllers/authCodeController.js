const AuthCode = require('../models/AuthCode');

exports.createAuthCode = async (req, res) => {
  const { code } = req.body;
  const existingCode = await AuthCode.findOne({ code });
  if (existingCode) {
    return res.status(409).json({ message: "이미 존재하는 코드입니다." });
  }

  try {
    const newCode = new AuthCode(req.body);
    await newCode.save();
    return res.status(201).json(newCode);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// 데이터베이스에 접속해서 해당 코드의 존재 여부 확인
exports.checkAuthCode = async (req, res) => {
  const { code } = req.params;
  const authCode = await AuthCode.findOne({ code });
  res.json(authCode ? true : false);
};

// 다른 CRUD 함수들...

