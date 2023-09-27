const {Review} = require("../../db");
const mongoose = require("mongoose");

async function createReview(req, res) {
  try {
    const reviewData = req.body;

    if (!mongoose.Types.ObjectId.isValid(reviewData.userId)) {
      return res.status(400).json({ error: "El userId no es válido" });
    }

    if (!["event", "serviceProvider"].includes(reviewData.reviewedItemType)) {
      return res.status(400).json({ error: "El reviewedItemType no es válido" });
    }

    if (!mongoose.Types.ObjectId.isValid(reviewData.reviewedItemId)) {
      return res.status(400).json({ error: "El reviewedItemId no es válido" });
    }
    const newReview = await Review.create(reviewData);
    res.status(201).json(newReview);
  } catch (error) {
    console.error("Error al crear una revisión:", error);
    res.status(500).json({ error: "Error al crear una revisión" });
  }
}

module.exports = createReview
