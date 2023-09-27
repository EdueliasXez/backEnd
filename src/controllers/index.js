const getEvents = require('../controllers/event_controllers/get_events')
const createEvent = require('../controllers/event_controllers/post_event')
const updateEvent = require('../controllers/event_controllers/put_event')
const removeEvent = require('../controllers/event_controllers/remove_event')
const getReviews = require('../controllers/review_controllers/get_reviews')
const createReview = require('../controllers/review_controllers/post_review')

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    removeEvent,
    getReviews,
    createReview
}