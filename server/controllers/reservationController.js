const {Reservation} = require('../models/models')
const ApiError = require('../error/ApiError')
const nodemailer = require('nodemailer')

class ReservationController {
    async receiving(req, res){
        const reservation = await Reservation.findAll()
        return res.json(reservation) 
    }

    async addition(req, res, next){
        try{
            const {fio, email, phone, quantity, id_shifts, fioChild, age, education, call, found} = req.body
            const reservation = await Reservation.create({fio, email, phone, quantity, id_shifts, fioChild, age, education, call, found})

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER, 
                    pass: process.env.EMAIL_PASS
                }
            });
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: 'dmitrijkopejka5@gmail.com', 
                subject: 'Новая бронь создана',
                text: `
                    Новая бронь:
                    ФИО: ${fio}
                    Email: ${email}
                    Телефон: ${phone}
                    Количество мест: ${quantity}
                    Смена: ${id_shifts}
                    ФИО ребенка: ${fioChild}
                    Возраст: ${age}
                    Образование: ${education}
                    Способ связи: ${call}
                    Как узнали: ${found}
                `,
                html: `
                    <h2>Новая бронь</h2>
                    <p><strong>ФИО:</strong> ${fio}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Телефон:</strong> ${phone}</p>
                    <p><strong>Количество мест:</strong> ${quantity}</p>
                    <p><strong>Смена:</strong> ${id_shifts}</p>
                    <p><strong>ФИО ребенка:</strong> ${fioChild}</p>
                    <p><strong>Возраст:</strong> ${age}</p>
                    <p><strong>Образование:</strong> ${education}</p>
                    <p><strong>Способ связи:</strong> ${call}</p>
                    <p><strong>Как узнали:</strong> ${found}</p>
                `
            };
            transporter.sendMail(mailOptions)
                .then(info => console.log('Email отправлен: ' + info.response))
                .catch(err => console.error('Ошибка отправки email:', err));

            return res.json(reservation)
        } catch (e){
            next(ApiError.badRequest(e.message))
        } 
    }

    async editing(req, res, next){
        try{
            const {id} = req.params
            const {fio, email, phone, quantity, id_shifts, fioChild, age, education, call, found}= req.body
            if(!id){
                return next(ApiError.badRequest('такого элемента не существует'))
            }
            const event = await Reservation.findOne({ where: { id_reservation: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Reservation.update(
                {fio:fio, email:email, phone:phone, quantity:quantity, id_shifts:id_shifts, fioChild:fioChild, age:age, education:education, call:call, found:found},
                {where:{id_reservation:id}}
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
            const event = await Reservation.findOne({ where: { id_reservation: id } });
            if (!event) {
                return next(ApiError.badRequest('такого элемента не существует'));
            }
            await Reservation.destroy({ where:{ id_reservation: id } })
            return res.json({ message: 'записть ' + id + ' удалена'})
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new ReservationController()