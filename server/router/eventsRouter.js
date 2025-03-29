const Router = require('express')
const router = new Router()
const eventsControlle = require('../controllers/eventsController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', eventsControlle.receiving)
router.post('/', authMiddleware(1), eventsControlle.addition)
router.put('/:id', authMiddleware(1), eventsControlle.editing)
router.delete('/:id', authMiddleware(1), eventsControlle.delete)


module.exports = router