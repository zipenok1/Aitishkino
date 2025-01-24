const {Statistics} = require('../models/models')
const ApiError = require('../error/ApiError')

class StatisticsController {
    async receiv(req, res){
        const statistics = await Statistics.findAll()
        return res.json(statistics) 
    }

    async addition(req, res, next){
        try{
            const {id_statistics, title, description} = req.body

            const statistics = await Statistics.create({id_statistics, title, description})
            return res.json(statistics)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }
    async editing(req, res, next){
        try{
            const {id_statistics} = req.params
            const {title, description}= req.body
            if(!id_statistics){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Statistics.findOne({ where: { id_statistics: id_statistics } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Statistics.update(
                {title:title, description:description},
                {where:{id_statistics:id_statistics}}
            )
            return res.json({ message: 'записть ' + id_statistics + ' обновлена'})
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async del(req, res, next){
        try{
            const {id_statistics} = req.params
            if(!id_statistics){
               return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Statistics.findOne({ where: { id_statistics: id_statistics } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Statistics.destroy({where:{id_statistics: id_statistics}})
            return res.json({ message: 'записть ' + id_statistics + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new StatisticsController()