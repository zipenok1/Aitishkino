const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')
const scheduleController = require('../controllers/scheduleController')

router.get('/', scheduleController.receiving)
router.get('/:id', scheduleController.receivingDay)
router.post('/', authMiddleware(1), scheduleController.addition)
router.put('/:id', authMiddleware(1), scheduleController.editing)
router.delete('/:id', authMiddleware(1), scheduleController.delete)

module.exports = router