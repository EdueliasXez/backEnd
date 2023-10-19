const { Review, Event, ServiceProvider } = require("../../db");

async function getReviewsByItemId(req, res) {
  try {
    const reviewedItemId = req.params.reviewedItemId; 
    const reviewedItemType = req.query.reviewedItemType; 
    console.log('reviewedItemId', reviewedItemId, 'reviewedItemType', reviewedItemType)
    if (!["event", "serviceProvider"].includes(reviewedItemType)) {
      return res.status(400).json({ error: "El tipo revisado no es válido" });
    }

    if (reviewedItemType === "event") {
      const eventExists = await Event.findOne({ _id: reviewedItemId });
      if (!eventExists) {
        return res.status(404).json({ error: "El evento no existe" });
      }
    } else if (reviewedItemType === "serviceProvider") {
      const serviceProviderExists = await ServiceProvider.findOne({ _id: reviewedItemId });
      if (!serviceProviderExists) {
        return res.status(404).json({ error: "El proveedor de servicios no existe" });
      }
    }

    const reviews = await Review.find({ reviewedItemId, reviewedItemType });

    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error al obtener las reseñas:", error);
    res.status(500).json({ error: "Error al obtener las reseñas" });
  }
}

module.exports = getReviewsByItemId;
