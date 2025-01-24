const Router = require('express')
const router = new Router()
const teachersController = require('../controllers/teachersController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/receiv', teachersController.receiv)
router.post('/addition',authMiddleware(1), teachersController.addition)
router.put('/editing/:id_teachers',authMiddleware(1), teachersController.editing)
router.delete('/del/:id_teachers',authMiddleware(1), teachersController.del)
module.exports = router