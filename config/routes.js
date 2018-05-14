const express = require('express');
const router = express.Router();
const machinesController = require('../controllers/machines');
const commentsController = require('../controllers/comments');
const eventsController = require('../controllers/events');

router.get('/api/machines', machinesController.index);
router.get('/api/machines/:machine_id', machinesController.show);
router.post('/api/machines', machinesController.create);

router.post('/api/machines/:machine_id/comments', commentsController.create);
router.put('/api/comments/:comment_id', commentsController.update);
router.delete('/api/comments/:comment_id', commentsController.destroy);

router.get('/api/events', eventsController.index);
router.get('/api/events/:event_id', eventsController.show);
router.post('/api/events', eventsController.create);
router.put('/api/events/:event_id', eventsController.update);
router.delete('/api/events/:event_id', eventsController.destroy);

module.exports = router;