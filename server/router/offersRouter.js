const Router = require('express')
const router = new Router()
const offersController= require('../controllers/offersController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', authMiddleware(1), offersController.receiving)
router.post('/', offersController.addition)
router.put('/:id', authMiddleware(1), offersController.editing)
router.delete('/:id', authMiddleware(1), offersController.delete)

module.exports = router