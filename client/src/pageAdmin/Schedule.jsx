import React, { useState, useEffect } from "react";
import GeneralAdmin from "../component/GeneralAdmin";
import MenuAdmin from '../component/menuAdmin';
import '../styles/admin/home.css'
import { $host } from '../http/index';

function Schedule() {

    const [scheduleName, setScheduleName] = useState([])

    const getSchedule = async () => {
        const res = await $host.get(`api/daySchedule/`)
        setScheduleName(res.data);
    };

    useEffect(() => {
        getSchedule();
      }, []);

    const getScheduleDay = () => {
        return scheduleName.map(obj => ({
            value: obj.id_daySchedule.toString(),
            label: obj.name
        }));
    };

    const getScheduleName = (id) => {
        const day = scheduleName.find(item => item.id_daySchedule === id);
        return day ? day.name : 'Неизвестный день';
    };

    
    const inputs = [
        { name: "schedule", type: "text", placeholder: "Название", required: true },
        { name: "time", type: "text", placeholder: "Време", required: true },
        {   
            name: "id_daySchedule", 
            type: "select", 
            placeholder: "Выберите день", 
            required: true,
            options: getScheduleDay(),
        }
    ];

  return (
    <div className="asdasd">
        <div className='wraper'>
            <div className="admin__contnet">
                <MenuAdmin/>
                <GeneralAdmin
                    division='id_daySchedule'
                    idKey='id_schedule'
                    inputs = {inputs}
                    title='Расписание'
                    apiPoints={{
                    get: "/api/schedule/",
                    add: "/api/schedule/",
                    edit: "/api/schedule",
                    delete: "/api/schedule",
                    }}
                    renderItem={(el) => (
                    <div className='generalAdmin'>
                        <p className="schedule-title">{getScheduleName(el.id_daySchedule)}</p>
                        <p>Название: {el.schedule}</p>
                        <p>Название: {el.time}</p>
                    </div>
                    )}
                />  
            </div>
        </div>        
  </div>
  )
}

export default Schedule