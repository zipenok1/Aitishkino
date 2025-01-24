const Router = require('express')
const router = new Router()
const partnersController = require('../controllers/partnersController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/obtain', partnersController.obtain)
router.post('/adder',authMiddleware(1), partnersController.adder)
router.put('/editing/:id_partners',authMiddleware(1), partnersController.editing)
router.delete('/deletion/:id_partners',authMiddleware(1), partnersController.delete)

module.exports = router