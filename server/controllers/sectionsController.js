const {Sections} = require('../models/models')
const uuid = require("uuid")
const path = require('path')
const ApiError = require('../error/ApiError')

class SectionsController {
    async receiving(req, res){
        const event = await Sections.findAll()
        return res.json(event) 
    }
    async adderoline(req, res){
        try{
            const {id} = req.params
            if (!id) {
                return next(ApiError.badRequest('такого элемента не существует'))
              }    
              const event = await Sections.findAll({ where: {id_sections: id}})
              return res.json(event)
        }
        catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async addition(req, res, next){
        try{
            const {name, title1, title2, description1, description2, description3, description4,  description5} = req.body
            let fileName
            if(req.files === null){
                fileName = ""
            } else{
                const {icon} = req.files
                fileName = uuid.v4() + ".svg"
                icon.mv(path.resolve(__dirname, '..', 'static', fileName))
            }
            const event = await Sections.create({ name, title1, title2, description1, description2, description3, description4,  description5, icon: fileName })
            return res.json(event)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }
    async editing(req, res, next){
        try{
            const {id} = req.params
            const {name, title1, title2, description1, description2, description3, description4,  description5}= req.body
            let fileName
            if(req.files !== null){
                const {icon} = req.files
                fileName = uuid.v4() + ".svg"
                icon.mv(path.resolve(__dirname, '..', 'static', fileName))
            }
            if(!id){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Sections.findOne({ where: { id_sections: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            if(req.files === null){
                await Sections.update(
                    {name: name, title1: title1, title2:title2, description1: description1, description2: description2, description3: description3, description4: description4, description5: description5},
                    {where:{id_sections: id}}
                )
            }else{
                await Sections.update(
                    {name: name, title1: title1, title2:title2, description1: description1, description2: description2, description3: description3, description4: description4, description5: description5, icon: fileName},
                    {where:{id_sections: id}}
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
            const event = await Sections.findOne({ where: { id_sections: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Sections.destroy({where:{id_sections: id}})
            return res.json({ message: 'записть ' + id + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new SectionsController()