const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')

router.get('/', typeController.receiving)
router.post('/', typeController.addition)
router.put('/:id', typeController.editing)
router.delete('/:id', typeController.delete)

module.exports = router