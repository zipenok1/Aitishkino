const Router = require('express')
const router = new Router()
const newsController = require('../controllers/newsController')

router.get('/', newsController.receiving)
router.post('/', newsController.addition)
router.put('/:id', newsController.editing)
router.delete('/:id', newsController.delete)

module.exports = router