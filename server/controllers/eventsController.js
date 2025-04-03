const {Events} = require('../models/models')
const uuid = require("uuid")
const path = require('path')
const ApiError = require('../error/ApiError')

class EventsController {
    
    async receiving(req, res){
        const events = await Events.findAll()
        return res.json(events) 
    }

    async addition(req, res, next){
        try{
            const {icon} = req.files
            let fileName = uuid.v4() + ".jpg"
            icon.mv(path.resolve(__dirname, '..', 'static', fileName))
            const events = await Events.create({icon: fileName})
            return res.json(events)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }

    async editing(req, res, next){
        try{
            const {id} = req.params
            const {icon} = req.files
            let fileName = uuid.v4() + ".jpg"
            icon.mv(path.resolve(__dirname, '..', 'static', fileName))
            if(!id){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Events.findOne({ where: { id_events: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Events.update(
                {icon: fileName},
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