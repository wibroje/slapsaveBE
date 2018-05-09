var express = require('express');
var router = express.Router();
var machinesController = require('../controllers/machines');

router.get('/api/machines', machinesController.index);
router.get('/api/machines/:machine_id', machinesController.show)

module.exports = router;