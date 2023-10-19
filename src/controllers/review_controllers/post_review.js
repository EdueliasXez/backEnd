const { Review, Event, ServiceProvider, User } = require("../../db");
const mongoose = require("mongoose");

async function createReview(req, res) {
  try {
    const reviewData = req.body;

    if (!mongoose.Types.ObjectId.isValid(reviewData.userId)) {
      return res.status(400).json({ error: "El userId no es válido" });
    }
    const userExists = await User.findOne({ _id: reviewData.userId });
    if (!userExists) {
      return res.status(400).json({ error: "El usuario no existe" });
    }

    if (!["event", "serviceProvider"].includes(reviewData.reviewedItemType)) {
      return res.status(400).json({ error: "El reviewedItemType no es válido" });
    }

    if (!mongoose.Types.ObjectId.isValid(reviewData.reviewedItemId)) {
      return res.status(400).json({ error: "El reviewedItemId no es válido" });
    }

    if (reviewData.reviewedItemType === "event") {
      const eventExists = await Event.findOne({ _id: reviewData.reviewedItemId });
      if (!eventExists) {
        return res.status(400).json({ error: "El evento no existe" });
      }
    } else if (reviewData.reviewedItemType === "serviceProvider") {
      const serviceProviderExists = await ServiceProvider.findOne({
        _id: reviewData.reviewedItemId,
      });
      if (!serviceProviderExists) {
        return res.status(400).json({ error: "El proveedor de servicios no existe" });
      }
    }

    reviewData.active = true;

    const newReview = await Review.create(reviewData);
    res.status(201).json(newReview);
  } catch (error) {
    console.error("Error al crear una revisión:", error);
    res.status(500).json({ error: "Error al crear una revisión" });
  }
}

module.exports = createReview;
