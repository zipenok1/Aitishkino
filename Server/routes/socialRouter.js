const Router = require('express')
const router = new Router()
const socialController = require('../controllers/socialController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/receiv', socialController.receiv)
router.post('/addition',authMiddleware(1), socialController.addition)
router.put('/editing/:id_social',authMiddleware(1), socialController.editing)
router.delete('/del/:id_social',authMiddleware(1), socialController.del)
module.exports = router