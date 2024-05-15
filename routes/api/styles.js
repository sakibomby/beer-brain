const express = require('express');
const router = express.Router();
const stylesCtrl = require('../../controllers/api/styles');

// GET /api/styles
router.get('/', stylesCtrl.index);


module.exports = router;
