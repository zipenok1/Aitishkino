const Router = require('express')
const router = new Router()
const eventsControlle = require('../controllers/eventsController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/receiving', eventsControlle.receiving)
router.post('/addition',authMiddleware(1), eventsControlle.addition)
router.delete('/deletion/:id_events',authMiddleware(1), eventsControlle.delete)
router.put('/editing/:id_events',authMiddleware(1), eventsControlle.editing)

module.exports = router