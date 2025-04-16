import React, { useState, useEffect } from 'react'
import {$host} from '../http/index'
import ModalAdmin from './ModalAdmin';

function OurShiftsCards({apiPoints}) {
    const [open, setOpen] = useState({ isModal: false });
    const [date, setDate] = useState([])
    const [currentShift, setCurrentShift] = useState('getOne');

    const openModal = (mod) => {
        setOpen({ isModal: !mod });
      };

    const getApp = async (shiftEndpoint) => {
        const res = await $host.get(apiPoints[shiftEndpoint]);
        setDate(res.data);
    };

    useEffect(() => {
        getApp(currentShift);
    }, [currentShift]);
    
    useEffect(() => {
        if (open.isModal) {
            document.body.style.overflow = 'hidden';
        } 
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [open.isModal]);

    const handleSubmit = async (formData) => {
    try {
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });
        await $host.post(apiPoints.add, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        });
        getApp(currentShift)
        setOpen({ isModal: false });
    } catch (error) {
        console.error('Ошибка:', error);
    }
    };

   const shiftsContent = [
        { name: "fio", type: "text", placeholder: "Ф.И.О", required: true },
        { name: "fioChild", type: "text", placeholder: "Ф.И.О ребенка", required: true },
        { name: "age", type: "text", placeholder: "Возраст ребенка", required: true },
        { name: "education", type: "text", placeholder: "Наименование образовательной организации", required: true },
        { name: "email", type: "email", placeholder: "Почта", required: true },
        { name: "phone", type: "tel", placeholder: "Номер телнфона", required: true },
        { name: "quantity", type: "text", placeholder: "Количество мест", required: true },
        { 
            name: "id_shifts", 
            type: "select", 
            placeholder: "Выберите смену", 
            required: true,
            options: [
                { value: "1", label: "Первая смена: 14 - 18 июля" },
                { value: "2", label: "Вторая смена: 21 - 25 июля" },
                { value: "3", label: "Третья смена: 28 июля - 1 августа" },
            ]
        },
        { name: "call", type: "text", placeholder: "Время, удобное для нашего звонка", required: true },
        { name: "found", type: "text", placeholder: "Откуда Вы узнали об лагере", required: true },
        { name: "checkbox", type: "checkbox", required: true},
   ]

  return (
    <div className='ourShiftsCards'>
        <div className='menuSlider'>
                <button onClick={() => setCurrentShift('getOne')}>Первая смена</button>
                <button onClick={() => setCurrentShift('getTwo')}>Вторая смена</button>
                <button onClick={() => setCurrentShift('getThree')}>Третья смена</button>
        </div>
        {date.map((el)=>(
            <div className='ourShiftsCards__content'  key={el.id_shifts}>
                <img className='ourShiftsCards__content-img' src={process.env.REACT_APP_API_URL + `/` + el.link_img}/> 
                <div className='ourShiftsCards__content-contener'>
                    <div className='ourShiftsCards__contener-top'>
                        <h3>{el.title}</h3>
                        <p className='ourShiftsCards-date'>{el.date}</p>
                        <p className='ourShiftsCards-desc'>{el.description}</p>
                    </div>
                    <div className='ourShiftsCards__contener-bott'>
                        <div>
                            <p>{el.price}</p>
                            <p><span>{el.partprice}</span> Для партнеров</p>
                        </div>
                        <button className='generalBtm' onClick={() => openModal(open.isModal)}>Забронировать</button>
                    </div>
                        {open.isModal && (
                            <ModalAdmin
                                onClose={() => setOpen({ isModal: false})}
                                onSubmit={handleSubmit}
                                inputs={shiftsContent}
                                title="Бронирование смены"
                                submitButtonText="Подтвердить"
                            />
                        )}
                </div> 
            </div>
        ))}
    </div>
  )
}

export default OurShiftsCards