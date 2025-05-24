const {Photo} = require('../models/models')
const uuid = require("uuid")
const path = require('path')
const ApiError = require('../error/ApiError')

class PhotoController {
    async receiving(req, res){
        const photo = await Photo.findAll()
        return res.json(photo) 
    }
    async adderoline(req, res){
        try{
            const {id} = req.params
            if (!id) {
                return next(ApiError.badRequest('такого элемента не существует'))
              }    
              const photo = await Photo.findAll({ where: {id_photo: id}})
              return res.json(photo)
        }
        catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async receivingType(req, res){
        const {id} = req.params
        if (!id) {
            return next(ApiError.badRequest('такого элемента не существует'))
          }    
          const photo = await Photo.findAll({ where: {id_type: id}})
          return res.json(photo)
    }
    async addition(req, res, next){
        try{
            const {id_type} = req.body
            const {link_img} = req.files
                let fileName = uuid.v4() + ".jpg"
                link_img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const photo = await Photo.create({link_img: fileName, id_type})
            return res.json(photo)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }
    async editing(req, res, next){
        try{
            const {id} = req.params
            const {id_type} = req.body
            let fileName
            if(req.files !== null){
                const {link_img} = req.files
                fileName = uuid.v4() + ".jpg"
                link_img.mv(path.resolve(__dirname, '..', 'static', fileName))
            }
            if(!id){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const photo = await Photo.findOne({ where: { id_photo: id } });
            if (!photo) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            if(req.files === null){
                await Photo.update(
                    {id_type: id_type},
                    {where:{id_photo: id}}
                )
            }else{
                await Photo.update(
                    {link_img: fileName, id_type: id_type},
                    {where:{id_photo: id}}
                )
            }
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
            const photo = await Photo.findOne({ where: { id_photo: id } });
            if (!photo) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Photo.destroy({where:{id_photo: id}})
            return res.json({ message: 'записть ' + id + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
       
    }
}

module.exports = new PhotoController()