'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import './ServiceList.scss';
import { Service } from '../../../../../../types';

interface Props {
  service: Service;
}

const ServiceList: React.FC<Props> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(-1);

  return (
    <div className="services-list">
      <ul className="services-list-content">
        <Link href={'/service/' + service.id + '/' + '1'}>
          <h6 className="services-list-content-title">
            {service.title}
            <img
              className="services-list-content-title-arrow"
              src="/assets/umbrella-arrow-white.svg"
              alt="umbrella"
            />
          </h6>
        </Link>
        {service.category.map((category, index) => (
          <li
            className="services-list-content-item"
            key={category.id}
            onMouseEnter={() => setIsHovered(category.id)}
            onMouseLeave={() => setIsHovered(-1)}
          >
            <Link
              href={'/service/' + service.id + '/' + category.id}
              className={
                'services-list-content-item-link' + ' ' + (index === 0 ? 'link-primary' : '')
              }
            >
              <img
                className="services-list-content-item-link-img"
                src={
                  index === 0
                    ? isHovered === category.id
                      ? '/assets/umbrella-primary.svg'
                      : '/assets/umbrella-green.svg'
                    : isHovered === category.id
                    ? '/assets/umbrella-primary.svg'
                    : '/assets/umbrella.svg'
                }
                alt="umbrella"
                style={
                  index === 0
                    ? {
                        transition: 'transform 1.5s',
                      }
                    : {
                        transition: 'transform 1.5s',
                      }
                }
              />
            {category.title}
            {/*{category.title.charAt(0).toUpperCase() + category.title.slice(1).toLowerCase()}*/}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
