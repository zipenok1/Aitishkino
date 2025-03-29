const Router = require('express')
const router = new Router()
const questionsController = require('../controllers/questionsController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', questionsController.receiving)
router.post('/', authMiddleware(1), questionsController.addition)
router.put('/:id', authMiddleware(1), questionsController.editing)
router.delete('/:id', authMiddleware(1), questionsController.delete)

module.exports = router