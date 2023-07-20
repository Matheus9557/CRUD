const Food = require('../models/Food');

const index = async (req, res) => {
  const categoria = req.query.categoria;
  let foods = null;

  if (categoria) {
    foods = await Food.readByCategory(categoria);
   
  } else {
    foods = await Food.readAll();
  
  }

  res.render('foods/index.njk', { foods });
};

module.exports = { index };
