const ApiError = require('../error/ApiError')

//err = ошибка req = запрос res = ответ next = функция передачи след в цепочке middl

module.exports = function (err, req, res, next){
    if(err instanceof ApiError){
       return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message: "непредвиденная ошибка"})
}