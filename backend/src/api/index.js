const express = require('express');

const emojis = require('./emojis');

const database = require('./database');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);

router.use('/database', database);

module.exports = router;
