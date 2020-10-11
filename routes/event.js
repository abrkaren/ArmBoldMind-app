const express = require('express')
const controller = require('../controllers/event')
const router = express.Router()

router.post('/', controller.createEvent);
router.get('/', controller.getEvents);

module.exports = router