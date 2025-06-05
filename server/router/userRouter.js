const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', userController.login)
router.get('/', authMiddleware(1), userController.check)


module.exports = router