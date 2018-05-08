var express = require('express');
var router = express.Router();
var machinesController = require('../controllers/machines');

router.get('/api/machines', machinesController.index);

module.exports = router;