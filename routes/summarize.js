
const express = require('express');
const router = express.Router();
const { summarizeText } = require('../controllers/summarizeController');

router.post('/summarize', summarizeText); // 👈 must be /summarize

module.exports = router;

