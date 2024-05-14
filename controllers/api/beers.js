const Beer = require('../../models/beer');

module.exports = {
  index,
  show,
  create,
  addToList,
  getMyBeers
};

async function getMyBeers(req, res) {
  const beers = await Beer.find({users: req.user._id});
  res.json(beers);
}

async function addToList(req, res ) {
const beer = await Beer.findById(req.params.id);
if (!beer.users.includes(req.user._id)) {
  beer.users.push(req.user._id)
}
await beer.save();
}

async function create(req, res) {
  req.body.user = req.user._id;
  const beer = await Beer.create(req.body);
  res.json(beer);
}

async function index(req, res) {
  const beers = await Beer.find({}).sort('name').populate('style').exec();
  beers.sort((a, b) => a.style.sortOrder - b.style.sortOrder);
  res.json(beers);
}

async function show(req, res) {
  const beer = await Beer.findById(req.params.id);
  res.json(beer);
}
