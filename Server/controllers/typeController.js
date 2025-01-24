const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async receiv(req, res){
        const type = await Type.findAll()
        return res.json(type) 
    }

    async addition(req, res, next){
        try{
            const {id_type, name} = req.body

            const type = await Type.create({id_type, name})
            return res.json(type)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }
    async editing(req, res, next){
        try{
            const {id_type} = req.params
            const {name}= req.body
            if(!id_type){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Type.findOne({ where: { id_type: id_type } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Type.update(
                {name:name},
                {where:{id_type:id_type}}
            )
            return res.json({ message: 'записть ' + id_type + ' обновлена'})
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async del(req, res, next){
        try{
            const {id_type} = req.params
            if(!id_type){
               return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Type.findOne({ where: { id_type: id_type } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Type.destroy({where:{id_type: id_type}})
            return res.json({ message: 'записть ' + id_type + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new TypeController()