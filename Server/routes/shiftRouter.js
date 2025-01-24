const Router = require('express')
const router = new Router()
const shiftController = require('../controllers/shiftController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/receiv', shiftController.receiv)
router.post('/addition',authMiddleware(1), shiftController.addition)
router.put('/editing/:id_shift',authMiddleware(1), shiftController.editing)
router.delete('/del/:id_shift',authMiddleware(1), shiftController.del)
module.exports = router