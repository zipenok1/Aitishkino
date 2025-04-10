import React, { useState, useEffect } from "react";
import { $authHost, $host } from '../http/index';
import '../styles/admin/generalAdmin.css'
import ModalAdmin from "./ModalAdmin";



function GeneralAdmin({renderItem, apiPoints, title, inputs, idKey, type}) {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState({ isModal: false });
  const [editing, setEditing] = useState({ id: '', isModal: false, initialData: null });

  const openModal = (mod) => {
    setOpen({ isModal: !mod });
  };

  const editingModal = ( ids, modOP, initialData) => {
    setEditing({ id: ids, isModal: !modOP, initialData });
  };
  
  const getApp = async () => {
      const res = await $authHost.get(apiPoints.get);
      setData(res.data);
  };

  const deleteApp = async (id) => {
      await $authHost.delete(`${apiPoints.delete}/${id}`);
      getApp();
  };

  const handleSubmit = async (formData) => {
    try {
      const data = new FormData();
        Object.keys(formData).forEach((key) => {
          data.append(key, formData[key]);
      });
      await $authHost.post(apiPoints.add, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      getApp();
      setOpen({ isModal: false });
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };
  
  const editingSubmit = async (editingData, id) => {
    try {
      const data = new FormData();
        Object.keys(editingData).forEach((key) => {
          data.append(key, editingData[key]);
      });
      await $authHost.put(`${apiPoints.edit}/${id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      getApp();
      setEditing({ isModal: false, id: '', initialData: null });
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };
  
  useEffect(() => {
    getApp()
  }, [])
  
  return (
    <div className='genericAdmin'>
      <h2>{title}</h2>
      <div className="genericAdmin__butt">
        <button onClick={() => openModal(open.isModal)}>Добавить</button>
      </div>
        {open.isModal && (
            <ModalAdmin
              onClose={() => setOpen({ isModal: false })}
              onSubmit={handleSubmit}
              inputs={inputs}
              title="Добавить контент"
              submitButtonText="Добавить"
            />
          )}
        <div className={ type === 'table' ? "genericAdminTable-flex" : "genericAdmin-flex"}>
          {data.map((el) => (
            <div className={ type === 'table' ? 'genericAdminPanelTable__box' : 'genericAdminPanel__box' } key={el[idKey]}>
            {renderItem(el)}
            <div className={type === 'table' ? 'genericAdminPanelTable__box-butt' : 'genericAdminPanel__box-butt'}>
              <button onClick={() => editingModal(el[idKey], editing.isModal, el)}>обновить</button>
              <button onClick={() => deleteApp(el[idKey])}>удалить</button>
            </div>
            {editing.isModal && el[idKey] === editing.id && (
                <ModalAdmin
                  onClose={() => setEditing({ isModal: false, id: '', initialData: null })}
                  onEdit={(data) => editingSubmit(data, el[idKey])}
                  inputs={inputs}
                  title="Обновить контент"
                  submitButtonText="Обновить"
                  initialData={editing.initialData}
                />
              )}
          </div>
          ))}
      </div>
    </div>
  );
}

export default GeneralAdmin;