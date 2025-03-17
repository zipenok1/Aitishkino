const Router = require('express')
const router = new Router()
const newsletterController = require('../controllers/newsletterController')

router.get('/', newsletterController.receiv)
router.post('/', newsletterController.addition)
router.put('/:id', newsletterController.editing)
router.delete('/:id', newsletterController.delete)

module.exports = router
