const Router = require('express')
const router = new Router()
const reviewsController = require('../controllers/reviewsController')

router.get('/', reviewsController.receiving)
router.post('/', reviewsController.addition)
router.put('/:id', reviewsController.editing)
router.delete('/:id', reviewsController.delete)

module.exports = router