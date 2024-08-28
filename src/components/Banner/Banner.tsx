import React from 'react';
import './Banner.scss';

interface Props {
  src: string;
  title: string;
  subTitle: string[] | string;
}

const Banner: React.FC<Props> = ({ src, title, subTitle }) => {
  const bannerLink = `url(${src})`;

  return (
    <div
      className="banner"
      style={{
        backgroundImage: bannerLink,
      }}
    >
      <div className="banner-wrapper container">
        <div className="banner-wrapper-row">
          <h1 className="banner-wrapper-row-title">{title}</h1>
          {Array.isArray(subTitle) ? (
            subTitle.map((subTitle) => {
              return <p className="banner-wrapper-row-subtitle">{subTitle}</p>;
            })
          ) : (
            <p className="banner-wrapper-row-subtitle">{subTitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
