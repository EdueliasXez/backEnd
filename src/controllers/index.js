const getEvents = require('../controllers/event_controllers/get_events')
const getEventById = require('../controllers/event_controllers/get_event_by_id')
const createEvent = require('../controllers/event_controllers/post_event')
const updateEvent = require('../controllers/event_controllers/put_event')
const removeEvent = require('../controllers/event_controllers/remove_event')
const getCategories = require('../controllers/categories_controllers/get_categories')
const getReviews = require('../controllers/review_controllers/get_reviews')
const getReviewsByItemId = require('../controllers/review_controllers/get_review_by_id')
const createReview = require('../controllers/review_controllers/post_review')
// const updateReview = require('../controllers/review_controllers/put_review')
// const deleteReview = require('../controllers/review_controllers/delete_review')
const createUser = require('../controllers/users/create_user')
const getUsersById = require('../controllers/users/get_user_by_id')
const getUsers = require('../controllers/users/get_users')
const loginUser = require('../controllers/users/login_user')
const registerUser = require('../controllers/users/create_user')
const createPayment = require('../controllers/checkout_controller/checkout')
const toggleActive = require('../controllers/softDelete/toggle_active')
const getEventsByRating  = require('../controllers/review_controllers/get_events_by_rating')
// getReviewsByItemId

module.exports = {
    getEvents,
    getEventById,
    createEvent,
    updateEvent,
    removeEvent,
    getCategories,
    getReviews,
    createReview,
    getReviewsByItemId,
    createUser,
    getUsersById,
    getUsers,
    loginUser,
    registerUser,
    createPayment,
    toggleActive ,
    getEventsByRating 
}