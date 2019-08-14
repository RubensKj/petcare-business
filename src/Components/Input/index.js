import React from 'react';

import './styles.css';

export default function Input({ type, value, name, placeholder, messageBottom, onChange }) {
  return (
    <div className="input-area">
      <div className="input-div inputed">
        <input className="input-basic" type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} />
      </div>
      <span>{messageBottom}</span>
    </div>
  );
}
