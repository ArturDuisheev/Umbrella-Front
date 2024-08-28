import React from 'react';
import FormLink from '@/components/FormLink/FormLink';
import './Main.scss';
import Background from '@/UI/Background/Background';

const Main = () => {
  const bannerLink = `url("/assets/main-img.jpeg")`;
  return (
    <section className="hero-section">
      <div className="hero-section-banner" style={{ backgroundImage: bannerLink }}>
        <div className="background">
          <Background />
        </div>
        <div className="hero-section-banner-wrapper container">
          <h1 className="hero-section-banner-wrapper-title">
            Мы стремимся стать
            <br /> партнером в digital- <br />
            маркетинге, которому
            <br /> вы доверяете
          </h1>
          <p className="hero-section-banner-wrapper-subtitle">
            Предлагаем комплексный анализ вашего <br /> бизнеса и индивидуальные стратегии для
            <br /> PPC, SEO и других ключевых направлений
          </p>
          <div className="hero-section-banner-wrapper-link">
            <FormLink />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
