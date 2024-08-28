'use client';
import { FC, useEffect, useState } from 'react';
import './Background.scss';
import step0Mobile from '/public/assets/animate-umbrella/00-mobile.svg';
import step0 from '/public/assets/animate-umbrella/00.svg';
import step1 from '/public/assets/animate-umbrella/01.svg';
import step2 from '/public/assets/animate-umbrella/02.svg';
import step3 from '/public/assets/animate-umbrella/03.svg';
import step4 from '/public/assets/animate-umbrella/04.svg';
import { useMediaQuery } from '@/lib/hooks';

const Background: FC = () => {
  const [visibleComponentIndex, setVisibleComponentIndex] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);
  const isMedia992 = useMediaQuery(992);

  useEffect(() => {
    const components = [step1, step2, step3, step4];

    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setVisibleComponentIndex((prevIndex) => (prevIndex + 1) % components.length);
        setIsFading(false);
      }, 300); // Time to fade out before switching
    }, 1800); // Total interval time including fade-out time

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <>
      <img
        src={isMedia992 ? step0Mobile.src : step0.src}
        className="umbrella-img"
        alt="umbrella background"
      />
      {visibleComponentIndex !== undefined && (
        <img
          src={[step1, step2, step3, step4][visibleComponentIndex]?.src}
          className={`umbrella-img-parent ${isFading ? 'hidden' : 'visible'}`}
          alt={`animation step ${visibleComponentIndex + 1}`}
        />
      )}
    </>
  );
};

export default Background;
