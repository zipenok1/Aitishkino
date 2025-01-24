const {Shift} = require('../models/models')
const ApiError = require('../error/ApiError')

class ShiftController {
    async receiv(req, res){
        const shift = await Shifts.findAll()
        return res.json(shift) 
    }

    async addition(req, res, next){
        try{
            const {id_shift, title, naber_shift} = req.body

            const shift = await Shift.create({title, naber_shift, id_shift})
            return res.json(shift)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }
    async editing(req, res, next){
        try{
            const {id_shift} = req.params
            const {title, naber_shift}= req.body
            if(!id_reservation){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Shift.findOne({ where: { id_shift: id_shift } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Shift.update(
                {title:title, naber_shift:naber_shift},
                {where:{id_shift:id_shift}}
            )
            return res.json({ message: 'записть ' + id_shift + ' обновлена'})
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async del(req, res, next){
        try{
            const {id_shift} = req.params
            if(!id_shift){
               return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Shift.findOne({ where: { id_shift: id_shift } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Shift.destroy({where:{id_shift: id_shift}})
            return res.json({ message: 'записть ' + id_shift + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new ShiftController()