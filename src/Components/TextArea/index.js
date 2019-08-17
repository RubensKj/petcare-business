import React from 'react';

import './styles.css';

export default function TextArea({ type, placeholder, onChange }) {
  return (
    <div className="description-area">
      <textarea type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  );
}
