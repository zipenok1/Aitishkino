const Router = require('express')
const router = new Router()
const programController = require('../controllers/programController')

router.get('/', programController.receiving)
router.post('/', programController.addition)
router.put('/:id', programController.editing)
router.delete('/:id', programController.delete)

module.exports = router