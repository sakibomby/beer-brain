const Style = require('../../models/style');

module.exports = {
  index,
  
};

async function index(req, res) {
  const styles = await Style.find({}).sort('name');
  res.json(styles);
}