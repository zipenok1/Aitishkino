const Router = require('express')
const router = new Router()
const programController = require('../controllers/programController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', programController.receiving)
router.post('/', authMiddleware(1), programController.addition)
router.put('/:id', authMiddleware(1), programController.editing)
router.delete('/:id', authMiddleware(1), programController.delete)

module.exports = router