import React, { FC } from 'react';
import Link from 'next/link';
import '@/components/FormLink/FormLink.scss';

const FormLink: FC = () => {
  return (
    <div className="form-link">
      <Link className="form-link-btn" href="/form">
        Оставить заявку
        <div className="form-link-btn-wrapper-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
          >
            <path
              d="M8.05812 6.49754L20.3775 7.37749L21.2575 19.6969"
              stroke="#FDFDFE"
              strokeWidth="2.4"
              strokeLinecap="square"
            />
            <path
              d="M21.226 8.22597C21.6946 7.75734 21.6946 6.99754 21.226 6.52891C20.7573 6.06028 19.9975 6.06028 19.5289 6.52891L21.226 8.22597ZM12.7654 23.0662L13.614 22.2176L11.9169 20.5206L11.0684 21.3691L12.7654 23.0662ZM19.5289 6.52891L8.31853 17.7393L10.0156 19.4364L21.226 8.22597L19.5289 6.52891ZM8.31853 17.7393L7.48453 18.5733L9.18158 20.2704L10.0156 19.4364L8.31853 17.7393ZM12.3714 23.4602L12.7654 23.0662L11.0684 21.3691L10.6744 21.7631L12.3714 23.4602ZM7.48453 23.4602C8.83401 24.8097 11.0219 24.8097 12.3714 23.4602L10.6744 21.7631C10.2621 22.1754 9.5938 22.1754 9.18158 21.7631L7.48453 23.4602ZM7.48453 18.5733C6.13505 19.9228 6.13505 22.1107 7.48453 23.4602L9.18158 21.7631C8.76936 21.3509 8.76936 20.6826 9.18158 20.2704L7.48453 18.5733Z"
              fill="#FDFDFE"
            />
          </svg>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.124 5.81023L13.2224 5.44434L13.2224 22.5554L16.124 22.1896C19.0007 21.8268 21.4762 19.9813 22.6452 17.3278C23.5793 15.2075 23.5793 12.7922 22.6452 10.6719C21.4762 8.01851 19.0007 6.17299 16.124 5.81023Z"
              stroke="#FDFDFE"
              strokeWidth="2.4"
              strokeLinecap="square"
            />
            <path
              d="M22.8672 14L7.01331 14L5.83386 14C4.58815 14 3.5783 15.0098 3.5783 16.2556V16.2556C3.5783 17.5013 4.58815 18.5111 5.83386 18.5111L6.39109 18.5111"
              stroke="#FDFDFE"
              strokeWidth="2.4"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default FormLink;
