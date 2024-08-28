import { FC } from 'react';
import style from './ServiceList.module.scss';
import Link from 'next/link';

const ServiceListMobile: FC<any> = ({ openServices, services }) => {
  return (
    <div className={style.wrapper}>
      <img
        className="header-wrapper-mobile-menu-logo-img"
        src="/assets/toolbar/logo-mobile.svg"
        alt="Umbrella agency"
      />
      <div className={style.serviceBtn} onClick={openServices}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M11.25 14.9396L6.36 10.0496C5.7825 9.47207 5.7825 8.52707 6.36 7.94957L11.25 3.05957"
            stroke="#231F20"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Услуги
      </div>
      <ul className={style.list}>
        {services?.map((serv: any) => (
          <li>
            <Link href={'/service/' + serv.id + '/' + '1'} className={style.title}>
              {serv.title}
            </Link>
            <ul className={style.list}>
              {serv.list.map((item: any) => (
                <Link href={'/service/' + serv.id + '/' + item.id} className={style.tab}>
                  {item.title}
                </Link>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceListMobile;
