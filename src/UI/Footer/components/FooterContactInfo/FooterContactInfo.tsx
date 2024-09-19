import React from 'react';
import './FooterContactInfo.scss';

const FooterContactInfo = () => {
  return (
    <div className="footer-contact-info">
      <a className="footer-contact-info-link phone" href="tel:+77761285015">
        +7 776 128 50 15
      </a>
      <a
        className="footer-contact-info-link email"
        href="mailto:info@umbrella.com.kz"
        target="_blank"
        rel="noreferrer"
      >
        info@umbrella.com.kz
      </a>
      <span className="footer-contact-info-link address">
        г. Алматы, ул. Жандосова, 12, офис №5
      </span>
    </div>
  );
};

export default FooterContactInfo;
