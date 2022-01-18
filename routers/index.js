const express = require('express');
const searchPost = require('./search');

const router = express.Router();

router.use('/search', searchPost);

module.exports = router;