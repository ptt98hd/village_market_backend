const express = require('express');

const router = express.Router();

router.post('/auth/login');
router.post('/auth/signup');

module.exports = router;
