const Router = require('express')
const router = new Router()
const partnersController = require('../controllers/partnersController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', partnersController.receiving)
router.post('/', authMiddleware(1), partnersController.addition)
router.put('/:id', authMiddleware(1), partnersController.editing)
router.delete('/:id', authMiddleware(1), partnersController.delete)

module.exports = router