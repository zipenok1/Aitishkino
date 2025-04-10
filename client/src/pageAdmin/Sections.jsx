import React from 'react'
import GeneralAdmin from "../component/GeneralAdmin";
import MenuAdmin from '../component/menuAdmin';
import '../styles/admin/home.css'

function Sections() {
    const inputs = [
        { name: "name", type: "text", placeholder: "Название секции" },
        { name: "icon", type: "file", placeholder: "Иконка"},
        { name: "title1", type: "text", placeholder: "Название раздела" },
        { name: "title2", type: "text", placeholder: "Название раздела" },
        { name: "description1", type: "textarea", placeholder: "Описание", maxLength: 1200 },
        { name: "description2", type: "textarea", placeholder: "Описание", maxLength: 1200 },
        { name: "description3", type: "textarea", placeholder: "Описание", maxLength: 1200 },
        { name: "description4", type: "textarea", placeholder: "Описание", maxLength: 1200 },
        { name: "description5", type: "textarea", placeholder: "Описание", maxLength: 1200 }
    ];
  return (
    <div className="asdasd">
        <div className='wraper'>
            <div className="admin__contnet">
                <MenuAdmin/>
                <GeneralAdmin
                    idKey='id_sections'
                    inputs = {inputs}
                    title='Секции'
                    apiPoints={{
                    get: "/api/sections/",
                    add: "/api/sections/",
                    edit: "/api/sections",
                    delete: "/api/sections",
                    }}
                    renderItem={(el) => (
                    <div className='generalAdmin'>
                        <div className={el.icon ? 'generalAdmin__imges' : null} style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/${el.icon})`}}></div>
                        <p>{el.name}</p>
                        {el.title1 ? (
                            <p>{el.title1}</p>
                        ) : null
                        }
                        {el.title2 ? (
                            <p>{el.title2}</p>
                        ) : null
                        }
                        {el.description1 ? (
                            <p>{el.description1}</p>
                        ) : null
                        }
                        {el.description2 ? (
                            <p>{el.description2}</p>
                        ) : null
                        }
                        {el.description3 ? (
                            <p>{el.description3}</p>
                        ) : null
                        }
                        {el.description4 ? (
                            <p>{el.description4}</p>
                        ) : null
                        }
                        {el.description5 ? (
                            <p>{el.description5}</p>
                        ) : null
                        }
                    </div>
                    )}
                />  
            </div>
        </div>        
  </div>
  )
}

export default Sections