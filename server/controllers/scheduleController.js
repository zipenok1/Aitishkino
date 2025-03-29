const {Schedule} = require('../models/models')
const ApiError = require('../error/ApiError')

class ProgramController {
    async receiving(req, res){
        const event = await Schedule.findAll()
        return res.json(event) 
    }
    async addition(req, res, next){
        try{
            const {name, schedule, time, id_daySchedule} = req.body
            const event = await Schedule.create({ name, schedule, time, id_daySchedule })
            return res.json(event)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }
    async editing(req, res, next){
        try{
            const {id} = req.params
            const {name, schedule, time, id_daySchedule}= req.body
            if(!id){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Schedule.findOne({ where: { id_schedule: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Schedule.update(
                {name: name, schedule: schedule, time: time, id_daySchedule: id_daySchedule},
                {where:{id_schedule: id}}
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
            const event = await Schedule.findOne({ where: { id_schedule: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Schedule.destroy({where:{id_schedule: id}})
            return res.json({ message: 'записть ' + id + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new ProgramController()