import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { POLITICS_ROUTER } from "../utils/const";
import '../styles/admin/modalAdmin.css'

function ModalAdmin({ onClose, onSubmit, onEdit, inputs, title, submitButtonText, initialData }) {
  const [formData, setFormData] = useState(initialData || {});
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
    }
  }, [initialData])

  const PhoneMask = (e) => {
    const { name, value } = e.target;
    let cleanedValue = value.replace(/\D/g, '');
    
    let formattedValue = '';
    if (cleanedValue.length > 0) {
      formattedValue = `+7 (${cleanedValue.substring(1, 4)}) ${cleanedValue.substring(4, 7)}-${cleanedValue.substring(7, 9)}-${cleanedValue.substring(9, 11)}`;
    }
    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type === 'tel'){
      PhoneMask(e);
      return;
    }
    if (files) {
      setFormData({ ...formData, [name]: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (initialData) {
      onEdit(formData)
    } else {
      onSubmit(formData)
    }
  }

  return (
    <div className="modalAdmin">
      <div className="modalAdmin__content">
        <form className="modalAdmin__form" onSubmit={handleSubmit}>
          <img className="modalAdmin__form-over"
            src="imges/icon/cross.png" 
            alt="cross"
            onClick={()=> {onClose(); document.body.style.overflow='auto'}}/>
          <h3 className="modalAdmin__title">{title}</h3>
          {inputs.map((field) => (
            <div key={field.name} className="modalAdmin__form-box">
              {field.type === "textarea" ? (
                <textarea
                  className="descript"
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  onChange={handleChange}
                  maxLength={field.maxLength}
                  value={formData[field.name] || ""}
                />
              ) : field.type === "file" ? (
                <input
                  className="fails"
                  type="file"
                  name={field.name}
                  onChange={handleChange}
                  required={field.required}
                />
              ) : field.type === "email" ? (
                <input
                  className="input"
                  type="email"
                  name={field.name}
                  onChange={handleChange}
                  required={field.required}
                  pattern={field.pattern}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ""}
                />
              ) : field.type === "checkbox" ? (
                <div className="checkbox__box">
                  <div>
                    <input
                      className="chek"
                      type="checkbox"
                      name={field.name}
                      onChange={() => { setChecked(!checked) }}
                      required={field.required}
                      checked={checked}
                    />
                    <Link 
                      className="checkbox__box-text"
                      to={POLITICS_ROUTER}
                    >
                      Даю согласие на обработку персональных данных
                    </Link>
                  </div>
                  <Link 
                    className="checkbox__box-text"
                    to={POLITICS_ROUTER}
                  >
                    Нажимая на кнопку "Заказать", я подтверждаю, что ознакомился с 
                    Политикой обработки персональных данных и даю согласие 
                    на обработку всех моих персональных данных указанных в форме
                  </Link>
                </div>
              ) : field.type === "select" ? (
                <select
                  className="select"
                  name={field.name}
                  onChange={handleChange}
                  required={field.required}
                  value={formData[field.name] || ""}
                >
                  <option value="">{field.placeholder}</option>
                  {field.options.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type || "text"}
                  className={field.className || "input"}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  onChange={handleChange}
                  value={formData[field.name] || ""}
                />
              )}
            </div>
          ))}
          <button className="modalAdmin-button" type="submit">
            {submitButtonText || "Отправить"}
          </button>
        </form>
      </div>
    </div>
  );
}
export default ModalAdmin;