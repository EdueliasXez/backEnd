const {Review} = require("../../db");

async function getReviews(req, res) {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error al obtener revisiones:", error);
    res.status(500).json({ error: "Error al obtener revisiones" });
  }
}

module.exports = getReviews
