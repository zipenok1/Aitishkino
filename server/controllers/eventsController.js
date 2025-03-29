const {Events} = require('../models/models')
const ApiError = require('../error/ApiError')

class EventsController {
    
    async receiving(req, res){
        const events = await Events.findAll()
        return res.json(events) 
    }

    async addition(req, res, next){
        try{
            const {title, description, date} = req.body
            const events = await Events.create({title, description, date})
            return res.json(events)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }

    async editing(req, res, next){
        try{
            const {id} = req.params
            const {title, description, date}= req.body
            if(!id){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Events.findOne({ where: { id_events: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Events.update(
                {title: title, description: description, date: date},
                {where:{id_events:id}}
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
            const event = await Events.findOne({ where: { id_events: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Events.destroy({where:{id_events:id}})
            return res.json({ message: 'записть ' + id + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new EventsController()