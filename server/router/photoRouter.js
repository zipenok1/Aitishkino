const Router = require('express')
const router = new Router()
const photoController = require('../controllers/photoController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/oline/:id', photoController.adderoline)
router.get('/:id', photoController.receivingType)
router.get('/', photoController.receiving)
router.post('/', authMiddleware(1), photoController.addition)
router.put('/:id', authMiddleware(1), photoController.editing)
router.delete('/:id', authMiddleware(1), photoController.delete)

module.exports = router