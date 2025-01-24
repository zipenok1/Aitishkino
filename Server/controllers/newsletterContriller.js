const {Newsletter} = require('../models/models')
const ApiError = require('../error/ApiError')

class NewsletterController {
    async withdraw(req, res){
        const newsletter = await Newsletter.findAll()
        return res.json(newsletter) 
    }
    async editing(req, res, next){
        try{
            const {id_newsletter} = req.params
            const {email}= req.body
           
            if(!id_newsletter){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Newsletter.findOne({ where: { id_newsletter: id_newsletter } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Newsletter.update(
                {email:email},
                {where:{id_newsletter: id_newsletter}}
            )
            return res.json({ message: 'записть ' + id_newsletter + ' обновлена'})
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async append(req,res){
        try{
            const {email} = req.body
            const newsletter = await Newsletter.create({email})
            return res.json(newsletter)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    async delete(req, res, next){
        try{
            const {id_newsletter} = req.params
            if(!id_newsletter){
               return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Newsletter.findOne({ where: { id_newsletter: id_newsletter } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Newsletter.destroy({where:{id_newsletter:id_newsletter}})
            return res.json({ message: 'записть ' + id_newsletter + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
       
    }
}

module.exports = new NewsletterController()