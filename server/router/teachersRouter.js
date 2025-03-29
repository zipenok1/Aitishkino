const Router = require('express')
const router = new Router()
const teachersController = require('../controllers/teachersController')
const authMiddleware = require('../middleware/authMiddleware')


router.get('/', teachersController.receiving)
router.post('/', authMiddleware(1), teachersController.addition)
router.put('/:id', authMiddleware(1), teachersController.editing)
router.delete('/:id', authMiddleware(1), teachersController.delete)

module.exports = router