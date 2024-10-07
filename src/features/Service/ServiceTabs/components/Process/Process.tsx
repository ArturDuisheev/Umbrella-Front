'use client';
import React, { FC, useState } from 'react';
import Accordion from '@/features/Service/ServiceTabs/components/Process/components/Accordion/Accordion';
import './Process.scss';

interface ProcessProps {
  processes: { id: number; title: string; description: string }[];
}

const Process: FC<ProcessProps> = ({ processes }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleAccordionClick = (id: number) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  if (!processes || processes.length === 0) {
    return null;
  }

  return (
    <section className="process">
      <div className="container">
        <div className="process-info"></div>
        <div className="process-steps">
          {processes.map((accordion) => (
            <Accordion
              key={accordion.id} // Используем уникальный id вместо индекса
              index={accordion.id} // Передаем id как индекс
              title={accordion.title}
              list={[accordion.description]}
              isOpen={openIndex === accordion.id}
              onClick={() => handleAccordionClick(accordion.id)} // Используем id для управления состоянием
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
