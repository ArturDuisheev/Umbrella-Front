import React from 'react';
import './OurApproach.scss';
import Link from 'next/link';

const OurApproach = () => {
  return (
    <section className="our-approach" id="our-approach">
      <div className="our-approach-content container">
        <div className="our-approach-content-wrapper">
          <h3 className="our-approach-content-wrapper-title">Наш подход</h3>
          <p className="our-approach-content-wrapper-text" style={{ marginBottom: '25px' }}>
            Мы называем наш подход <b>«зонтичным решением»</b>, когда через детальную диагностику
            вашего бизнеса мы разрабатываем уникальные стратегии продвижения, которые точно
            соответствуют вашим потребностям и целям.
          </p>
          <p className="our-approach-content-wrapper-text">
            Мы тщательно анализируем вашу целевую аудиторию, выявляем её драйверы и «боли» и{' '}
            <b>создаём решения, которые эффективно и правильно адресуют нужную коммуникацию.</b>
          </p>
          <Link href={'/about-us'} className="more-about-umbrella">
            Подробнее о “Зонтичном решении”
            <div className="form-link-btn-wrapper-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 27 28"
                fill="none"
              >
                <path
                  d="M8.05812 6.12498L20.3775 7.00494L21.2575 19.3243"
                  stroke="#14467B"
                  strokeWidth="2.4"
                  strokeLinecap="square"
                />
                <path
                  d="M21.226 7.85341C21.6946 7.38478 21.6946 6.62498 21.226 6.15635C20.7573 5.68773 19.9975 5.68773 19.5289 6.15635L21.226 7.85341ZM12.7654 22.6936L13.614 21.8451L11.9169 20.148L11.0684 20.9966L12.7654 22.6936ZM19.5289 6.15635L8.31853 17.3667L10.0156 19.0638L21.226 7.85341L19.5289 6.15635ZM8.31853 17.3667L7.48453 18.2007L9.18158 19.8978L10.0156 19.0638L8.31853 17.3667ZM12.3714 23.0876L12.7654 22.6936L11.0684 20.9966L10.6744 21.3906L12.3714 23.0876ZM7.48453 23.0876C8.83401 24.4371 11.0219 24.4371 12.3714 23.0876L10.6744 21.3906C10.2621 21.8028 9.5938 21.8028 9.18158 21.3906L7.48453 23.0876ZM7.48453 18.2007C6.13505 19.5502 6.13505 21.7382 7.48453 23.0876L9.18158 21.3906C8.76936 20.9784 8.76936 20.31 9.18158 19.8978L7.48453 18.2007Z"
                  fill="#14467B"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className="our-approach-content-img-box">
          <img
            className="our-approach-content-img-box-img"
            src="/assets/home/our-approach/umrella.svg"
            alt="Umrella agency"
          />
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
