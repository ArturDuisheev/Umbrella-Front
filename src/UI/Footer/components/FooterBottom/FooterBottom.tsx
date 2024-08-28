'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import './FooterBottom.scss';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchServices } from '@/features/Home/Services/servicesThunk';
import { selectServices } from '@/features/Home/Services/servicesSlice';

const FooterBottom = () => {
  const dispatch = useAppDispatch();
  const services = useAppSelector(selectServices);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <div className="footerBottom">
      <div className="footer-bottom container">
        <div className="footer-bottom-logo">
          <img
            className="footer-bottom-logo-img"
            src="/assets/footer/footer-logo.svg"
            alt="Umrella agency"
          />
          <span className="footer-bottom-logo-rights">Все права защищены</span>
        </div>

        <div className="footer-bottom-nav">
          <ul className="footer-bottom-nav-lists">
            {services?.map((service) => {
              return (
                <li className="footer-bottom-nav-lists-list">
                  <Link className="footer-bottom-nav-lists-list" href={`/service/${service.id}/1`}>
                    {service.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-bottom-social-links">
          <a className="link whatsapp" href="/" target="_blank" rel="noreferrer"></a>
          <a className="link instagram" href="/" target="_blank" rel="noreferrer"></a>
          <a className="link facebook" href="/" target="_blank" rel="noreferrer"></a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
