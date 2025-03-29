const {Shifts} = require('../models/models')
const uuid = require("uuid")
const path = require('path')
const ApiError = require('../error/ApiError')

class ShiftsController {
    async receiving(req, res){
        const shifts = await Shifts.findAll()
        return res.json(shifts) 
    }

    async adderoline(req, res){
        try{
            const {id} = req.params
            if (!id) {
                return next(ApiError.badRequest('такого элемента не существует'))
              }    
              const shifts = await Shifts.findAll({ where: {id_shifts: id}})
              return res.json(shifts)
        }
        catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async addition(req, res, next){
        try{
            const {title, date, description, price, partprice} = req.body
            const {link_img} = req.files
                let fileName = uuid.v4() + ".jpg"
                link_img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const shifts = await Shifts.create({ title, date, description,  price, partprice, link_img: fileName })
            return res.json(shifts)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }
    async editing(req, res, next){
        try{
            const {id} = req.params
            const {title, date, description, price, partprice}= req.body
            const {link_img} = req.files
                let fileName = uuid.v4() + ".jpg"
                link_img.mv(path.resolve(__dirname, '..', 'static', fileName))
            if(!id){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Shifts.findOne({ where: { id_shifts: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Shifts.update(
                {title: title, date: date, description: description, price: price,  partprice: partprice, link_img:fileName},
                {where:{id_shifts: id}}
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
            const event = await Shifts.findOne({ where: { id_shifts: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Shifts.destroy({where:{id_shifts: id}})
            return res.json({ message: 'записть ' + id + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new ShiftsController()