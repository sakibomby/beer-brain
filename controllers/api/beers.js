const Beer = require('../../models/beer');

module.exports = {
  index,
  show,
  create,
  addToList,
  getMyBeers,
  removeMyBeer
};

async function removeMyBeer(req, res) {
  const beer = await Beer.findById(req.params.id);
  beer.users.remove(req.user._id);
  await beer.save();
  const beers = await Beer.find({ users: req.user._id });
  res.json(beers);
}


async function getMyBeers(req, res) {
  const beers = await Beer.find({ users: req.user._id }).populate('style');
  res.json(beers);
}

async function addToList(req, res) {
  const beer = await Beer.findById(req.params.id);
  if (!beer.users.some((u) => u.equals(req.user._id))) {
    beer.users.push(req.user._id)
  }
  await beer.save();
  res.json(beer);
}

async function create(req, res) {
  req.body.user = req.user._id;
  req.body.users = [req.user._id];
  console.log(req.body);
  try {
    const beer = await Beer.create(req.body);
    res.json(beer);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
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
