const Router = require('express')
const router = new Router()
const newsletterController = require('../controllers/newsletterContriller')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/withdraw', newsletterController.withdraw)
router.post('/append',authMiddleware(1), newsletterController.append)
router.put('/editing/:id_newsletter',authMiddleware(1), newsletterController.editing)
router.delete('/deletion/:id_newsletter',authMiddleware(1), newsletterController.delete)

module.exports = router