const Router = require('express')
const router = new Router()
const teachersController = require('../controllers/teachersController')


router.get('/', teachersController.receiving)
router.post('/', teachersController.addition)
router.put('/:id', teachersController.editing)
router.delete('/:id', teachersController.delete)

module.exports = router