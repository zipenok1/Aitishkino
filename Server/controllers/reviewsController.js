const {Reviews} = require('../models/models')
const uuid = require("uuid")
const path = require('path')
const ApiError = require('../error/ApiError')

class ReviewsController {
    async receiv(req, res){
        const reviews = await Reviews.findAll()
        return res.json(reviews) 
    }

    async addition(req, res, next){
        try{
            const {id_reviewes, fio, review} = req.body

            const {link_img} = req.files
                let fileName = uuid.v4() + ".jpg"
                link_img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const reviews = await Reviews.create({id_reviewes, fio, link_img: fileName, review})
            return res.json(reviews)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }
    async editing(req, res, next){
        try{
            const {id_reviewes} = req.params
            const {fio, review}= req.body
            const {link_img} = req.files
                let fileName = uuid.v4() + ".jpg"
                link_img.mv(path.resolve(__dirname, '..', 'static', fileName))
            if(!id_reviewes){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Reviews.findOne({ where: { id_reviewes: id_reviewes } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Reviews.update(
                {fio:fio, review:review, link_img:fileName},
                {where:{id_reviewes:id_reviewes}}
            )
            return res.json({ message: 'записть ' + id_reviewes + ' обновлена'})
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async del(req, res, next){
        try{
            const {id_reviewes} = req.params
            if(!id_reviewes){
               return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Reviews.findOne({ where: { id_reviewes: id_reviewes } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Reviews.destroy({where:{id_reviewes:id_reviewes}})
            return res.json({ message: 'записть ' + id_reviewes + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new ReviewsController()