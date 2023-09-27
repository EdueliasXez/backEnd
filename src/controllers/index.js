const getEvents = require('../controllers/event_controllers/get_events')
const createEvent = require('../controllers/event_controllers/post_event')
const updateEvent = require('../controllers/event_controllers/put_event')
const removeEvent = require('../controllers/event_controllers/remove_event')
const getReviews = require('../controllers/review_controllers/get_reviews')
const createReview = require('../controllers/review_controllers/post_review')
const createUser = require('../controllers/users/create_user')
const getUsersById = require('../controllers/users/get_user_by_id')
const getUsers = require('../controllers/users/get_users')
const loginUser = require('../controllers/users/login_user')
const registerUser = require('../controllers/users/create_user')
module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    removeEvent,
    getReviews,
    createReview,
    createUser,
    getUsersById,
    getUsers,
    loginUser,
    registerUser,
}