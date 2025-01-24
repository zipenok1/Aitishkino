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
            const {title, description} = req.body
            const {link_img} = req.files
                let fileName = uuid.v4() + ".jpg"
                link_img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const events = await Events.create({title, description, link_img: fileName})
            return res.json(events)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }

    async editing(req, res, next){
        try{
            const {id_events} = req.params
            const {title, description}= req.body
            const {link_img} = req.files
                let fileName = uuid.v4() + ".jpg"
                    link_img.mv(path.resolve(__dirname, '..', 'static', fileName))
            if(!id_events){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Events.findOne({ where: { id_events: id_events } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Events.update(
                {title: title, description: description, link_img: fileName},
                {where:{id_events:id_events}}
            )
            return res.json({ message: 'записть ' + id_events + ' обновлена'})
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next){
        try{
            const {id_events} = req.params
            if(!id_events){
               return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Events.findOne({ where: { id_events: id_events } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Events.destroy({where:{id_events:id_events}})
            return res.json({ message: 'записть ' + id_events + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
       
    }
}

module.exports = new EventsController()