const {Program} = require('../models/models')
const ApiError = require('../error/ApiError')

class ProgramController {
    async receiving(req, res){
        const event = await Program.findAll()
        return res.json(event) 
    }
    async addition(req, res, next){
        try{
            const {title, description} = req.body
            const event = await Program.create({ title,  description })
            return res.json(event)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }
    async editing(req, res, next){
        try{
            const {id} = req.params
            const {title,  description}= req.body
            if(!id){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Program.findOne({ where: { id_program: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Program.update(
                {title: title, description: description},
                {where:{id_program: id}}
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
            const event = await Program.findOne({ where: { id_program: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Program.destroy({where:{id_program: id}})
            return res.json({ message: 'записть ' + id + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new ProgramController()