const Router = require('express')
const router = new Router()
const photoController = require('../controllers/photoController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/receiv', photoController.receiv)
router.post('/addition',authMiddleware(1), photoController.addition)
router.put('/editing/:id_photo',authMiddleware(1), photoController.editing)
router.delete('/del/:id_photo',authMiddleware(1), photoController.del)
module.exports = router