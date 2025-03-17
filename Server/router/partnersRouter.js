const Router = require('express')
const router = new Router()
const partnersController = require('../controllers/partnersController')

router.get('/', partnersController.receiving)
router.post('/', partnersController.addition)
router.put('/:id', partnersController.editing)
router.delete('/:id', partnersController.delete)

module.exports = router