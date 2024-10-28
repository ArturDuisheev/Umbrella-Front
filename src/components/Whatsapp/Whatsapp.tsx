import React from 'react';
import './Whatsapp.scss';

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/1234567890" // Замените номер на нужный
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-icon"
    >
      <img
        src="/assets/WhatsApp_icon.png"// Путь к иконке
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppIcon;
