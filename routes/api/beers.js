const express = require('express');
const router = express.Router();
const beersCtrl = require('../../controllers/api/beers');

// GET /api/beers
router.get('/', beersCtrl.index);
// GET /api/beers/:id
router.get('/', beersCtrl.show);
// GET /api/beers/:id
router.get('/myId', beersCtrl.getMyBeers);
// POST /api/beers
router.post('/', beersCtrl.create);
// POST /api/beers/:id
router.put('/:id/my-list', beersCtrl.addToList);
//DELETE /api/beer/:id
router.delete('/:id', beersCtrl.removeMyBeer)

module.exports = router;
