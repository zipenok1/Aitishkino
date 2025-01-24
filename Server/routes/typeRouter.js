const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/receiv', typeController.receiv)
router.post('/addition',authMiddleware(1), typeController.addition)
router.put('/editing/:id_type',authMiddleware(1), typeController.editing)
router.delete('/del/:id_type',authMiddleware(1), typeController.del)
module.exports = router