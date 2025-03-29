const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', typeController.receiving)
router.post('/', authMiddleware(1), typeController.addition)
router.put('/:id', authMiddleware(1), typeController.editing)
router.delete('/:id', authMiddleware(1), typeController.delete)

module.exports = router