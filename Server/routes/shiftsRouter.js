const Router = require('express')
const router = new Router()
const shiftsController = require('../controllers/shiftsController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/receiv', shiftsController.receiv)
router.post('/addition',authMiddleware(1), shiftsController.addition)
router.put('/editing/:id_shifts',authMiddleware(1), shiftsController.editing)
router.delete('/del/:id_shifts',authMiddleware(1), shiftsController.del)
module.exports = router