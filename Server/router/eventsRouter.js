const Router = require('express')
const router = new Router()
const eventsControlle = require('../controllers/eventsController')

router.get('/', eventsControlle.receiving)
router.post('/', eventsControlle.addition)
router.put('/:id', eventsControlle.editing)
router.delete('/:id', eventsControlle.delete)


module.exports = router