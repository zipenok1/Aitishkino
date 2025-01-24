const Router = require('express')
const router = new Router()
const statisticsController = require('../controllers/statisticsController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/receiv', statisticsController.receiv)
router.post('/addition',authMiddleware(1), statisticsController.addition)
router.put('/editing/:id_statistics',authMiddleware(1), statisticsController.editing)
router.delete('/del/:id_statistics',authMiddleware(1), statisticsController.del)
module.exports = router