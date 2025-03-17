const {Reviews} = require('../models/models')
const ApiError = require('../error/ApiError')

class ReviewsController {
    async receiving(req, res){
        const reviews = await Reviews.findAll()
        return res.json(reviews) 
    }

    async addition(req, res, next){
        try{
            const {fio, review} = req.body
            const reviews = await Reviews.create({fio, review})
            return res.json(reviews)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }
    async editing(req, res, next){
        try{
            const {id} = req.params
            const {fio, review}= req.body
        
            if(!id){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Reviews.findOne({ where: { id_reviewes: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Reviews.update(
                {fio: fio, review: review},
                {where:{id_reviewes: id}}
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
            const event = await Reviews.findOne({ where: { id_reviewes: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Reviews.destroy({where:{id_reviewes: id}})
            return res.json({ message: 'записть ' + id + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new ReviewsController()