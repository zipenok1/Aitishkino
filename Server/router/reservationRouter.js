const Router = require('express')
const router = new Router()
const reservationController = require('../controllers/reservationController')

router.get('/', reservationController.receiving)
router.post('/', reservationController.addition)
router.put('/:id', reservationController.editing)
router.delete('/:id', reservationController.delete)

module.exports = router