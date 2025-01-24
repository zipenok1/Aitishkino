const {Social} = require('../models/models')
const uuid = require("uuid")
const path = require('path')
const ApiError = require('../error/ApiError')

class SocialController {
    async receiv(req, res){
        const social = await Social.findAll()
        return res.json(social) 
    }

    async addition(req, res, next){
        try{
            const {id_social, link} = req.body

            const {link_img} = req.files
                let fileName = uuid.v4() + ".jpg"
                link_img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const social = await Social.create({id_social, link, link_img: fileName})
            return res.json(social)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }
    async editing(req, res, next){
        try{
            const {id_social} = req.params
            const {link}= req.body
            const {link_img} = req.files
                let fileName = uuid.v4() + ".jpg"
                link_img.mv(path.resolve(__dirname, '..', 'static', fileName))
            if(!id_social){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Social.findOne({ where: { id_social: id_social } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Social.update(
                {link:link, link_img:fileName},
                {where:{id_social:id_social}}
            )
            return res.json({ message: 'записть ' + id_social + ' обновлена'})
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async del(req, res, next){
        try{
            const {id_social} = req.params
            if(!id_social){
               return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Social.findOne({ where: { id_social: id_social } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Social.destroy({where:{id_social: id_social}})
            return res.json({ message: 'записть ' + id_social + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new SocialController()