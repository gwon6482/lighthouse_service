const express = require('express');
const router = express.Router();
const authCodeController = require('../src/controllers/authCodeController');

router.post('/', authCodeController.createAuthCode);
router.get('/:code', authCodeController.checkAuthCode);
// 다른 라우트들 추후 추가 예정

module.exports = router;