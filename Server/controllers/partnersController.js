const {Partners} = require("../models/models")
const uuid = require("uuid")
const path = require('path')
const ApiError = require('../error/ApiError')

class PartnersController {

    async obtain(req, res){
        const partners = await Partners.findAll()
        return res.json(partners) 
    }

    async editing(req, res, next){
        try{
            const {id_partners} = req.params
            const {link_img} = req.files
                let fileName = uuid.v4() + ".jpg"
                    link_img.mv(path.resolve(__dirname, '..', 'static', fileName))
            if(!id_partners){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Partners.findOne({ where: { id_partners: id_partners } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Partners.update(
                {link_img: fileName},
                {where:{id_partners:id_partners}}
            )
            return res.json({ message: 'записть ' + id_partners + ' обновлена'})
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async adder(req,res){
        try{
            const {link_img} = req.files
                let fileName = uuid.v4() + ".jpg"
                link_img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const partners = await Partners.create({link_img:fileName})
            return res.json(partners)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    async delete(req, res, next){
        try{
            const {id_partners} = req.params
            if(!id_partners){
               return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Partners.findOne({ where: { id_partners: id_partners } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Partners.destroy({where:{id_partners:id_partners}})
            return res.json({ message: 'записть ' + id_partners + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
       
    }
}



module.exports = new PartnersController()