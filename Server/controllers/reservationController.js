const {Reservation} = require('../models/models')
const ApiError = require('../error/ApiError')

class ReservationController {
    async receiv(req, res){
        const reservation = await Reservation.findAll()
        return res.json(reservation) 
    }

    async addition(req, res, next){
        try{
            const {id_reservation, fio, email, phone, quantity} = req.body
 
            const reservation = await Reservation.create({id_reservation, fio, email, phone, quantity})
            return res.json(reservation)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }

    async editing(req, res, next){
        try{
            const {id_reservation} = req.params
            const {fio, email, phone, quantity}= req.body
            if(!id_reservation){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Reservation.findOne({ where: { id_reservation: id_reservation } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Reservation.update(
                {fio:fio, email:email, phone:phone, quantity:quantity},
                {where:{id_reservation:id_reservation}}
            )
            return res.json({ message: 'записть ' + id_reservation + ' обновлена'})
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async del(req, res, next){
        try{
            const {id_reservation} = req.params
            if(!id_reservation){
               return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Reservation.findOne({ where: { id_reservation: id_reservation } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Reservation.destroy({where:{id_reservation:id_reservation}})
            return res.json({ message: 'записть ' + id_reservation + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new ReservationController()