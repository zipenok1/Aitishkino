const Router = require('express')
const router = new Router()
const reviewsController = require('../controllers/reviewsController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', reviewsController.receiving)
router.post('/', authMiddleware(1), reviewsController.addition)
router.put('/:id', authMiddleware(1), reviewsController.editing)
router.delete('/:id', authMiddleware(1), reviewsController.delete)

module.exports = router