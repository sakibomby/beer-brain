const express = require('express');
const router = express.Router();
const beersCtrl = require('../../controllers/api/beers');

// GET /api/beers
router.get('/', beersCtrl.index);
// GET /api/beers/:id
router.get('/:id', beersCtrl.show);
// POST /api/beers
router.post('/', beersCtrl.create);

module.exports = router;
