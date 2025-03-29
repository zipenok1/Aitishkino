const Router = require('express')
const router = new Router()
const newsController = require('../controllers/newsController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/:id', newsController.adderoline)
router.get('/', newsController.receiving)
router.post('/', authMiddleware(1), newsController.addition)
router.put('/:id', authMiddleware(1), newsController.editing)
router.delete('/:id', authMiddleware(1), newsController.delete)

module.exports = router