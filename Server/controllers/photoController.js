const {Photo} = require('../models/models')
const uuid = require("uuid")
const path = require('path')
const ApiError = require('../error/ApiError')

class PhotoController {
    async receiv(req, res){
        const photo = await Photo.findAll()
        return res.json(photo) 
    }

    async addition(req, res, next){
        try{
            const {id_photo, id_type} = req.body
            const {link_photo} = req.files
                let fileName = uuid.v4() + ".jpg"
                link_photo.mv(path.resolve(__dirname, '..', 'static', fileName))
            const photo = await Photo.create({id_photo, link_photo: fileName, id_type})
            return res.json(photo)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }
    async editing(req, res, next){
        try{
            const {id_photo} = req.params
            const {id_type} = req.body
            const {link_photo} = req.files
                let fileName = uuid.v4() + ".jpg"
                link_photo.mv(path.resolve(__dirname, '..', 'static', fileName))
            if(!id_photo){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Photo.findOne({ where: { id_photo: id_photo } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Photo.update(
                {link_photo: fileName, id_type:id_type},
                {where:{id_photo:id_photo}}
            )
            return res.json({ message: 'записть ' + id_photo + ' обновлена'})
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async del(req, res, next){
        try{
            const {id_photo} = req.params
            if(!id_photo){
               return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Photo.findOne({ where: { id_photo: id_photo } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Photo.destroy({where:{id_photo:id_photo}})
            return res.json({ message: 'записть ' + id_photo + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
       
    }
}

module.exports = new PhotoController()