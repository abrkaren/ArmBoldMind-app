const express = require('express')
const controller = require('../controllers/guest')
const router = express.Router()

router.post('/', controller.createGuest);
router.get('/', controller.getGuests);

module.exports = router