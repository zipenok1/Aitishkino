const {Teachers} = require('../models/models')
const uuid = require("uuid")
const path = require('path')
const ApiError = require('../error/ApiError')

class TeachersController {
    async receiv(req, res){
        const teachers = await Teachers.findAll()
        return res.json(teachers) 
    }

    async addition(req, res, next){
        try{
            const {id_teachers, fio, description} = req.body

            const {link_img} = req.files
                let fileName = uuid.v4() + ".jpg"
                link_img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const teachers = await Teachers.create({id_teachers, fio, description, link_img: fileName})
            return res.json(teachers)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }
    async editing(req, res, next){
        try{
            const {id_teachers} = req.params
            const {fio, description}= req.body
            const {link_img} = req.files
                let fileName = uuid.v4() + ".jpg"
                link_img.mv(path.resolve(__dirname, '..', 'static', fileName))
            if(!id_teachers){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Teachers.findOne({ where: { id_teachers: id_teachers } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Teachers.update(
                {fio:fio, description:description, link_img:fileName},
                {where:{id_teachers:id_teachers}}
            )
            return res.json({ message: 'записть ' + id_teachers + ' обновлена'})
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async del(req, res, next){
        try{
            const {id_teachers} = req.params
            if(!id_teachers){
               return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Teachers.findOne({ where: { id_teachers: id_teachers } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Teachers.destroy({where:{id_teachers: id_teachers}})
            return res.json({ message: 'записть ' + id_teachers + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new TeachersController()