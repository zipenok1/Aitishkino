const Router = require('express')
const router = new Router()
const photoController = require('../controllers/photoController')

router.get('/:id', photoController.receivingType)
router.get('/', photoController.receiving)
router.post('/', photoController.addition)
router.put('/:id', photoController.editing)
router.delete('/:id', photoController.delete)

module.exports = router