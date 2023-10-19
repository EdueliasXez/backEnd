const { Review, Event } = require("../../db");

async function getEventsByRating(req, res) {
  try {
    const reviews = await Review.find();

    const eventRatings = {};

    reviews.forEach(async (review) => {
      const eventId = review.reviewedItemId;
      const rating = review.rating;

      if (!eventRatings[eventId]) {
        eventRatings[eventId] = { totalRating: 0, reviewCount: 0 };
      }

      eventRatings[eventId].totalRating += rating;
      eventRatings[eventId].reviewCount += 1;
    });

    const events = [];
    for (const eventId in eventRatings) {
      const eventRatingData = eventRatings[eventId];
      const averageRating = eventRatingData.totalRating / eventRatingData.reviewCount;
      // Obtiene el título del evento
      const event = await Event.findById(eventId);
      if (event) {
        events.push({ eventId, averageRating, title: event.title });
      }
    }

    events.sort((a, b) => b.averageRating - a.averageRating);

    res.status(200).json(events);
  } catch (error) {
    console.error("Error al obtener eventos por calificación:", error);
    res.status(500).json({ error: "Error al obtener eventos por calificación" });
  }
}

module.exports = getEventsByRating;
