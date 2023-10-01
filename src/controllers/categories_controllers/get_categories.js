const {Category} = require('../../db'); 

async function getCategories(req, res) {
  try {
    const categories = await Category.find();

    res.json(categories);
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    res.status(500).json({ error: 'No se pudieron obtener las categorías' });
  }
}

module.exports = getCategories;
