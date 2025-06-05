const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')
const dayScheduleController = require('../controllers/dayScheduleController') 

router.get('/', dayScheduleController.receiving)
router.post('/', authMiddleware(1), dayScheduleController.addition)
router.put('/:id', authMiddleware(1), dayScheduleController.editing)
router.delete('/:id', authMiddleware(1), dayScheduleController.delete)

module.exports = router