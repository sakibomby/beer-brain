const express = require('express');
const router = express.Router();
const beersCtrl = require('../../controllers/api/beers');

// GET /api/beers
router.get('/', beersCtrl.index);
// GET /api/beers/:id
router.get('/myId', beersCtrl.getMyBeers);
// POST /api/beers
router.post('/', beersCtrl.create);

router.post('/:id', beersCtrl.addToList);

module.exports = router;
