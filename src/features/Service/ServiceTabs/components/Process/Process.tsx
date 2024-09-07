'use client';
import React, { FC, useState } from 'react';
import Accordion from '@/features/Service/ServiceTabs/components/Process/components/Accordion/Accordion';
import './Process.scss';

const Process: FC<any> = ({ processes }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleAccordionClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  console.log(processes)

  return (
    <section className="process">
      <div className="container">
     <div className="process-info">
       
        </div>
        <div className="process-steps">
          {processes?.map((accordion: any, i: any) => (
            <Accordion
              key={i}
              index={i + 1}
              title={accordion.title}
              list={[accordion.description]}
              isOpen={openIndex === i}
              onClick={() => handleAccordionClick(i)}
            />
          ))}
        </div>
        {/* <div className="process-img-box">
          <img
            className="process-img-box-img"
            src="/assets/service/process-background-img.svg"
            alt="Process Background"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Process;
