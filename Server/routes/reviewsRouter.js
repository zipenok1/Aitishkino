const Router = require('express')
const router = new Router()
const reviewsController = require('../controllers/reviewsController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/receiv', reviewsController.receiv)
router.post('/addition',authMiddleware(1), reviewsController.addition)
router.put('/editing/:id_reviewes',authMiddleware(1), reviewsController.editing)
router.delete('/del/:id_reviewes',authMiddleware(1), reviewsController.del)
module.exports = router