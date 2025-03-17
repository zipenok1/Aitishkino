const {Reservation} = require('../models/models')
const ApiError = require('../error/ApiError')

class ReservationController {
    async receiving(req, res){
        const reservation = await Reservation.findAll()
        return res.json(reservation) 
    }

    async addition(req, res, next){
        try{
            const {fio, email, phone, quantity, id_shifts} = req.body
            const reservation = await Reservation.create({fio, email, phone, quantity, id_shifts})
            return res.json(reservation)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }

    async editing(req, res, next){
        try{
            const {id} = req.params
            const {fio, email, phone, quantity, id_shifts}= req.body
            if(!id){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Reservation.findOne({ where: { id_reservation: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Reservation.update(
                {fio:fio, email:email, phone:phone, quantity:quantity, id_shifts: id_shifts},
                {where:{id_reservation:id}}
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
            const event = await Reservation.findOne({ where: { id_reservation: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Reservation.destroy({where:{id_reservation:id}})
            return res.json({ message: 'записть ' + id + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new ReservationController()