const Router = require('express')
const router = new Router()
const shiftsController = require('../controllers/shiftsController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/:id', shiftsController.adderoline)
router.get('/', shiftsController.receiving)
router.post('/', authMiddleware(1), shiftsController.addition)
router.put('/:id', authMiddleware(1), shiftsController.editing)
router.delete('/:id', authMiddleware(1), shiftsController.delete)

module.exports = router