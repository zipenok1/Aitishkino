const {Questions} = require('../models/models')
const ApiError = require('../error/ApiError')

class QuestionsController {
    async receiving(req, res){
        const event = await Questions.findAll()
        return res.json(event) 
    }
    async addition(req, res, next){
        try{
            const {title, description} = req.body
            const event = await Questions.create({ title,  description })
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
            const event = await Questions.findOne({ where: { id_questions: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Questions.update(
                {title: title, description: description},
                {where:{id_questions: id}}
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
            const event = await Questions.findOne({ where: { id_questions: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Questions.destroy({where:{ id_questions: id }})
            return res.json({ message: 'записть ' + id + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new QuestionsController()