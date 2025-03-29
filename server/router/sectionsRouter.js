const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')
const sectionsController = require('../controllers/sectionsController')

router.get('/', sectionsController.receiving)
router.post('/', authMiddleware(1), sectionsController.addition)
router.put('/:id', authMiddleware(1), sectionsController.editing)
router.delete('/:id', authMiddleware(1), sectionsController.delete)

module.exports = router