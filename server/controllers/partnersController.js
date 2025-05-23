const {Partners} = require("../models/models")
const uuid = require("uuid")
const path = require('path')
const ApiError = require('../error/ApiError')

class PartnersController {

    async receiving(req, res){
        const partners = await Partners.findAll()
        return res.json(partners) 
    }

    async editing(req, res, next){
        try{
            const {id} = req.params
            const {name, link_partners}= req.body
            let fileName
            if(req.files !== null){
                const {link_img} = req.files
                fileName = uuid.v4() + ".jpg"
                link_img.mv(path.resolve(__dirname, '..', 'static', fileName))
            }
            if(!id){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Partners.findOne({ where: { id_partners: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            if(req.files === null){
                await Partners.update(
                    {name:name, link_partners:link_partners},
                    {where:{id_partners: id}}
                )
            }else{
                await Partners.update(
                    {name:name, link_partners:link_partners, link_img:fileName},
                    {where:{id_partners: id}}
                )
            }
            return res.json({ message: 'записть ' + id + ' обновлена'})
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async addition(req,res){
        try{
            const {name, link_partners}= req.body
            const {link_img} = req.files
                let fileName = uuid.v4() + ".jpg"
                link_img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const partners = await Partners.create({link_img:fileName, name, link_partners})
            return res.json(partners)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    async delete(req, res, next){
        try{
            const {id} = req.params
            if(!id){
               return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Partners.findOne({ where: { id_partners: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Partners.destroy({where:{id_partners:id}})
            return res.json({ message: 'записть ' + id + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
       
    }
}



module.exports = new PartnersController()