'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import DropdownList from '@/UI/Toolbar/components/Dropdown/DropdownList';
import './NavList.scss';
import { fetchServices } from '@/features/Home/Services/servicesThunk';
import { selectServices } from '@/features/Home/Services/servicesSlice';
import useOutsideClick, { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { usePathname } from 'next/navigation';
import ServiceListMobile from '../ServiceListMobile/ServiceListMobile';

const NavList: React.FC<any> = ({
  isMobile,
  open,
  setOpen,
  openServices,
  setOpenServices,
  handleCloseServices,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useAppDispatch();
  const services = useAppSelector(selectServices);
  const pathname = usePathname();

  const ref = useRef(null);

  useOutsideClick(ref, () => setOpen(false));

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    dispatch(fetchServices());
  }, []);

  const dropdownData = services.map((service) => {
    return {
      title: service.title,
      list: service.category?.map((tab) => {
        return { title: tab.title, id: tab.id };
      }),
      id: service.id,
    };
  });

  const handleItemClick = () => {
    setOpen(false);
    setIsHovered(false);
  };

  return (
    <nav className="nav">
      <ul className="lists">
        <li
          className="list service"
          onClick={() => {
            if (isMobile) {
              setOpenServices(!openServices);
            } else {
              setOpen(!open);
            }
          }}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          Услуги
          {isMobile ? (
            ''
          ) : (
            <img
              className="arrow"
              src={isHovered ? '/assets/arrow-green.svg' : '/assets/arrow.svg'}
              alt="umbrella"
              style={{
                transform: open ? 'rotate(-90deg)' : 'rotate(0deg)',
                transition: 'transform 0.5s ease',
              }}
            />
          )}
          {isMobile && (
            <img
              className="arrow"
              src={isHovered ? '/assets/arrow-right-green.svg' : '/assets/arrow-right.svg'}
              alt="umbrella"
              style={{
                transition: 'transform 0.5s ease',
              }}
            />
          )}
          {isMobile && (
            <div
              className={`service-list-mobile ${
                openServices ? `service-list-mobile-visible` : `service-list-mobile-hidden`
              }`}
            >
              <ServiceListMobile openServices={handleCloseServices} services={dropdownData} />
            </div>
          )}
          {!isMobile && open && (
            <div className={open ? 'dropdown active' : 'dropdown'} ref={ref}>
              {dropdownData.map((item, index) => (
                <div className="dropdown-section">
                  <Link href={'/service/' + item.id + '/' + '1'}>
                    <h6 className="dropdown-title">{item?.title}</h6>
                  </Link>
                  <DropdownList key={index} list={item.list} id={item.id} />
                </div>
              ))}
            </div>
          )}
        </li>
        <li className="list">
          <Link href="/about-us" onClick={handleItemClick}>
            О компании
          </Link>
        </li>
        <li className="list">
          <Link href="/#our-approach" onClick={handleItemClick}>
            Наш подход
          </Link>
        </li>
        <li className="list">
          <Link href="/form" onClick={handleItemClick}>
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
