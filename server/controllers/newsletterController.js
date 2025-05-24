const {Newsletter} = require('../models/models')
const ApiError = require('../error/ApiError')
const nodemailer = require('nodemailer')

class NewsletterController {
    async receiv(req, res){
        const newsletter = await Newsletter.findAll()
        return res.json(newsletter) 
    }
    async editing(req, res, next){
        try{
            const {id} = req.params
            const {email}= req.body
           
            if(!id){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Newsletter.findOne({ where: { id_newsletter: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Newsletter.update(
                {email:email},
                {where:{id_newsletter: id}}
            )
            return res.json({ message: 'записть ' + id + ' обновлена'})
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async addition(req, res, next){
        try{
            const {email} = req.body
            const newsletter = await Newsletter.create({email})

            const transporter = nodemailer.createTransport({
                service: 'gmail', 
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            })
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: 'dmitrijkopejka5@gmail.com',
                subject: 'Новая подписка на рассылку',
                text: `Новый пользователь подписался на рассылку: ${email}`,
                html: `<p>Новый пользователь подписался на рассылку: <strong>${email}</strong></p>`
            }

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Ошибка отправки письма:', error);
                } else {
                    console.log('Письмо отправлено:', info.response);
                }
            });

            return res.json(newsletter)

        } catch(e){
            console.error(e);
            next(ApiError.badRequest(e.message))
        }
    }
    async delete(req, res, next){
        try{
            const {id} = req.params
            if(!id){
               return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Newsletter.findOne({ where: { id_newsletter: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Newsletter.destroy({where:{ id_newsletter: id }})
            return res.json({ message: 'записть ' + id + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
       
    }
}

module.exports = new NewsletterController()