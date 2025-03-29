const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async receiving(req, res){
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
            const {id} = req.params
            const {name}= req.body
            if(!id){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Type.findOne({ where: { id_type: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Type.update(
                {name: name},
                {where:{id_type: id}}
            )
            return res.json({ message: 'записть ' + id + ' обновлена'})
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async delete(req, res, next){
        try{
            const {id} = req.params
            if(!id){
               return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Type.findOne({ where: { id_type: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Type.destroy({where:{id_type: id}})
            return res.json({ message: 'записть ' + id + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new TypeController()