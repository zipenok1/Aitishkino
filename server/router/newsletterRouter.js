const Router = require('express')
const router = new Router()
const newsletterController = require('../controllers/newsletterController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', authMiddleware(1), newsletterController.receiv)
router.post('/', newsletterController.addition)
router.put('/:id', authMiddleware(1), newsletterController.editing)
router.delete('/:id', authMiddleware(1), newsletterController.delete)

module.exports = router
