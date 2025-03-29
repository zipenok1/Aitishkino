const {Offers} = require('../models/models')
const ApiError = require('../error/ApiError')

class OffersController {
    async receiving(req, res){
        const event = await Offers.findAll()
        return res.json(event) 
    }
    async addition(req, res, next){
        try{
            const {name, description} = req.body
            const event = await Offers.create({ name,  description })
            return res.json(event)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }
    async editing(req, res, next){
        try{
            const {id} = req.params
            const {name,  description}= req.body
            if(!id){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Offers.findOne({ where: { id_offers: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Offers.update(
                {name: name, description: description},
                {where:{id_offers: id}}
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
            const event = await Offers.findOne({ where: { id_offers: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Program.destroy({where:{id_offers: id}})
            return res.json({ message: 'записть ' + id + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new OffersController()