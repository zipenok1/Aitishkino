const Router = require('express')
const router = new Router()
const reservationController = require('../controllers/reservationController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', authMiddleware(1), reservationController.receiving)
router.post('/', reservationController.addition)
router.put('/:id', authMiddleware(1), reservationController.editing)
router.delete('/:id', authMiddleware(1), reservationController.delete)

module.exports = router