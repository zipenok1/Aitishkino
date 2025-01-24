const Router = require('express')
const router = new Router()
const reservationController = require('../controllers/reservationController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/receiv', reservationController.receiv)
router.post('/addition',authMiddleware(1), reservationController.addition)
router.put('/editing/:id_reservation',authMiddleware(1), reservationController.editing)
router.delete('/del/:id_reservation',authMiddleware(1), reservationController.del)
module.exports = router