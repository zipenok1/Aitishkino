const {Shifts} = require('../models/models')
const uuid = require("uuid")
const path = require('path')
const ApiError = require('../error/ApiError')

class ShiftsController {
    async receiv(req, res){
        const shifts = await Shifts.findAll()
        return res.json(shifts) 
    }

    async addition(req, res, next){
        try{
            const {id_shifts, title, id_shift} = req.body

            const {link_img} = req.files
                let fileName = uuid.v4() + ".jpg"
                link_img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const shifts = await Shifts.create({id_shifts, title, id_shift, link_img:fileName})
            return res.json(shifts)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }
    async editing(req, res, next){
        try{
            const {id_shifts} = req.params
            const {title, id_shift}= req.body
            const {link_img} = req.files
                let fileName = uuid.v4() + ".jpg"
                link_img.mv(path.resolve(__dirname, '..', 'static', fileName))
            if(!id_reservation){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Shifts.findOne({ where: { id_shifts: id_shifts } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Shifts.update(
                {title:title, id_shift:id_shift, link_img:fileName},
                {where:{id_shifts:id_shifts}}
            )
            return res.json({ message: 'записть ' + id_shifts + ' обновлена'})
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async del(req, res, next){
        try{
            const {id_shifts} = req.params
            if(!id_shifts){
               return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Shifts.findOne({ where: { id_shifts: id_shifts } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Shifts.destroy({where:{id_shifts: id_shifts}})
            return res.json({ message: 'записть ' + id_shifts + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new ShiftsController()