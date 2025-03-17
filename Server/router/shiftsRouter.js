const Router = require('express')
const router = new Router()
const shiftsController = require('../controllers/shiftsController')

router.get('/', shiftsController.receiving)
router.post('/', shiftsController.addition)
router.put('/:id', shiftsController.editing)
router.delete('/:id', shiftsController.delete)

module.exports = router