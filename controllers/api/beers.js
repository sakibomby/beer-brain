const Beer = require('../../models/beer');

module.exports = {
  index,
  show,
  create
};

async function create(req, res) {
  req.body.user = req.body._id;
  const beer = await Beer.create(req.body);
  res.json(beer);
}

async function index(req, res) {
  const beers = await Beer.find({}).sort('name').populate('category').exec();
  beers.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(beers);
}

async function show(req, res) {
  const beer = await Beer.findById(req.params.id);
  res.json(beer);
}