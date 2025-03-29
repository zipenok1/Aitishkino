const {DaySchedule} = require('../models/models')
const ApiError = require('../error/ApiError')

class DayScheduleController {
    async receiving( req, res ) {
        const event = await DaySchedule.findAll()
        return res.json(event) 
    }
    async addition( req, res, next ){
        try {
            const {name} = req.body
            const event = await DaySchedule.create({ name })
            return res.json(event)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }
    async editing(req, res, next){
        try {
            const {id} = req.params
            const {name}= req.body
            if(!id){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await DaySchedule.findOne({ where: { id_daySchedule: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await DaySchedule.update(
                {name: name},
                {where:{id_daySchedule: id}}
            )
            return res.json({ message: 'записть ' + id + ' обновлена'})
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async delete(req, res, next){
        try {
            const {id} = req.params
            if(!id){
               return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await DaySchedule.findOne({where: {id_daySchedule: id}});
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await DaySchedule.destroy({where: {id_daySchedule: id}})
            return res.json({ message: 'записть ' + id + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new DayScheduleController()