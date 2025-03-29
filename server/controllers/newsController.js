const {News} = require('../models/models')
const uuid = require("uuid")
const path = require('path')
const ApiError = require('../error/ApiError')

class NewsController {
    async receiving(req, res){
        const event = await News.findAll()
        return res.json(event) 
    }
    async adderoline(req, res){
        try{
            const {id} = req.params
            if (!id) {
                return next(ApiError.badRequest('такого элемента не существует'))
              }    
              const event = await News.findAll({ where: {id_news: id}})
              return res.json(event)
        }
        catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async addition(req, res, next){
        try{
            const { title, date, description} = req.body

            const {link_img} = req.files
                let fileName = uuid.v4() + ".jpg"
                link_img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const event = await News.create({title, date, description, link_img:fileName})
            return res.json(event)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }
    async editing(req, res, next){
        try{
            const {id} = req.params
            const {title, date, description}= req.body
            const {link_img} = req.files
                let fileName = uuid.v4() + ".jpg"
                link_img.mv(path.resolve(__dirname, '..', 'static', fileName))
            if(!id){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await News.findOne({ where: { id_news: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await News.update(
                {title:title, date:date, description:description, link_img:fileName},
                {where:{id_news: id}}
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
            const event = await News.findOne({ where: { id_news: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await News.destroy({where:{id_news: id}})
            return res.json({ message: 'записть ' + id + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}
module.exports = new NewsController()