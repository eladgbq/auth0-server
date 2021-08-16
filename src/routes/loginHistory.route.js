const express = require('express');
const loginHistoryController = require('../controllers/loginHistory.controller');
const router = express.Router();

router.post('/', loginHistoryController.addLogin);
router.get('/:userName', loginHistoryController.getLoginHistoryForUser);

module.exports = router;